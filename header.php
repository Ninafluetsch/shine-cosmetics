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
	<?php if (get_header_image()) : ?>
    <div class="header-image-wrap">
        <img 
            src="<?php header_image(); ?>" 
            width="<?php echo get_custom_header()->width; ?>" 
            height="<?php echo get_custom_header()->height; ?>"
            alt="<?php bloginfo('name'); ?>"
        >
    </div>
<?php endif; ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text"
			href="#primary"><?php esc_html_e('Skip to content', 'shine-cosmetics'); ?></a>

		<header class="site-header">
			<!-- <p>HEADER</p> -->
			<div class="site-branding">
				<?php the_custom_logo(); ?>
				<p class="site-title">
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
						<?php bloginfo('name'); ?>
					</a>
				</p>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation">
				<?php
				wp_nav_menu(array(
					'theme_location' => 'menu-1',
					'menu_id' => 'primary-menu',
				));
				?>
			</nav><!-- #site-navigation -->
		</header><!-- #masthead -->
	</div>
</body>