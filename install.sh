#!/bin/sh

git clone --depth=1 https://github.com/nandomoreirame/wp-docker.git .
docker-compose up -d --build
