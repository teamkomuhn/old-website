<?php 
    declare(strict_types = 1);

    function url(string $url) {
        return wp_make_link_relative(get_template_directory_uri()) . $url;
    }
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <!-- <meta charset="UTF-8"> -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <meta name="viewport" content="width=device-width">

        <!-- TODO `single_post_title` vs `get_the_title` -->
        <title><?php single_post_title(null, false); ?>, Komuhn</title>

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
