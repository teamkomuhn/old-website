<?php

declare(strict_types = 1);

define('THEME_DIR', get_template_directory_uri());

add_theme_support('post-thumbnails');

function url(string $url) {
    return wp_make_link_relative(get_template_directory_uri()) . $url;
}

function allow_comments_anywhere() {
    global $withcomments;
    $withcomments = true;
}

// https://developer.wordpress.org/reference/functions/comment_form/
function comments_form(string $title_reply, string $label_submit, array $custom_fields, WP_Post | null $post) {
    // NOTE Fields don't seem to require names except for cookies
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

            'cookies' => '',

            ...$custom_fields
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
        'title_reply' => $title_reply,
        'title_reply_to' => "What are you thinking about %s's thought?",
        'title_reply_before' => '<h2>',
        'title_reply_after' => '</h2>',

        // 'cancel_reply_before'
        // 'cancel_reply_after'
        // 'cancel_reply_link'

        'label_submit' => $label_submit,
        'submit_button' => '<button>%4$s</button>',
        'submit_field' => '%1$s %2$s',

        // 'format'
    ], $post);
}

// https://developer.wordpress.org/reference/functions/wp_list_comments/
function list_comments(array | null $comments) {
    wp_list_comments([
        // 'walker'
        // 'max_depth'

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

                <!-- https://developer.wordpress.org/reference/functions/get_comment_reply_link/ -->
                <?= get_comment_reply_link([
                    // 'add_below', this has something to do with moving the form below the reply

                    'respond_id' => '',
                    'reply_text' => 'Reply',

                    // 'login_text'

                    'max_depth'  => get_option('thread_comments_depth'),
                    'depth'      => 1,
                    'before'     => '<a class="arrow-left">',
                    'after'      => '</a>',
                ]); ?>
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
    ], $comments);
}


function openGraph(){
	
	$website_name = get_bloginfo( 'name' );
    $website_description = strip_tags(get_bloginfo( 'description' ));
    $homepage_excerpt = "Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.";
    $type = is_single() ? 'article' : 'website';
    $title = is_singular() ? get_the_title() : $website_name . " - " . $website_description;
    $description = is_front_page() ? $homepage_excerpt : get_the_excerpt();

    //replace this with a default image
	$default_image = get_template_directory_uri() . "/images/open-graph-image-default.jpg"; 
	$post_featured_image = get_post_thumbnail_id();

	if ( !empty($post_featured_image) ){
		$image = wp_get_attachment_image_url($post_featured_image, 'medium');
	} else {
		$image = $default_image;
	}
    
    echo '<meta property="og:url" content="'. get_permalink() .'"/>';
    echo '<meta property="og:title" content="'. $title .'"/>';
    echo '<meta property="og:description" content="'. $description .'"/>';
    echo '<meta property="og:type" content="'. $type .'"/>';
    echo '<meta property="og:image" content="'. $image .'"/>';

    echo '<meta name="twitter:card" content="summary_large_image" />';
    echo '<meta name="twitter:site" content="'. $website_name .'" />';
    echo '<meta name="twitter:title" content="'. $title .'" />';
    echo '<meta name="twitter:description" content="'. $description .'" />';
    echo '<meta name="twitter:image" content="'. $image .'" />';
}


//TRIM TEXT - limit characters

function limit_characters($text, $limit) {

    if (strlen($text) > $limit) {
        $offset = ($limit - 3) - strlen($text);
        $text = substr($text, 0, strrpos($text, ' ', $offset)) . '...';
    }

    return $text;
}