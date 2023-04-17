        </main>

        <footer>
            <?php
                if (comments_open() || get_comments_number()) {
                    comments_template();
                } 
            ?>

            <div>
                <img src="..." alt="">
                <span>komuhn.co</span>
            </div>

        </footer>
        
        <?php //wp_footer(); ?>
</html>
