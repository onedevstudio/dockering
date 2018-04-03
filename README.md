# Docker WordPress

> 🐘 Dockering the WordPress application using docker-compose

![Docker](http://blog.rivendel.com.br/wp-content/uploads/2015/01/docker-image.png)

## Installation

1. `git clone https://github.com/onedevstudio/dockering.git your-project && cd your-project/`
2. `sudo -- sh -c -e "echo '127.0.0.1 dockering.local' >> /etc/hosts";`
3. `docker-compose up -d`
4. `./scripts/install.sh`

open [dockering.local/wp-admin](http://dockering.local/wp-admin) in your browser

**Login configs**

* **username**: `admin` or **email**: `admin@dockering.local`
* **password**: `admin`

## Config files

**[.env](/.env) file for docker-compose.yml**

```bash
APP_NAME=dockering
APP_DIR=./www
WP_PATH=/var/www/html

MAIL_LINK=mail

DB_HOST=dbhost
DB_BASE=dbbase
DB_USER=dbuser
DB_PASS=dbpass

WP_PREFIX=wp_

WP_URL=http://dockering.local
WP_TITLE="Dockering WordPress Application"
WP_USER_NAME=admin
WP_USER_PASS=admin
WP_USER_EMAIL=admin@dockering.local

DUMP_FILE=dbase/dbbase.sql

THEME_INSTALL="https://github.com/onedevstudio/onedev-theme/archive/master.zip"
THEMES_DELETE="twentyfifteen|twentysixteen|twentyseventeen"

PLUGINS_INSTALL="application-passwords|debug-bar|query-monitor|theme-check|log-deprecated-notices|user-switching|wp-example-content"
PLUGINS_DELETE="hello|akismet"
```

## License

[MIT License](/LICENSE) © Fernando Moreira
