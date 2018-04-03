#! /bin/bash

source ./scripts/config.sh

# Install WordPress dev plugins
for plugin in "${PLUGINS_INSTALL[@]}"
do
  docker-compose exec app \
    wp plugin install $plugin --activate --allow-root
done
