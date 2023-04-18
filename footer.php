        </main>

        <footer id="contact">
            <h2>Let’s talk!</h2>
            <p>See something that makes you want to talk with us? Send us a message and we wil get back to you in a bit.</p>
            
            <?php if (!is_single()) { comments_template('/comments-lets-talk.php'); } ?>

            <address>
                <a class="paper-plane" href="mailto:team@komuhn.org"><span>team@komuhn.org</span></a>
                <a class="phone"><span>+351 960001270</span></a>
            </address>
        </footer>

        <footer id="footer">
            <img src="<?= url('/images/logo-ko-circle-purple.svg') ?>" alt="">
            <a href='/'>komuhn.org</a>
        </footer>
        
        <?php wp_footer(); ?>
</html>
