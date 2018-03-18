#! /bin/bash

source ./scripts/config.sh

# Install and active themes
for theme in "${THEMES_INSTALL[@]}"
do
  docker-compose exec app \
    wp theme install $theme --allow-root
done

docker-compose exec app \
  wp theme activate $ACTIVE_THEME --allow-root
