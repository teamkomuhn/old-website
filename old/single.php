<?php
/**
 * The template for displaying all single posts and attachments
 */

get_header(); ?>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post();
        //Make unique readable post ID
        //$post_id = make_unique_id( get_the_title(), get_the_date('Y-m-d') );
    ?>
        <header>
            <h1 class="post-title"><?php the_title(); ?></h1>

            <details class="excerpt" open>
                <summary>
                    Summary
                </summary>
                <?php the_excerpt(); ?>
            </details>

            <div class="post-details">
                <time datetime="<?php echo get_the_date('c'); ?>"><?php print get_the_date('F j, Y'); ?></time>
                <address class="author"><?php print get_avatar( get_the_author_meta( 'ID' ) ); ?> <span class="author-name"><?php print get_author_name(); ?></span> </address>
                <?php //last_edit_details(); ?>
            </div>

        </header>

        <?php the_content(); ?>

        <hr>

        <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) :
        ?>
        <section class="comments">
            <?php comments_template(); ?>
        </section>
        <?php endif; ?>

        <?php
        // Previous/next post navigation.
        // the_post_navigation( array(
        //     'next_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Next', 'twentyfifteen' ) . '</span> ' .
        //         '<span class="screen-reader-text">' . __( 'Next post:', 'twentyfifteen' ) . '</span> ' .
        //         '<span class="post-title">%title</span>',
        //     'prev_text' => '<span class="meta-nav" aria-hidden="true">' . __( 'Previous', 'twentyfifteen' ) . '</span> ' .
        //         '<span class="screen-reader-text">' . __( 'Previous post:', 'twentyfifteen' ) . '</span> ' .
        //         '<span class="post-title">%title</span>',
        // ) );
        ?>

    <?php endwhile; endif;?>

<?php get_footer(); ?>
