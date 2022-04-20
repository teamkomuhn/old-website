<?php
/**
 * The template for displaying all single posts and attachments
 */

get_header(); ?>

    <main>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
        //Make unique readable post ID
        $post_id = make_unique_id( get_the_title(), get_the_date('Y-m-d') );
    ?>
        <header>
            <h1 class="post-title"><?php the_title(); ?></h1>


            <blockquote class="excerpt" cite="<?php echo get_home_url() . '/#' . $post_id; ?>">
                <?php the_excerpt(); ?>
            </blockquote>

            <time datetime="<?php echo get_the_date('c'); ?>"><?php print get_the_date('F j, Y'); ?></time>
        </header>

        <?php the_content(); ?>

        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;

        // Previous/next post navigation.
        the_post_navigation( array(
            'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'twentyfifteen' ) . '</span> ' .
                '<span class="screen-reader-text">' . __( 'Next post:', 'twentyfifteen' ) . '</span> ' .
                '<span class="post-title">%title</span>',
            'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'twentyfifteen' ) . '</span> ' .
                '<span class="screen-reader-text">' . __( 'Previous post:', 'twentyfifteen' ) . '</span> ' .
                '<span class="post-title">%title</span>',
        ) );
        ?>

    <?php endwhile; endif;?>
    </main>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JJN9Q36MB0"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JJN9Q36MB0');
    </script>

</body>

</html>
