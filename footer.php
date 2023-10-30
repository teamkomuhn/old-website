        </main>

        <footer id="contact">
            <h2>Let’s talk!</h2>
            <p>See something that makes you want to talk with us? Send us a message and we will get back to you in a bit.</p>
            
            <?php if (!is_single()) {
            	comments_template('/comments-contact.php');
            } ?>

            <address>
                <a class="paper-plane" href="mailto:team@komuhn.org"><span>team@komuhn.org</span></a>
                <a class="phone" href="tel:+351960001270"><span>+351 960001270</span></a>
            </address>
        </footer>

        <footer id="footer">
            <img src="<?= get_theme_file_uri('/images/logo-ko-circle-purple.svg') ?>" alt="">

            <!-- <?php
// $character = '/';

// $url = $_SERVER['REQUEST_URI'];
// $path = parse_url($url, PHP_URL_PATH);
// $parts = explode($character, trim($path, $character));
// $previous = '';

// foreach ($parts as $part):
//     $previous .= "/{$part}";
?>

            <a href="<?= $previous ?>">> <?= $part ?></a>

            <?php
// endforeach
?> -->

            <a href='/'>komuhn.org</a>
        </footer>
        
        <?php wp_footer(); ?>
</html>
