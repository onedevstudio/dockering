#! /bin/bash

source ./scripts/config.sh

# Remove all tables
docker-compose exec app \
  wp db reset --yes --allow-root

# Import SQL file
docker-compose exec app \
  wp db import "$WP_PATH/$DUMP_FILE" --allow-root
