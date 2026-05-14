<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 */

?>

	<footer  class="site-footer">
		<div class="footer-content">
			<div class="footer-logo">
				<?php 
				$logo_url = get_template_directory_uri() . '/img/prov-logo.png';
				?>
				<img src="<?php echo esc_url($logo_url); ?>" alt="SHINE Cosmetics Logo" class="footer-logo-img">
			</div>

			<div class="site-info">
				<h3>SHINE Cosmetics</h3>
				
				<div class="footer-contact">
					<div class="contact-item">
						<a href="mailto:leuenberger@shine-cosmetics.ch">leuenberger@shine-cosmetics.ch</a>
					</div>
					<div class="contact-item">
						<a href="tel:+41796353817">+41 (0)79 635 38 17</a>
					</div>
					<div class="contact-item">
						<a href="https://www.google.com/maps/dir/?api=1&destination=Hammerstrasse%2044%2C%208008%20Z%C3%BCrich%2C%20Schweiz" target="_blank" rel="noopener">Hammerstrasse 44, 8008 Zürich</a>
					</div>
				</div>
			</div><!-- .site-info -->
		</div><!-- .footer-content -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
