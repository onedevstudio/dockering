<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// Include local configuration
if (file_exists(dirname(__FILE__) . '/wp-config.dev.php')) {
	include(dirname(__FILE__) . '/wp-config.dev.php');
}

// ** MySQL settings - You can get this info from your web host ** //
if (!defined('DB_NAME')) {
    /** The name of the database for WordPress */
	define('DB_NAME', '');
}

if (!defined('DB_USER')) {
    /** MySQL database username */
	define('DB_USER', '');
}

if (!defined('DB_PASSWORD')) {
    /** MySQL database password */
    define('DB_PASSWORD', '');
}

if (!defined('DB_HOST')) {
    /** MySQL hostname */
	define('DB_HOST', 'localhost');
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'CYx[JG!2j({nqPW?!].(i8XzGT98{SPp04eMHgXzKmHIR;2{={>l/ G8j4pfoqiX');
define('SECURE_AUTH_KEY',  '{_gmvAV}8efRt0Xnjea-psxG7Y%quw;|y;tQvA5/NjXf?&C?B,4`iqUhjKsnH5F|');
define('LOGGED_IN_KEY',    '{Or%QQDo!2(MU]pHPEVXvqO01U$%Gn@8M_,y-3&a%k$q5p6;t_x0G^1&qz3|t}aF');
define('NONCE_KEY',        '.CmOT*HEOJ8/p6IJo/UmQ8rI]pZkQsDbC~N.3$;ohX6RE4Y L,-KS5t;{8xr[.MM');
define('AUTH_SALT',        '(cBt;-8!dt+:&!n0FI>WgL@?zsBYci =%XNw`~nFUl-ajP.}cQxpL)a}t>}L~/Uy');
define('SECURE_AUTH_SALT', '&XcpiWymF:4wiKBGecs5^6HDKv!zyF8{ <47E==tx/Zj#wXNTSWA5t+_ ab!ZXM$');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
if (!defined('WPLANG')) {
	define('WPLANG', '');
}

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
