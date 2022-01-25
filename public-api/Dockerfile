FROM php:8.0-alpine

ENV TIME_ZONE=America/Toronto

RUN apk add --no-cache \
  bash \
  composer \
  make \
  php8-dom \
  php8-fileinfo \
  php8-mbstring \
  php8-pecl-mcrypt \
  php8-mysqli \
  php8-pdo \
  php8-pdo_mysql \
  php8-simplexml \
  php8-tokenizer \
  php8-xml \
  php8-xmlwriter \
  php8-zip

COPY files/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

WORKDIR /app

ENTRYPOINT [ "docker-entrypoint.sh" ]
