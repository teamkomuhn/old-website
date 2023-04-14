<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">

    <title>Komuhn</title>
    <meta name="description" content="Our new website">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php openGraph(); ?>

    <?php wp_head(); ?>


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

        <?php $title_tag = is_front_page() ? 'h1' : 'div'; ?>

        <<?php echo $title_tag; ?> class="logo">
            <a href="<?php echo esc_url( home_url( '/' ) ) ?>">Komuhn</a>
        </<?php echo $title_tag; ?>>

    </header>

    <main>
