<?php

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

	<div id="page" class="site">

		<header class="site-header">

			<?php if (get_header_image()) : ?>
				<div class="header-hero">
					<img class="hero-bg" src="<?php header_image(); ?>" alt="<?php bloginfo('name'); ?>">

					<!-- Header -->
					<div class="hero-text-overlay">
						<span class="hero-text-1">SHINE</span>
						<span class="hero-text-2">COSMETICS</span>
					</div>

					<div class="hero-logo-wrap">
						<?php the_custom_logo(); ?>
					</div>

					<!-- Burger-Menü-Button -->
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
						<img src="<?php echo get_template_directory_uri(); ?>/img/burger-bar.png" class="hamburger-icon">
					</button>
				</div>
			<?php endif; ?>

			<nav id="site-navigation" class="main-navigation">
				<?php
				wp_nav_menu(array(
					'theme_location' => 'menu-1',
					'menu_id'        => 'primary-menu',
				));
				?>
			</nav>

		</header>