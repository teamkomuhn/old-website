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
