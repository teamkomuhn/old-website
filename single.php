<?php get_header(); ?>

<?php while (have_posts()): the_post();?>
    <article>
        <header>
            <h1><?= get_the_title(); ?></h1>
            <h2><?= get_the_ID(); ?></h2>

            <aside>
                <address>
                    <img src="<?php print get_avatar_url( get_the_author_meta( 'ID' ) ); ?>" />
                    <span><?= get_the_author_meta('display_name'); ?></span>
                </address>

                <time datetime="<?= get_the_date('c'); ?>">
                    <?= get_the_date('F j, Y'); ?>
                </time>
            </aside>

            <img src="<?= get_the_post_thumbnail_url(); ?>" />
        </header>

        <div class="side">
            hey ima sider
        </div>

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