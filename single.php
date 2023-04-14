<?php get_header(null, [ 'styles' => [ '/styles.css' ] ]); ?>

<?php while (have_posts()): the_post();?>
    <article>
        <header>
            <div id="titles">
                <h1><?= get_the_title(); ?></h1>
                <h2><?= get_post_meta(get_the_ID(), 'subtitle', true); ?></h2>
            </div>

            <div class="author short">
                <img aria-hidden="true" src="<?php print get_avatar_url( get_the_author_meta( 'ID' ) ); ?>" />

                <div>
                    <address>
                        <?= get_the_author_meta('display_name'); ?>
                    </address>

                    <time datetime="<?= get_the_date('c'); ?>">
                        <?= get_the_date('F j, Y'); ?>
                    </time>
                </div>
            </div>

            <img src="<?= get_the_post_thumbnail_url(); ?>" />
        </header>

        <section id="content">
            <?= get_the_content(); ?>
        </section>

        <?php
            if (comments_open() || get_comments_number()) {
                comments_template();
            } 
        ?>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>