#! /bin/bash

WP_PATH="/var/www/html"

# wp-config.php
WP_DB_BASE="dbbase"
WP_DB_USER="dbuser"
WP_DB_PASS="dbpass"
WP_DB_HOST="dbhost"
WP_PREFIX="wp_"

# installation settings
WP_URL="http://localhost"
WP_TITLE="Dockering WordPress Application"
WP_USER_NAME="admin"
WP_USER_PASS="admin"
WP_USER_EMAIL="admin@localhost.com"
WP_THEME_NAME="odin"
WP_THEME_DOWNLOAD="https://github.com/wpbrasil/odin/archive/2.3.0.zip" # zip, url or path

# Development Plugins
DEV_PLUGINS=( "developer" "debug-bar" "query-monitor" "theme-check" "log-deprecated-notices" "user-switching" )

# Create wp-config.php file
docker-compose exec app \
  wp config create \
  --path="$WP_PATH" \
  --dbname="$WP_DB_BASE" \
  --dbuser="$WP_DB_USER" \
  --dbpass="$WP_DB_PASS" \
  --dbhost="$WP_DB_HOST" \
  --dbprefix="$WP_PREFIX" \
  --force \
  --allow-root

# install WordPress
docker-compose exec app \
  wp core install \
  --path="$WP_PATH" \
  --url="$WP_URL" \
  --title="$WP_TITLE" \
  --admin_user="$WP_USER_NAME" \
  --admin_email="$WP_USER_EMAIL" \
  --admin_password="$WP_USER_PASS" \
  --skip-email \
  --allow-root

# List WordPress config
docker-compose exec app \
  wp config list --allow-root

# Install and active Your Theme
docker-compose exec app \
  wp theme install $WP_THEME_DOWNLOAD --allow-root
docker-compose exec app \
  wp theme activate $WP_THEME_NAME --allow-root

# Delete default WordPress themes
docker-compose exec app \
  wp theme delete twentyfifteen --allow-root
docker-compose exec app \
  wp theme delete twentysixteen --allow-root
docker-compose exec app \
  wp theme delete twentyseventeen --allow-root

# Delete plugin Hello Dolly
docker-compose exec app \
  wp plugin delete hello --allow-root

# Install WordPress dev plugins
for i in "${DEV_PLUGINS[@]}"
do
  docker-compose exec app \
    wp plugin install $i --allow-root
done

# Active WordPress dev plugins
for i in "${DEV_PLUGINS[@]}"
do
  docker-compose exec app \
    wp plugin activate $i --allow-root
done
