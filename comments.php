<!-- https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ -->
<section id="comments">
    <?php comments_form('What are you thinking?', 'Comment', [], null) ?>

    <ol>
        <?php list_comments(null); ?>
    </ol>
</section>