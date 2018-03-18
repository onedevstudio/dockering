#! /bin/bash

# Export data bases
docker-compose exec app \
  wp db export --skip-themes --skip-plugins --skip-packages --allow-root

# docker-compose exec app \
#   mv *.sql ./dumps
