<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package shine-cosmetics
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

    <header class="site-header">
		<?php if (get_header_image()) : ?>
			<div class="header-hero">
				<img class="hero-bg" src="<?php header_image(); ?>" alt="<?php bloginfo('name'); ?>">
				<div class="hero-text-overlay">
					<span class="hero-text-1">SHINE</span>
                    <span class="hero-text-2">COSMETICS</span>
				</div>
				<div class="hero-logo-wrap">
                    <?php the_custom_logo(); ?>
                </div>
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="hamburger-icon"></span> ☰
                </button>
			</div>
		<?php endif; ?>
		<nav id="site-navigation" class="main-navigation">

			<?php
			wp_nav_menu(array(
				'theme_location' => 'menu-1',
				'menu_id' => 'primary-menu',
			));
			?>
		</nav>
	</header>
</body>