<?php

function url(string $url) {
    //wp_make_link_relative(get_template_directory_uri()) . $url is returning the theme folder wordpress/ twice online (can't replicate it locally)
    //return wp_make_link_relative(get_template_directory_uri()) . $url;
    return get_stylesheet_directory_uri() . $url;
}

function url_theme(string $url) {
    //return wp_make_link_relative(get_stylesheet_directory_uri()) . $url;
    return get_stylesheet_directory_uri() . $url;
}

define('THEME_DIR', get_template_directory_uri());

// ADD SUPPORT FOR FEATURED IMAGE
add_theme_support('post-thumbnails');
// ADD SUPPORT FOR MENUS
add_theme_support( 'menus' );
// ADD SUPPORT FOR EXCERPT ON PAGES
add_post_type_support( 'page', 'excerpt' );

// REMOVE GENERATOR META TAG
remove_action('wp_head', 'wp_generator');

function add_type_attribute($tag, $handle, $src) {
    if (!in_array($handle, ['click', 'show-more', 'cards'])) {
        return $tag;
    }

    $tag = '<script type="module" src="' . esc_url($src) . '"></script>';

    return $tag;
}

add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);

function enqueue_scripts_styles() {
    wp_enqueue_style('icomoon', url_theme('/icomoon/icomoon.css'));
    wp_enqueue_style('style', url_theme('/styles/main.css'));

    wp_enqueue_script('click', get_template_directory_uri() . '/scripts/click.js');
    wp_enqueue_script('show-more', url_theme('/scripts/show-more.js'));

    if (is_page('fluency-in-care')) {
        wp_enqueue_style('fluency-in-care', url_theme('/styles/fluency-in-care.css'));
        wp_enqueue_script('cards', url_theme('/scripts/cards.js'));
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

/** https://developer.wordpress.org/reference/functions/comment_form/ */
function comments_form(string $title_reply, string $label_submit) {
    // NOTE only the `cookies` field seems to be needed
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
    ]);
}