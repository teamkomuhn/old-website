<section id="comments">
	<ol>
		<?php list_comments(); ?>
	</ol>

	<?php comments_form(
		title_reply: 'Participate in the conversation',
		title_reply_to: "What are you thinking about %s's thought?",
	); ?>
</section>
