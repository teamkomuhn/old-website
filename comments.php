<!--
    https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ 
    https://developer.wordpress.org/reference/functions/wp_list_comments/
-->

<section id="comments">
    <?php comments_form('What are you thinking?', 'Comment'); ?>

    <h2 class="arrow-down">
		Comments (<?= get_comment_count(get_the_ID())['approved'] ?>)
	</h2>

    <ol><?php list_comments(); ?></ol>
</section>