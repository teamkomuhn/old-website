<footer id="contact">
	<header>
		<h2>Let’s talk!</h2>
		<p>See something that makes you want to talk with us? Send us a message and we wil get back to you in a bit.</p>
	</header>

	<div>
		<?php
			if (!is_single()) {
				comments_form(label_submit: 'Send');
			}
		?>

		<address>
			<a href="mailto:team@komuhn.org">
				<img alt="" src="<?= get_theme_file_uri('/images/icons/phone.svg') ?>" />
				team@komuhn.org
			</a>

			<a href="tel:+351960001270">
				<img alt="" src="<?= get_theme_file_uri('/images/icons/paper-plane.svg') ?>" />
				+351 960001270
			</a>
		</address>
	</div>
</footer>
