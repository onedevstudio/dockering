FROM php:5.5-apache

MAINTAINER Fernando Moreira <nandomoreira.me@gmail.com>

RUN apt-get update
RUN apt-get install -y \
      mysql-client \
      libmysqlclient-dev

RUN a2enmod rewrite

RUN docker-php-ext-install mysqli

ADD docker.conf /etc/apache2/sites-enabled/

EXPOSE 80