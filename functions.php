<?php
add_action( 'wp_enqueue_scripts', 'shine_cosmetics_scripts' );
add_action( 'wp_enqueue_scripts', 'svg_scroll_animation' );
add_action( 'after_setup_theme', 'shine_cosmetics_setup' );

function shine_cosmetics_scripts() {
    wp_enqueue_style( 'shine-cosmetics-main', get_template_directory_uri() . '/style.css', array(), '1.0.0' );
    wp_enqueue_script( 'shine-cosmetics-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true );
}
 
function theme_enqueue_scripts() {
    wp_enqueue_script(
        'btn-toggle',
        get_template_directory_uri() . '/js/btn-toggle.js',
        array(), // keine Abhängigkeiten (kein jQuery nötig)
        '1.0.0',
        true // im Footer laden (wichtig: DOM muss geladen sein)
    );
}

add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');
 

function svg_scroll_animation() {
    wp_enqueue_script(
        'svg-scroll-animation',
        get_template_directory_uri() . '/js/scroll-animation.js',
        array(),
        '1.0',
        true
    );
}
function shine_cosmetics_setup() {
    register_nav_menus( array(
        'menu-1' => esc_html__( 'Primary', 'shine-cosmetics' ),
    ) );
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo' );
        add_theme_support('custom-header', array(
        'width'        => 1920,
        'height'       => 400,
        'flex-width'   => true,
        'flex-height'  => true,
    ));
}