<?php

// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );

// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', true );

// log php errors
@ini_set( 'log_errors', 1 );
@ini_set( 'display_errors', 1 );
error_reporting(E_ALL);

// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );
define( 'SAVEQUERIES', true );

// Add this block in your file wp-config.php
/*
if (file_exists(dirname(__FILE__) . '/wp-config.dev.php')) {
    include(dirname(__FILE__) . '/wp-config.dev.php');
}
*/
