#! /bin/bash

source ./scripts/config.sh

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
