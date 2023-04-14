<!-- https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ -->
<section id="comments">
    <ol>
        <?php wp_list_comments([
            'style' => 'ol',

            'callback' => function ( $comment, $depth, $args ) {
                ?>

                <li>
                    <header>
                        <address>
                            <img src="" alt="">
                            <span><?= get_comment_author(); ?></span>
                        </address>

                        <time datetime='2023-04-07'><?=date('F j, Y', strtotime($comment->comment_date))?></time>
                    </header>

                    <p><?= $comment->comment_content; ?></p>

                    <!-- TODO should you get_comment_reply_link; https://stackoverflow.com/questions/18547040/comment-reply-link-doesnt-show -->
                    <a class="arrow-left" href="?replytocom=<?= $comment->comment_ID; ?>#comment">Reply</a>
                <?php
            },
            
            'end-callback' => function () {
                echo '</li>';
            },
        ]); ?>
    </ol>

    <?php 
        // foreach (get_comments() as $comment) {
        //     foreach ($comment as $key => $value) {
        //         echo "<br />{$key}: {$value}";
        //     }

        //     echo '<hr />';
        // }

        comment_form(
            [
            'fields' => [
                'author' => '<label for="author">Name <span class="required">*</span></label>
<input
    name="author"
    type="text"
    value="www"
    size="30"
    maxlength="245"
    autocomplete="name"
    required="required"
/>',
                'email' => '<label for="email">Email <span class="required">*</span></label>
                
<input
    name="email"
    type="text"
    value="sssss@sjjs.com"
    size="30"
    maxlength="100"
    autocomplete="email"
    required="required"
/>',

                'url' => '<label for="url">Website</label>

<input
    name="url"
    type="text"
    value=""
    size="30"
    maxlength="200"
    autocomplete="url"
/>',

                'cookies' => '<input
    name="wp-comment-cookies-consent"
    type="hidden"
    value="yes"
    checked="checked"
/>'
            ],

            'comment_field' => '<textarea name="comment"></textarea>',
            'comment_notes_before' => '',
            'comment_notes_after' => '',
            'id_form' => '',
            'id_submit' => '',
            'class_container' => '',
            'class_form' => '',
            'class_submit' => '',
            'title_reply' => 'What are you thinking?',
            'title_reply_to' => "What are you thinking about %s's thought?",
            'title_reply_before' => '<h2>',
            'title_reply_after' => '</h2>',
            // 'cancel_reply_before'
            // 'cancel_reply_after'
            'cancel_reply_link' => 'Cancel reply',
            'label_submit' => 'Comment',
            'submit_button' => '<input name="%1$s" type="submit" value="%4$s" />',

            'submit_field' => '<p class="form-submit">%1$s %2$s</p>'
        ]
    );
    ?>
</section>