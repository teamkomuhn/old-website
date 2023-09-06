<?php get_header(); ?>

<?php while (have_posts()):
	the_post(); ?>
    <article>
        <header>
            <div>
                <div id="titles">
                    <h1><?= get_the_title() ?></h1>

                    <?php
                    $subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

                    if (!empty($subtitle)): ?>
                    
                        <p><?= $subtitle ?></p>

                    <?php endif;
                    ?>
                </div>

                <div class="author">
                    <img aria-hidden="true" src="<?= get_avatar_url(
                    	get_the_author_meta('ID')
                    ) ?>" />

                    <div>
                        <address>
                            <?= get_the_author_meta('first_name') .
                            	' ' .
                            	get_the_author_meta('last_name') ?>
                        </address>

                        <time datetime="<?= get_the_date('c') ?>">
                            <?= get_the_date('F j, Y') ?>
                        </time>
                    </div>
                </div>
            </div>

            <?php if (has_post_thumbnail()) {
            	echo get_the_post_thumbnail();
            } ?>
        </header>

        <section id="content">
            <?= get_the_content() ?>
        </section>

        <section id="author" class="author">
            <img aria-hidden="true" src="<?= get_avatar_url(
            	get_the_author_meta('ID')
            ) ?>" />

            <div>
                <address>
                    <?= get_the_author_meta('first_name') .
                    	' ' .
                    	get_the_author_meta('last_name') ?>
                </address>

                <time datetime="<?= get_the_date('c') ?>">
                    <?= get_the_date('F j, Y') ?>
                </time>
            </div>
        </section>

        <?php comments_template(); ?>
    </article>
    
<?php
endwhile; ?>

<?php get_footer(); ?>
