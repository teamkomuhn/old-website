<?php

define('THEME_DIR', get_template_directory_uri());

// REMOVE GENERATOR META TAG
remove_action('wp_head', 'wp_generator');

// ENQUEUE SCRIPTS and STYLES - Add custom CSS and JS
function enqueue_scripts_styles() {
	// REGISTER
		/// CSS
        wp_register_style( 'fluency-in-care', get_stylesheet_directory_uri() . '/fluency-in-care.css' );
		wp_register_style( 'style', get_stylesheet_directory_uri() . '/styles.css' );

		/// JS
		wp_register_script( 'script', get_template_directory_uri() . '/interation.js', array(), '1.0.0', true );

	// ENQUEUE
		/// CSS
        if (is_page('fluency-in-care')) {
		    wp_enqueue_style( 'fluency-in-care');
        } else {
		    wp_enqueue_style( 'style');
        }
		/// JS
        if (is_page('care')) {
            wp_enqueue_script( 'script' );
        }


}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles' );


function my_theme_setup_support(){
    // ADD SUPPORT FOR FEATURED IMAGE
    add_theme_support('post-thumbnails');
    // ADD SUPPORT FOR MENUS
    add_theme_support( 'menus' );
}
add_action('after_setup_theme', 'my_theme_setup_support');

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