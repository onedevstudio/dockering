<?php

$theme = wp_get_theme();


/**
 * Load scripts and styles.
 *
 * @since 2.2.0
 */
function theme_enqueue_scripts()
{
    $template_url = get_template_directory_uri();

    // remove JQuery script.
    // wp_enqueue_script('jquery');

    // IE-specific scripts with conditional comments.
    wp_enqueue_script('respondjs', '//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js');
    wp_script_add_data('respondjs', 'conditional', 'lt IE 9');

    wp_enqueue_script('html5shiv', '//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js');
    wp_script_add_data('html5shiv', 'conditional', 'lt IE 9');

    // Loads main stylesheet
    wp_enqueue_style('theme-main-style', get_stylesheet_uri());

    // Loads site scripts
    wp_enqueue_script('theme-manifest-script', $template_url . '/assets/scripts/manifest.js', array(), null, false);
    wp_enqueue_script('theme-vendor-script', $template_url . '/assets/scripts/vendor.js', array(), null, false);
    wp_enqueue_script('theme-main-script', $template_url . '/assets/scripts/bundle.js', array(), null, true);

    // Load Thread comments WordPress script.
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'theme_enqueue_scripts', 1);

/**
 * theme custom stylesheet URI.
 *
 * @since  2.2.0
 *
 * @param  string $uri Default URI.
 * @param  string $dir Stylesheet directory URI.
 *
 * @return string      New URI.
 */
function theme_stylesheet_uri($uri, $dir)
{
    return $dir . '/assets/stylesheets/bundle.css';
}

add_filter('stylesheet_uri', 'theme_stylesheet_uri', 10, 2);
