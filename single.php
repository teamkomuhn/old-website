<?php //get_header(null, [ 'styles' => [ '/fluency-in-care.css' ], 'scripts' => [ '/interaction.js' ] ]); ?>
<?php get_header(); ?>

<?php while (have_posts()): the_post();?>
    <article>
        <header>
            <div id="titles">
                <h1><?= get_the_title(); ?></h1>
                <h2><?= get_post_meta(get_the_ID(), 'subtitle', true); ?></h2>
            </div>

            <div class="author short">
                <img aria-hidden="true" src="<?= get_avatar_url( get_the_author_meta( 'ID' ) ); ?>" />

                <div>
                    <address>
                        <?= get_the_author_meta('first_name') . ' '. get_the_author_meta('last_name'); ?>
                    </address>

                    <time datetime="<?= get_the_date('c'); ?>">
                        <?= get_the_date('F j, Y'); ?>
                    </time>
                </div>
            </div>

            <?php
                $post_image = get_the_post_thumbnail();
                if ( !empty($post_image) ){ echo $post_image; }
            ?>
        </header>

        <section id="content">
            <?= get_the_content(); ?>
        </section>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>