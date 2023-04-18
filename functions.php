<?php

define('THEME_DIR', get_template_directory_uri());

// ADD SUPPORT FOR FEATURED IMAGE
add_theme_support('post-thumbnails');
// ADD SUPPORT FOR MENUS
add_theme_support( 'menus' );

// REMOVE GENERATOR META TAG
remove_action('wp_head', 'wp_generator');


// ENQUEUE SCRIPTS and STYLES - Add custom CSS and JS
function enqueue_scripts_styles() {
    wp_register_style('icomoon', get_stylesheet_directory_uri() . '/icomoon/icomoon.css');
    wp_register_style('style', get_stylesheet_directory_uri() . '/styles.css');
    wp_register_style('fluency-in-care', get_stylesheet_directory_uri() . '/fluency-in-care.css');
    
    wp_register_script('script', get_template_directory_uri() . '/interaction.js', array(), '1.0.0', true);

    wp_enqueue_style('icomoon');
    wp_enqueue_style('style');

    if (is_page('fluency-in-care')) {
        wp_enqueue_style('fluency-in-care');
        wp_enqueue_script('script');
    }
}

add_action('wp_enqueue_scripts', 'enqueue_scripts_styles');


function openGraph(){

	$website_name = get_bloginfo( 'name' );
    $website_description = strip_tags(get_bloginfo( 'description' ));
    $subtitle = get_post_meta(get_the_ID(), 'subtitle', true);
    $excerpt = get_the_excerpt();
    $homepage_excerpt = "Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.";
    $type = is_single() ? 'article' : 'website';
    $title = is_front_page('index') ? $website_name . " - " . $website_description : get_the_title();
    $description_content = !empty($excerpt) ? $excerpt : $subtitle;
    $description = is_front_page('index') ? $homepage_excerpt : $description_content;

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


function url(string $url) {
    return wp_make_link_relative(get_template_directory_uri()) . $url;
}

function allow_comments_anywhere() {
    global $withcomments;
    $withcomments = true;
}

// https://developer.wordpress.org/reference/functions/comment_form/
function comments_form($title_reply, $label_submit, $custom_fields, $post) {
    // NOTE Fields don't seem to require names except for cookies
    comment_form([
        'fields' => array_merge([
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
        ], $custom_fields),

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
        'class_submit' => 'button button-inverted',
        'name_submit' => '',
        'title_reply' => $title_reply,
        'title_reply_to' => "What are you thinking about %s's thought?",
        'title_reply_before' => '<h2>',
        'title_reply_after' => '</h2>',

        // 'cancel_reply_before'
        // 'cancel_reply_after'
        // 'cancel_reply_link'

        'label_submit' => $label_submit,
        'submit_button' => '<button class="%3$s">%4$s</button>',
        'submit_field' => '%1$s %2$s',

        // 'format'
    ], $post);
}

// https://developer.wordpress.org/reference/functions/wp_list_comments/
function list_comments($comments) {
    wp_list_comments([
        // 'walker'
        // 'max_depth'

        'style' => 'ol',

        'callback' => function ( $comment, $depth, $args ) {
            ?>

            <li>
                <header>
                    <?php 
                        $userID = $comment->user_id;
                        $user = get_userdata($userID);
                        $first_name = $user->user_firstname;
                        $last_name = $user->user_lastname;
                    ?>
                    
                    <div class="author">
                        <img aria-hidden="true" src="<?= get_avatar_url( $userID ); ?>" />

                        <div>
                            <address><?= $first_name . ' '. $last_name; ?></address>

                            <?php $time = strtotime($comment->comment_date); ?>
                            <time datetime='<?= date('c', $time); ?>'><?= date('F j, Y', $time); ?></time>
                        </div>
                    </div>
                </header>
                <div><?= apply_filters('the_content', $comment->comment_content); ?></div>

                <!-- https://developer.wordpress.org/reference/functions/get_comment_reply_link/ -->
                <?= get_comment_reply_link([
                    // 'add_below', this has something to do with moving the form below the reply

                    'respond_id' => '',
                    'reply_text' => 'Reply',

                    // 'login_text'

                    'max_depth'  => get_option('thread_comments_depth'),
                    'depth'      => 1
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