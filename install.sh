#!/bin/sh

git clone --depth=1 https://github.com/nandomoreirame/docker-wordpress.git .
docker-compose up -d --build
