#! /bin/bash

WP_PATH="/var/www/html"

# wp-config.php
WP_DB_BASE="dbbase"
WP_DB_USER="dbuser"
WP_DB_PASS="dbpass"
WP_DB_HOST="dbhost"
WP_PREFIX="wp_"

# installation settings
WP_URL="http://localhost"
WP_TITLE="Dockering WordPress Application"
WP_USER_NAME="admin"
WP_USER_PASS="admin"
WP_USER_EMAIL="admin@localhost.com"

# import export database
DUMP_FILE="db/dbbase.sql"

# Themes
ACTIVE_THEME="odin"
THEMES_INSTALL=( "https://github.com/wpbrasil/odin/archive/2.3.0.zip" ) # theme slug, zip, url or path
THEMES_DELETE=( "twentyfifteen" "twentysixteen" "twentyseventeen" ) # theme slug, zip, url or path

# Plugins
PLUGINS_INSTALL=( "debug-bar" "query-monitor" "theme-check" "log-deprecated-notices" "user-switching" "wp-example-content" )
PLUGINS_DELETE=( "hello" "akismet" )
