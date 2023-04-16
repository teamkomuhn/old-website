<?php
add_theme_support('post-thumbnails');


function openGraph(){
	
	$website_name = get_bloginfo( 'name' );
    $website_description = strip_tags(get_bloginfo( 'description' ));
    $type = is_single() ? 'article' : 'website';
    $title = is_singular() ? get_the_title($post) : $website_name . " - " . $website_description;
    $description = is_front_page() ? $website_description : get_the_excerpt($post);

    //replace this with a default image
	$default_image = get_template_directory_uri() . "/img/open-graph-image.jpg"; 
	$post_featured_image = get_post_thumbnail_id($post);

	if ( !empty($post_featured_image) ){
		$featured_image = wp_get_attachment_image_url($post_featured_image, 'medium');
	} else {
		$featured_image = $default_image;
	}
    
    echo '<meta property="og:url" content="' . get_permalink($post) . '"/>';
    echo '<meta property="og:title" content="'. $title .'"/>';
    echo '<meta property="og:description" content="' . $description . '"/>';
    echo '<meta property="og:type" content="'.$type.'"/>';
    echo '<meta property="og:image" content="' . $featured_image . '"/>';
}


//TRIM TEXT - limit characters

function limit_characters($text, $limit) {

    if (strlen($text) > $limit) {
        $offset = ($limit - 3) - strlen($text);
        $text = substr($text, 0, strrpos($text, ' ', $offset)) . '...';
    }

    return $text;
}