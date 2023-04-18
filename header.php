<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        
        <title><?= is_front_page() ? get_bloginfo( 'name' ) . " - " . strip_tags(get_bloginfo( 'description' )) : get_the_title() . " - " . get_bloginfo( 'name' ); ?></title>
        <?php openGraph(); ?>

        <link rel="icon" href="<?= get_template_directory_uri() . "/images/favicon.ico"; ?>" sizes="any"><!-- 32×32 -->
        <link rel="icon" href="<?= get_template_directory_uri() . "/images/logo-ko-circle-purple.svg"; ?>" type="image/svg+xml">
        <link rel="apple-touch-icon" href="<?= get_template_directory_uri() . "/images/favicon-apple-touch-icon.png" ?>"><!-- 180×180 -->
        <link rel="manifest" href="<?= get_template_directory_uri() . "/images/site.webmanifest"; ?>">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

        <?php wp_head(); ?>
    </head>
    
    <body>
        <?php if (!is_front_page()): ?>
            <header>
                <nav>
                    <a href="/" title="Komuhn">
                        <img src="<?= url('/images/logo-ko-circle-purple.svg'); ?>" alt="Komuhn">
                    </a>
                </nav>
            </header>
        <?php endif ?>

        <dialog open>
            <!-- <p class="visually-hidden"><del>S</del>care</p> -->
            <img alt="Scare" src="<?= url('/images/scare.svg'); ?>">

            <div>
                <h2 class="arrow-right">Join us in Helsinki</h2>

                <!-- <div>
                    <time datetime="2023-04-27">
                        <span class="day">27</span>
                        <span class="month">Apr</span>
                    </time>

                    <p>Open space</p>
                </div> -->

                <img src="<?= url('/images/event.svg'); ?>" alt="27 April, Open space">
            </div>
            
            <p>An exploration of what can be working together without fear. <a class="arrow-right" href="#">Register</a></p>

            <form method="dialog"><button><img src="<?= url('/images/close.svg'); ?>" alt="Close"></button></form>
        </dialog>

        <main>
