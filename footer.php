		</main>

		<?php comments_template('/contact.php'); ?>

		<footer id="footer">
			<a href="<?= home_url() ?>">
				<img aria-hidden="true" src="<?= get_theme_file_uri(is_404() ? '/images/komuhn-light.svg' : '/images/komuhn.svg') ?>" />
				komuhn.org
			</a>
		</footer>

		<?php wp_footer(); ?>
	<body>
</html>
