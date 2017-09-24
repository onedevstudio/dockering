FROM php:7.0-apache

RUN apt-get update && \
    apt-get install -y \
      mysql-client \
      libmysqlclient-dev \
      wget \
      vim && \
    apt-get clean

RUN a2enmod rewrite

RUN docker-php-ext-install mysqli

ADD configs/docker.conf /etc/apache2/sites-enabled/

USER root
WORKDIR /var/www/

RUN rm -rf ./html/
RUN wget --quiet https://wordpress.org/latest.tar.gz
RUN tar -xzf latest.tar.gz
RUN mv -f wordpress html

WORKDIR /var/www/html

ADD configs/.htaccess ./
ADD configs/wp-config.* ./

RUN chown -R www-data: /var/www/html

EXPOSE 80
