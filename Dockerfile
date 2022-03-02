FROM actovosgroup/php-7.3-nginx:latest

WORKDIR /app

COPY deploy/build_run_app.sh /init.d
RUN chmod +x /init.d/build_run_app.sh

COPY package*.json ./
RUN npm ci

COPY server/composer.json ./
COPY server/composer.lock* ./
RUN composer install --no-scripts --no-autoloader

COPY client/package*.json ./client/
RUN npm ci --prefix ./client

COPY . .

RUN chown -R www-data:www-data server/storage

EXPOSE 80
