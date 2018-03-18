#! /bin/bash

# List WordPress config
docker-compose exec app \
  wp config list --allow-root
