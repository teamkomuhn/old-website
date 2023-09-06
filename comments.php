<!--
    https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/comment-template/ 
    https://developer.wordpress.org/reference/functions/wp_list_comments/
-->

<section id="comments">
    <?php comments_form('What are you thinking?', 'Comment'); ?>

    <h2 class="arrow-down">Comments (<?= get_comment_count(get_the_ID())[
    	'approved'
    ] ?>)</h2>
    <ol>
        <?php wp_list_comments([
        	// 'walker'
        	// 'max_depth'

        	'style' => 'ol',

        	'callback' => function ($comment, $depth, $args) {
        		?>

        <li>
            <header class='author'>
                <?php
                $user_id = $comment->user_id;
                $user = get_userdata($user_id);

                $name = $user
                	? "{$user->first_name} {$user->last_name}"
                	: get_comment_author($user_id);
                // if ($user):
        		?>
                    <img aria-hidden="true" src="<?= get_avatar_url(
                    	$user_id
                    ) ?>" />
                <?php // endif;
        		?>

                <div>
                    <!-- TODO ca only be used inside `article` -->
                    <address><?= $name ?></address>

                    <?php $time = strtotime($comment->comment_date); ?>
                    <time datetime='<?= date('c', $time) ?>'><?= date(
	'F j, Y',
	$time
) ?></time>
                </div>
            </header>

            <?= apply_filters('the_content', $comment->comment_content) ?>

            <!-- https://developer.wordpress.org/reference/functions/get_comment_reply_link/ -->
            <?= get_comment_reply_link([
            	// 'add_below', NOTE this has something to do with moving the form below the reply

            	'respond_id' => '',
            	'reply_text' => 'Reply',

            	// 'login_text'

            	'max_depth' => get_option('thread_comments_depth'),
            	'depth' => 1,
            ]) ?>
        <?php
        	},

        	'end-callback' => function () {
        		echo '</li>';
        	},

        	// 'type'
        	// 'page'
        	// 'per_page'
        	// 'avatar_size'
        	// 'reverse_top_level'
        	// 'reverse_children'
        	// 'reverse_top_level'
        	// 'format'
        	// 'short_ping'
        	// 'echo'
        ]); ?>
    </ol>
</section>