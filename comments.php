<!-- https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ -->
<section id="comments">
    <?php comments_form('What are you thinking?', 'Comment', [], null) ?>

    <?php
        // foreach (get_comments() as $comment) {
        //     foreach ($comment as $key => $value) {
        //         echo "<br />{$key}: {$value}";
        //     }

        //     echo '<hr />';
        // }
    ?>

    <ol>
        <?php list_comments(null); ?>
    </ol>
</section>