#! /bin/bash

wp-install() {
  ./scripts/wp/config-create.sh
  ./scripts/wp/core-install.sh
  ./scripts/wp/config-list.sh
  ./scripts/wp/theme.sh
  ./scripts/wp/plugins.sh
  ./scripts/wp/cleanup.sh
}

wp-install "$@"
