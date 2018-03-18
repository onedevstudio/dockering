#! /bin/bash

source ./scripts/config.sh

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
