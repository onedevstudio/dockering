#! /bin/bash

source ./scripts/config.sh

# Delete themes
for theme in "${THEMES_DELETE[@]}"
do
  docker-compose exec app \
    wp theme delete $theme --allow-root
done

# Delete plugins
for plugin in "${PLUGINS_DELETE[@]}"
do
  docker-compose exec app \
    wp plugin delete $plugin --allow-root
done
