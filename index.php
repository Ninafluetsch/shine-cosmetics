<?php
/**
 * The main template file
 */

get_header();
?>

	<main id="primary" class="site-main">
        <section id="scroll-animation" class="page-section">
            <div class="svg-scroll">

<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
  <defs>
    <style>
      .cls-1 {
        fill: none;
        stroke: #1d1d1b;
        stroke-miterlimit: 10;
        stroke-width: 6px;
      }

    </style>
  </defs>
<path class="cls-1" d="M79.5,54.85c63.95,37.17,79.01,55.29,75.84,64.43-4.52,13.02-44.25,2.63-58.39,23.49-16.78,24.75,15.92,73.6,17.45,75.84,50.46,73.84,135.87,52.83,160.4,112.08,13.11,31.66,3.58,73.54-13.42,79.87-21.27,7.91-68.25-34.6-62.42-68.46,5.98-34.67,67.29-59.96,98.66-42.95,47.65,25.84,54.46,164.66-10.07,236.91-54.71,61.26-131.6,42.09-154.36,93.29-19.91,44.78,18.43,105.55,53.69,149.66"/>
</svg>
        </div>
        </section>
    <section id="ueber-uns" class="page-section">
        <p>Seiten</p>
        <?php 
        $about_query = new WP_Query('pagename=ueber-uns'); // Slug der Seite
        while ( $about_query->have_posts() ) : $about_query->the_post(); ?>
            <div class="container">
                <h2><?php the_title(); ?></h2>
                <div class="ueber-uns-text">
                    <?php the_content(); ?>
                </div>
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
