<?php
/**
 * The template for displaying all single posts and attachments
 */

// get_header(); ?>
<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <title>Komuhn</title>
    <meta name="description" content="Our new website">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--Favicon Default-->
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/Favicon-32x32.png"/>
    <!--Favicon Apple Touch Icon-->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/Favicon-apple-touch-icon-180x180.png">
    <!--Favicon Android, Chrome and Opera-->
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/manifest.json">
    <!--Favicon Safari-->
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/Favicon-16x16.svg">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css">

</head>

<body <?php body_class(); ?>>
    <header class="main-header">
        <h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ) ?>">Komuhn</a></h1>
    </header>

    <main>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <h1 class="post-title"><?php the_title(); ?></h1>

        <?php the_content(); ?>

        <time datetime="2022-02-25">2022-02-25</time>

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
