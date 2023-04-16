<?php 
    declare(strict_types = 1);

    function url(string $url) {
        return wp_make_link_relative(get_template_directory_uri()) . $url;
    }
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
        
        <title><?= is_singular() ? get_the_title($post) . " - " . get_bloginfo( 'name' ) : get_bloginfo( 'name' ) . " - " . strip_tags(get_bloginfo( 'description' )); ?></title>
        <?php openGraph(); ?>

        <?php //wp_head(); ?>

        <link rel="icon" href="<?= get_template_directory_uri() . "/images/favicon.ico"; ?>" sizes="any"><!-- 32×32 -->
        <link rel="icon" href="<?= get_template_directory_uri() . "/images/favicon.svg"; ?>" type="image/svg+xml">
        <link rel="apple-touch-icon" href="<?= get_template_directory_uri() . "/images/favicon-apple-touch-icon.png" ?>"><!-- 180×180 -->
        <!--<link rel="manifest" href="/images/manifest.webmanifest";"-->

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">


        <?php
            foreach ($args['styles'] ?? [] as $style) {
                $style_URL = url($style);

                echo "<link rel=\"stylesheet\" href=\"{$style_URL}\" />";
            }
        ?>

        <?php
            foreach ($args['scripts'] ?? [] as $script) {
                $script_URL = url($script);

                echo "<script type=\"module\" src=\"{$script_URL}\"></script>";
            }
        ?>
    </head>
    
    <body>
        <header>
            <nav>
                <?php if (!is_front_page()): ?>
                    <a href="/" title="Komuhn">Komuhn</a>
                <?php endif ?>
            </nav>
        </header>

        <main>
