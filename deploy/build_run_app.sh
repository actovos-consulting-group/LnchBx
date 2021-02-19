#!/bin/sh

APP_ENV="${APP_ENV:-local}"

if ([ "$APP_ENV" != "local" ] || [ -n "$RUNNING_IN_VOYAGE" ]) && [ ! -n "$MIGRATION_RUN" ]; then
  echo "🚀 Build JS for non local environment"

  cat >/app/server/.env <<EOL
APP_NAME=LnchBx
APP_KEY=
EOL

  npm run build --prefix client
fi

DB_HOSTNAME=$([ -n "$DB_HOST" ] && echo "tcp://$DB_HOST:5432" || echo "tcp://127.0.0.1:5432")

if [ "$APP_ENV" == "local" ] || [ -n "$RUNNING_IN_VOYAGE" ]; then
  echo "🚀 Wait for DB to start"
  dockerize -wait $DB_HOSTNAME -timeout 60s
fi

echo "🚀 Dump Autoloader"
composer dumpautoload --working-dir ./server

if [ -n "$RUNNING_IN_VOYAGE" ] || [ -n "$CIRCLECI" ] || [ "$APP_ENV" == "local" ] || [ -n "$MIGRATION_RUN" ]; then
  echo "🚀 Running migrations"
  php ./server/artisan migrate --force
fi

echo "🚀 Generate App Key"
php ./server/artisan key:generate

if [ -n "$RUNNING_IN_VOYAGE" ] || [ -n "$CIRCLECI" ] || [ "$APP_ENV" == "local" ]; then
  echo "🚀 Seeding"
  php ./server/artisan db:seed --class=DevSeeder
fi
