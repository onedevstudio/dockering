FROM php:7-apache

MAINTAINER Fernando Moreira <nandomoreira.me@gmail.com>

RUN apt-get update && \
    apt-get install -y \
      mysql-client \
      libmysqlclient-dev \
      wget \
      vim && \
    apt-get clean

RUN a2enmod rewrite

RUN docker-php-ext-install mysqli

ADD src/configs/docker.conf /etc/apache2/sites-enabled/

USER root
WORKDIR /var/www/

RUN rm -rf ./html/
RUN wget --quiet https://wordpress.org/latest.tar.gz
RUN tar -xzf latest.tar.gz
RUN mv -f wordpress html

WORKDIR /var/www/html

ADD src/configs/.htaccess ./
ADD src/configs/wp-config.* ./

RUN chown -R www-data: /var/www/html

EXPOSE 80
