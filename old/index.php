<?php get_header(); ?>

    <section class="intro">
        <header>
            <h1><span class="pre">Olá 👋 </span> We are Komuhn - a collaborative design team.</h1>
            <p><em>*If you're looking for our old website you can find it here: <a href="https://komuhn.org/old/">https://komuhn.org/old/</a></em></p>
        </header>

        <?php // GET STICKY POST
        $stickies = get_option( 'sticky_posts' );
        // Make sure we have stickies to avoid unexpected output https://wordpress.stackexchange.com/questions/202896/query-only-sticky-posts
        if ( $stickies ) :
            $args = [
                'post_type'           => 'post',
                'post__in'            => $stickies,
                'posts_per_page'      => 1,
                'ignore_sticky_posts' => 1
            ];
            $ko_sticky = new WP_Query( $args );
            if ( $ko_sticky -> have_posts() ) :
                while ( $ko_sticky -> have_posts() ): $ko_sticky -> the_post();
                //Make unique readable post ID
                $post_id = make_unique_id( get_the_title(), get_the_date('Y-m-d') );
        ?>

                <article id="<?php echo $post_id; ?>">
                    <header>
                        <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                        <div class="post-details">
                            <time datetime="<?php echo get_the_date('c'); ?>"><?php print get_the_date('F j, Y'); ?></time>
                            <address class="author"><?php print get_avatar( get_the_author_meta( 'ID' ) ); ?> <span class="author-name"><?php print get_author_name(); ?></span> </address>
                            <?php //last_edit_details(); ?>
                        </div>
                    </header>
                    <p><?php the_excerpt(); ?></p>
                    <a class="button" href="<?php the_permalink(); ?>">Read more</a>
                </article>

                <?php endwhile; ?>
            <?php endif; wp_reset_postdata(); ?>
        <?php endif; ?>
    </section>

    <?php //GET POSTS
    $args = array(
        'post_type'         => array('post'),
        'post__not_in'      => $stickies,
        'category_name'     => 'post',
        'post_status'       => array('publish'),
    	'posts_per_page'    => '10',
        'order'             => 'DESC',
        'orderby'           => 'date',
    );

    $ko_posts = new WP_Query( $args );
    if ( $ko_posts -> have_posts() ):
    ?>

    <hr>

    <section class="posts">
        <h1 class="section-title">More posts</h1>

        <?php
        while ( $ko_posts -> have_posts() ): $ko_posts -> the_post();
        //Make unique readable post ID
        $post_id = make_unique_id( get_the_title(), get_the_date('Y-m-d') );
        ?>

        <article id="<?php echo $post_id; ?>">
            <header>
                <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
                <div class="post-details">
                    <time datetime="<?php echo get_the_date('c'); ?>"><?php print get_the_date('F j, Y'); ?></time>
                    <address class="author"><?php print get_avatar( get_the_author_meta( 'ID' ) ); ?> <span class="author-name"><?php print get_author_name(); ?></span> </address>
                    <?php //last_edit_details(); ?>
                </div>
            </header>
            <p><?php the_excerpt(); ?></p>
            <a class="button" href="<?php the_permalink(); ?>">Read more</a>
        </article>

        <?php endwhile; ?>
    <?php endif; wp_reset_postdata(); ?>
    </section>


    <?php //GET LOGS
    $args = array(
        'post_type'         => array('post'),
        'category_name'     => 'log',
        'post_status'       => array('publish'),
    	'posts_per_page'    => '10',
        'order'             => 'DESC',
        'orderby'           => 'date',
    );

    $ko_logs = new WP_Query( $args );
    if ( $ko_logs -> have_posts() ):
    ?>

    <hr>

    <section class="log">
        <h1 class="section-title">Log</h1>

        <?php
        while ( $ko_logs -> have_posts() ): $ko_logs -> the_post();
        //Make unique readable post ID
        $log_id = make_unique_id( get_the_title(), get_the_date('Y-m-d'), 'log' );
        ?>

        <article id="<?php echo $log_id; ?>">
            <header>
                <h1><?php the_title(); ?></h1>
                <div class="post-details">
                    <time datetime="<?php echo get_the_date('c'); ?>"><?php print get_the_date('F j, Y'); ?></time>
                    <address class="author"><?php print get_avatar( get_the_author_meta( 'ID' ) ); ?> <span class="author-name"><?php print get_author_name(); ?></span> </address>
                    <?php //last_edit_details(); ?>
                </div>
            </header>
            <?php the_content(); ?>
        </article>

        <?php endwhile; ?>
    <?php endif; wp_reset_postdata(); ?>
    </section>

<?php get_footer(); ?>
