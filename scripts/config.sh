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
