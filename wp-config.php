<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'doobydendata' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-I_lV1}?`$YT>}|`fSS0+Z(>=^ZJ.f1_zV[wxKGqsGFb+JT?qMpYW;mm+{cQ=a}Q' );
define( 'SECURE_AUTH_KEY',  'I RN*{~9X+ciVVRvcT}[$T>v!} )3E2cYl%MzZaxmnhNR~9FGx@f=q$&+*!csm`y' );
define( 'LOGGED_IN_KEY',    '_H}~XJ*HQKP:3+ec]eey)hlfA0>]KLJe|W>JIA{5^F&3,+ma[w~grW@}SNcmY_=}' );
define( 'NONCE_KEY',        'E:4RTa5m%K2C~q!2>O$Aur73~v:~77xj+BtG)5re6ssDj8hp-FPGXQ8hNzUU(YZo' );
define( 'AUTH_SALT',        'B lX^[rH1VqOsBDa}FoTBJ unT&#,cw|<5-I!CbJr52728sv*dTv!@Kl.aXEQw15' );
define( 'SECURE_AUTH_SALT', ')&R>q7I4qy<18oo{xhD8-/<|>w|.^;IFj&MTRZq}8_MyfQkG|uJn{^>b}=rU|9j5' );
define( 'LOGGED_IN_SALT',   'ToWFovr+q!`Y]p1G!PD?s[fPl[WgR{-9zRey?-N)F&}%?zVw?qAPy:c-ro^x;:Eb' );
define( 'NONCE_SALT',       '_(Pb!2*8uSOC4q^IS]3zJOWcq*LG:xU|bje`Qonp&@t0hbc{UmtG9q+&kn^F6VZ1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
