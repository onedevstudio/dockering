#! /bin/bash

WP_URL="http://localhost"
WP_TITLE="Dockering WordPress Application"
WP_USER="admin"
WP_PASS="admin"
WP_EMAIL="admin@localhost"

docker-compose up -d --build

docker-compose exec wp wp core install \
  --url="$BASE_URL" \
  --title="$WP_TITLE" \
  --admin_user="$WP_USER" \
  --admin_password="$WP_PASS" \
  --admin_email="$WP_EMAIL" \
  --skip-email --allow-root
