#! /bin/bash

wp-install() {
  ./scripts/wp/config-create.sh
  ./scripts/wp/core-install.sh
  ./scripts/wp/config-list.sh
  ./scripts/wp/themes.sh
  ./scripts/wp/plugins.sh
}

wp-install "$@"
