<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package shine-cosmetics
 */

get_header();
?>

	<main id="primary" class="site-main">

    <section id="ueber-uns" class="page-section">
                <p>Seiten</p>

        <?php 
        $about_query = new WP_Query('pagename=ueber-uns'); // Slug der Seite
        while ( $about_query->have_posts() ) : $about_query->the_post(); ?>
            <div class="container">
                <h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
            </div>
        <?php endwhile; wp_reset_postdata(); ?>
    </section>

    <section id="angebot" class="page-section gray-bg">
        <div class="container">
            <h2>Angebot</h2>
            <div class="angebot-grid">
                <?php 
                $angebot_query = new WP_Query(array('category_name' => 'angebot', 'posts_per_page' => -1));
                if ( $angebot_query->have_posts() ) : 
                    while ( $angebot_query->have_posts() ) : $angebot_query->the_post(); ?>
                        <article class="angebot-item">
                            <h3><?php the_title(); ?></h3>
                            <?php the_excerpt(); ?>
                        </article>
                    <?php endwhile; 
                endif; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>

    <section id="gutscheine" class="page-section">
        <?php 
        $voucher_query = new WP_Query('pagename=gutscheine');
        while ( $voucher_query->have_posts() ) : $voucher_query->the_post(); ?>
            <div class="container">
                <h2><?php the_title(); ?></h2>
                <?php the_content(); ?>
            </div>
        <?php endwhile; wp_reset_postdata(); ?>
    </section>

    <section id="kontakt" class="page-section">
        <div class="container">
            <h2>Kontakt</h2>
        </div>
    </section>

</main>

<?php
get_footer();
