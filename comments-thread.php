<!-- https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ -->

<section id="comments">
    <ol>
		<?php list_comments(); ?>
	</ol>

	<?php comments_form('Participate in the conversation', 'Comment'); ?>
</section>
