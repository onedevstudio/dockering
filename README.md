# Docker WordPress

> 🐘 Dockering the WordPress application using docker-compose

![Docker](http://blog.rivendel.com.br/wp-content/uploads/2015/01/docker-image.png)

## Installation

1. `git clone https://github.com/onedevstudio/dockering.git your-project`
2. `cd your-project/`
3. `docker-compose up -d`
4. `./scripts/install.sh`
5. open [localhost/wp-admin](http://localhost/wp-admin) in your browser
6. **username:** `admin`, **email**: `admin@dockering.local`, **password**: `admin`

## Configs

**[.env](/.env) file for docker-compose.yml**

```
APP_NAME=dockering
APP_DIR=./www

MAIL_LINK=mail

DB_HOST=dbhost
DB_BASE=dbbase
DB_USER=dbuser
DB_PASS=dbpass
```

**[/scripts/config.sh](/scripts/config.sh) file**

```bash
#! /bin/bash

WP_PATH="/var/www/html"

# wp-config.php
WP_DB_BASE="dbbase"
WP_DB_USER="dbuser"
WP_DB_PASS="dbpass"
WP_DB_HOST="dbhost"
WP_PREFIX="wp_"

# installation settings
WP_URL="http://dockering.local"
WP_TITLE="Dockering WordPress Application"
WP_USER_NAME="admin"
WP_USER_PASS="admin"
WP_USER_EMAIL="admin@dockering.local"

# import export database
DUMP_FILE="dbase/dbbase.sql"

# Themes
THEME_INSTALL="https://github.com/onedevstudio/onedev-theme/archive/master.zip"
THEMES_DELETE=( "twentyfifteen" "twentysixteen" "twentyseventeen" )

# Plugins
PLUGINS_INSTALL=( "application-passwords" "debug-bar" "query-monitor" "theme-check" "log-deprecated-notices" "user-switching" "wp-example-content" )
PLUGINS_DELETE=( "hello" "akismet" )
```

## License

[MIT License](/LICENSE) © Fernando Moreira
