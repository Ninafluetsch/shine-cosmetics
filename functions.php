<?php

// Hooks registrieren
add_action('wp_enqueue_scripts', 'enqueue_assets');
add_action('after_setup_theme', 'setup_theme');

// Stylesheets und Scripts laden
function enqueue_assets() {
    wp_enqueue_style('shine-cosmetics-main', get_template_directory_uri() . '/style.css', array(), '1.0.0');

    wp_enqueue_script('shine-cosmetics-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    wp_enqueue_script('btn-toggle', get_template_directory_uri() . '/js/btn-toggle.js', array(), '1.0.0', true);
    wp_enqueue_script('scroll-animation', get_template_directory_uri() . '/js/scroll-animation.js', array(), '1.0.0', true);
    wp_enqueue_script('angebot-position', get_template_directory_uri() . '/js/angebot-position.js', array(), '1.0.0', true);
    wp_enqueue_script('image-loop', get_template_directory_uri() . '/js/image-loop.js', array(), '1.0.0', true);
}

// Theme-Funktionen initialisieren
function setup_theme() {
    register_nav_menus(array(
        'menu-1' => esc_html__('Primary', 'shine-cosmetics'),
    ));

    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('custom-header', array(
        'width' => 1920,
        'height' => 400,
        'flex-width' => true,
        'flex-height' => true,
    ));
}