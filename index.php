<?php
/**
 * Main Theme Template
 */

get_header();
?>

<main id='primary' class='site-main'>
    <!-- Scroll Animation SVG -->
    <div class='svg-scroll'>
        <svg id='Ebene_1' data-name='Ebene 1' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 595.28 1866.46">
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
            <path class='cls-1'
                d="
            M79.5,0c63.95,39.16,79.01,58.25,75.84,67.88-4.52,13.72-44.25,2.77-58.39,24.75-16.78,26.08,15.92,77.54,17.45,79.9,50.46,77.79,135.87,55.66,160.4,118.08,13.11,33.36,3.58,77.48-13.42,84.15-21.27,8.33-68.25-36.45-62.42-72.13,5.98-36.53,67.29-63.17,98.66-45.25,47.65,27.22,54.46,173.48-10.07,249.59-54.71,64.54-131.6,44.34-154.36,98.28-19.91,47.18,18.43,111.2,53.69,157.67,0,0,144.26,171.6,122.55,222.17-21.71,50.57-150.86,90.3-150.86,90.3,0,0-70.98,27.69,48.51,207.1s-16.51,124.02-16.51,124.02c0,0-124.57-24.08-60.57,65.02s83.43,156.53,83.43,156.53c0,0,19.43,139.67-105.14,133.65s-10.29,104.75-10.29,104.75" />
        </svg>
    </div>

    <!-- Intro Section -->
    <section id='intro'>
        <div class='container page-section'>
            <?php
            $intro_query = new WP_Query(array(
                'category_name' => 'intro',
                'posts_per_page' => 1
            ));
            if ($intro_query->have_posts()):
                while ($intro_query->have_posts()):
                    $intro_query->the_post();
                    ?>
                    <article class='intro-item'>
                        <?php the_content(); ?>
                    </article>
                <?php endwhile;
            endif;
            wp_reset_postdata();
            ?>
        </div>
    </section>

    <!-- Angebot Section -->
    <section id='angebot' class='page-section gray-bg'>
        <div>
            <div>
                <?php
                $page_query = new WP_Query('pagename=angebot');
                while ($page_query->have_posts()):
                    $page_query->the_post();
                    ?>

                    <div class='container'>
                        <?php the_title('<h1>', '</h1>'); ?>
                        <?php the_content(); ?>
                    </div>

                <?php endwhile;
                wp_reset_postdata();
                ?>

                <?php
                $angebot_query = new WP_Query(array(
                    'category_name' => 'angebot',
                    'posts_per_page' => -1
                ));
                if ($angebot_query->have_posts()):
                    while ($angebot_query->have_posts()):
                        $angebot_query->the_post();
                        ?>
                        <article
                            class='angebot-item'
                            data-title='<?php echo esc_attr(get_the_title()); ?>'
                            style='display: none;'
                        >                                
                        <?php the_title('<h3>', '</h3>'); ?>
                        <?php the_content(); ?> 
                            
                        </article>
                    <?php endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </div>
        </div>
            <section id='product-line'>
            <div class='container'>
                <?php
                $product_line_query = new WP_Query(array(
                    'category_name' => 'product-line',
                    'posts_per_page' => 1
                ));
                $product_line_post_id = null;
                
                if ($product_line_query->have_posts()):
                    while ($product_line_query->have_posts()):
                        $product_line_query->the_post();
                        $product_line_post_id = get_the_ID();
                        ?>
                        <article class='product-line-item'>
                            <?php the_title('<h2>', '</h2>'); ?>
                            <?php echo strip_tags(get_the_content(), '<p>'); ?>
                        </article>
                    <?php endwhile;
                endif;
                wp_reset_postdata();
                ?>
            </div>
        </section>
        <!-- Loop-Container Product Line  -->
        <section id='image-loop'>
        <div class='image-loop-container'>
            <div class='image-loop-track'>
                <?php
                if ($product_line_post_id):
                    $images = get_posts(array(
                        'post_type' => 'attachment',
                        'posts_per_page' => -1,
                        'post_parent' => $product_line_post_id,
                        'orderby' => 'menu_order',
                        'order' => 'ASC'
                    ));
                    
                    if ($images):
                        foreach ($images as $image):
                            echo wp_get_attachment_image($image->ID, 'full', false, array('class' => 'loop-image'));
                        endforeach;
                    endif;
                endif;
                ?>
            </div>
        </div>
    </section>
    </section>

        <!-- Über Shine Section -->
    <section id='ueber-shine' class='page-section'>
        <div>
            <?php
            $contact_query = new WP_Query('pagename=ueber-shine');
            while ($contact_query->have_posts()):
                $contact_query->the_post();
                ?>
                <div class='container'>
                    <?php the_title('<h1>', '</h1>'); ?>
                    <?php the_content(); ?>
                </div>
            <?php endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </section>


    <!-- Impressionen Section -->
    <section id='impressionen'>
        <div  class='page-section'>
            <?php
            $contact_query = new WP_Query('pagename=impressionen');
            while ($contact_query->have_posts()):
                $contact_query->the_post();
                ?>
                <div class='container'>
                    <h1><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                </div>
            <?php endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </section>

    <!-- Gutscheine Section -->
    <section id='gutscheine' class='page-section'>
        <div class="container">
            <?php
            $voucher_query = new WP_Query('pagename=gutscheine');
            while ($voucher_query->have_posts()):
                $voucher_query->the_post();
                ?>
                <div class='container'>
                    <h1><?php the_title(); ?></h1>
                    <?php the_content(); ?>
                </div>
            <?php endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </section>

    <!-- Kontakt Section -->
    <section id='kontakt'>
        <div class='page-section'>
            <?php
            $contact_query = new WP_Query('pagename=kontakt');
            while ($contact_query->have_posts()):
                $contact_query->the_post();
                ?>
                <div class='kontakt-content'>
                    <div class='kontakt-text'>
                        <?php the_title('<h1>', '</h1>'); ?>
                        <?php the_content(); ?>
                    </div>
                    <div class='kontakt-image'>
                        <?php 
                        if (has_post_thumbnail()) {
                            the_post_thumbnail('large', array('class' => 'kontakt-mood-image'));
                        } else {
                            // Fallback: Zeige das erste Bild aus dem Post an
                            $images = get_posts(array(
                                'post_type' => 'attachment',
                                'posts_per_page' => 1,
                                'post_parent' => get_the_ID(),
                                'orderby' => 'menu_order',
                                'order' => 'ASC'
                            ));
                            if ($images) {
                                echo wp_get_attachment_image($images[0]->ID, 'large', false, array('class' => 'kontakt-mood-image'));
                            }
                        }
                        ?>
                    </div>
                </div>
            <?php endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </section>
</main>

<?php
get_footer();
