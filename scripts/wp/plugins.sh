#! /bin/bash

source ./scripts/config.sh

# Install WordPress dev plugins
for plugin in "${PLUGINS_INSTALL[@]}"
do
  docker-compose exec app \
    wp plugin install $plugin --allow-root
done

# Active WordPress dev plugins
for plugin in "${PLUGINS_INSTALL[@]}"
do
  docker-compose exec app \
    wp plugin activate $plugin --allow-root
done
