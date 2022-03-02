FROM actovosgroup/php-7.3-nginx:latest

WORKDIR /app

COPY deploy/build_run_app.sh /init.d
RUN chmod +x /init.d/build_run_app.sh

COPY package.json .
COPY package-lock.json* .
RUN npm i

COPY server/composer.json ./server/
COPY server/composer.lock* ./server/
RUN composer install --no-scripts --no-autoloader --working-dir ./server

COPY client/package.json ./client/
COPY client/package-lock.json ./client/
RUN npm i --prefix ./client

COPY . .

RUN chown -R www-data:www-data server/storage
RUN chmod -R 777 server/storage

EXPOSE 80
