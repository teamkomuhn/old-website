<!DOCTYPE html>

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

        <style>
            /** Here because it's only temporary and I didn't want to set up Less. */

            .tracking-consent {
                position: fixed;
                inset: auto auto 1rem 1rem;
                padding: 0;
                background-color: lightgray;
                accent-color: black;
                border: none;
                border-radius: .2rem;
            }

            .tracking-consent:not([open]) {
                display: none;
            }

            .tracking-consent > form {
                display: grid;
                grid-template-columns: 1fr auto auto;
                align-items: center;
                gap: 1rem;
                padding: .5rem 2rem;
            }

            button {
                padding: .5rem 2rem;
                border: 1px solid black;
                font-size: 1rem;
                border-radius: .2rem;
                background-color: transparent;
                transition: all .5s;
            }

            button:hover{
                translate: 0 -.25rem;
            }

            .black {
                font-weight: bold;
                color: white;
                background-color: black;
            }
        </style>
    </head>
    
    <body <?php body_class() ?>>
        <dialog class="tracking-consent" <?php if ($_COOKIE["ask-for-tracking-consent"] !== '') echo 'open' ?>>
            <form method="dialog">
                <header>
                    <p>🍪 Cookies?</p>
                    <a href="privacy-policy">Privacy policy</a>
                </header>
                
                <button class="black" type="submit">Ok!</button>
                <button type="submit">Nah!</button>
            </form>
        </dialog>

        <header class="main-header">
            <h1 class="logo"><a href="<?php echo esc_url( home_url( '/' ) ) ?>">Komuhn</a></h1>
        </header>

        <main>
