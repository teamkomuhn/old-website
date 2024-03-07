<footer id="contact">
	<?php
		if (!is_single()) {
			comments_form(
				title_reply: 'Let’s talk!',
				comment_notes_before: '<p>See something that makes you want to talk with us? Send us a message and we will get back to you in a bit.</p>',
				label_submit: 'Send',
			);
		}
	?>

	<address>
		<a class="paper-plane" href="mailto:team@komuhn.org"><span>team@komuhn.org</span></a>
		<a class="phone" href="tel:+351960001270"><span>+351 960001270</span></a>
	</address>
</footer>
