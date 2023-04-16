<!-- https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ -->
<section id="comments">

    <?php wp_list_comments(); ?>

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

                        <?php $time = strtotime($comment->comment_date); ?>

                        <time datetime='<?= date('c', $time); ?>'><?= date('F j, Y', $time); ?></time>
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

        comment_form([
            'fields' => [
                'author' => '<input
    placeholder="Name*"

    id="author"
    name="author"
    type="text"
    value=""
    size="30"
    maxlength="245"
    autocomplete="name"
    required="required"
/>',

                'email' => '<input
    placeholder="Email*"

    id="email"
    name="email"
    type="text"
    value=""
    size="30"
    maxlength="100"
    aria-describedby="email-notes"
    autocomplete="email"
    required="required"
/>',

                'url' => '<input
    placeholder="Website"

    id="url"
    name="url"
    type="text"
    value=""
    size="30"
    maxlength="200"
    autocomplete="url"
/>',

                'cookies' => ''
            ],

            'comment_field' => '<textarea
    placeholder="Your comment*"

    id="comment"
    name="comment"
    cols="45"
    rows="8"
    maxlength="65525"
    required="required"
></textarea>',

            // 'must_log_in'
            // 'logged_in_as'

            'comment_notes_before' => '',
            'comment_notes_after' => '',

            // 'action'

            'id_form' => '',
            'id_submit' => '',
            'class_container' => '',
            'class_form' => '',
            'class_submit' => '',
            'name_submit' => '',
            'title_reply' => 'What are you thinking?',
            'title_reply_to' => "What are you thinking about %s's thought?",
            'title_reply_before' => '<h2>',
            'title_reply_after' => '</h2>',

            // 'cancel_reply_before'
            // 'cancel_reply_after'
            // 'cancel_reply_link'

            'label_submit' => 'Comment',
            'submit_button' => '<button>%4$s</button>',
            'submit_field' => '%1$s %2$s',

            // 'format'
        ]);
    ?>
</section>