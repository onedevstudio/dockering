#!/bin/sh

git clone --depth=1 https://github.com/onedevstudio/wp-docker.git .
docker-compose up -d --build
