<?php
    get_header();

    while (have_posts()): the_post();
?>

<article>
    <header>
        <?php
            $subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

            if (empty($subtitle)):
        ?>

        <h1><?= get_the_title() ?></h1>

        <?php else: ?>

        <hgroup>
            <h1><?= get_the_title() ?></h1>
            <p><?= $subtitle ?></p>
        </hgroup>

        <?php endif; ?>

        <div class="author">
            <img aria-hidden="true" src="<?= get_avatar_url(
                get_the_author_meta('ID')
            ) ?>" />

            <div>
                <address>
                    <?= get_the_author_meta('display_name') ?>
                </address>

                <time datetime="<?= get_the_date('c') ?>">
                    <?= get_the_date('F j, Y') ?>
                </time>
            </div>
        </div>

        <?= get_the_post_thumbnail() ?>
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
                <?= get_the_author_meta('display_name') ?>
            </address>

            <time datetime="<?= get_the_date('c') ?>">
                <?= get_the_date('F j, Y') ?>
            </time>
        </div>
    </section>

    <?php comments_template(); ?>
</article>
    
<?php
    endwhile;

    get_footer();
?>
