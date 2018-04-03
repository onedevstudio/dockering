#! /bin/bash

source ./scripts/config.sh

# Create wp-config.php file
docker-compose exec app \
  wp config create \
  --path="$WP_PATH" \
  --dbname="$DB_BASE" \
  --dbuser="$DB_USER" \
  --dbpass="$DB_PASS" \
  --dbhost="$DB_HOST" \
  --dbprefix="$WP_PREFIX" \
  --force \
  --allow-root
