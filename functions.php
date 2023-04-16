<?php

define('THEME_DIR', get_template_directory_uri());

add_theme_support('post-thumbnails');

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