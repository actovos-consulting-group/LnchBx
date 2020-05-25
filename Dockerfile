FROM actovosgroup/php-7.3-base:latest

# install node/npm for building JS/ENV dynamically
RUN apk add --update nodejs nodejs-npm

WORKDIR /app

COPY . .

RUN ["chmod", "+x", "./deploy/build_run_app.sh"]

RUN chmod -R 777 ./server/storage ./server/bootstrap

VOLUME /app

RUN php ./server/artisan cache:clear \
    && php ./server/artisan config:clear

CMD ["sh", "/app/deploy/build_run_app.sh"]

EXPOSE 80