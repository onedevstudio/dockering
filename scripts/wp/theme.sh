#! /bin/bash

source ./scripts/config.sh

# Install and active theme
docker-compose exec app \
  wp theme install $THEME_INSTALL --activate --allow-root
