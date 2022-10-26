<?php
global $post;
$post_id = $post->ID;

define('THEME_DIR', get_template_directory_uri());

// REMOVE GENERATOR META TAG
remove_action('wp_head', 'wp_generator');

// ENQUEUE SCRIPTS and STYLES - Add custom CSS and JS
function enqueue_scripts_styles() {
	// REGISTER
		/// CSS
		//wp_register_style( 'style', get_stylesheet_directory_uri() . '/style.css' );

		/// JS
		//wp_register_script( 'mailcheck', get_template_directory_uri() . '/js/mailcheck-min.js');
		wp_register_script( 'script_min', get_template_directory_uri() . '/js/main-min.js', array(), '1.0.0', true );

	// ENQUEUE
		/// CSS
		//wp_enqueue_style( 'style');

		/// JS
		//wp_enqueue_script( 'mailcheck' );
		// wp_enqueue_script( 'jquery_mobile' );
		wp_enqueue_script( 'script_min' );

	wp_enqueue_script(
		'tracking-banner-script',
		get_template_directory_uri() . '/js/tracking.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'enqueue_scripts_styles' );

function add_type_module_attribute($tag, $handle, $src) {
	if ($handle !== 'tracking-banner-script') {
		return $tag;
	}

	return '<script type="module" src="' . esc_url($src) . '"></script>';
}

add_filter('script_loader_tag', 'add_type_module_attribute', 10, 3);

// ADD SUPPORT FOR MENUS
add_theme_support( 'menus' );

// ADD SUPPORT FOR FEATURED IMAGE
function my_theme_setup(){
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'my_theme_setup');

function openGraph(){
	
	$website_name = get_bloginfo( 'name' );

	$default_image = get_template_directory_uri() . "/img/open-graph-image.jpg"; //replace this with a default image on your server or an image in your media library

	$post_featured_image = get_post_thumbnail_id($post);

	if ( !empty($post_featured_image) ){
		$featured_image = wp_get_attachment_image_url($post_featured_image, 'medium');
	} else {
		$featured_image = $default_image;
	}

	echo '<meta property="og:locale" content="alternate"/>';
	echo '<meta property="og:site_name" content="'. $website_name .'"/>';
	if ( is_home() ) {
		echo '<title>'. $website_name .' | '. strip_tags(get_bloginfo( 'description' )) .'</title>';
		echo '<meta property="og:type" content="website"/>';
		echo '<meta property="og:title" content="'. $website_name .' | '. strip_tags(get_bloginfo( 'description' )) .'"/>';
		echo '<meta property="og:description" content="' . strip_tags(get_bloginfo( 'description' )) . '"/>';
		echo '<meta property="og:image" content="' . $default_image . '"/>';

	} elseif ( is_page() || is_singular('post') )  {
		echo '<title>' . strip_tags(get_the_title( $post )) . ' - '. $website_name .'</title>';
		echo '<meta property="og:type" content="article"/>';
		echo '<meta property="og:title" content="' . strip_tags(get_the_title( $post )) . ' - '. $website_name .'"/>';
		echo '<meta property="og:description" content="' . strip_tags(get_the_excerpt($post)) . '"/>';
		echo '<meta property="og:url" content="' . get_permalink($post) . '"/>';
		echo '<meta property="og:image" content="' . $featured_image . '"/>';

	} else {
		echo '<title>' . strip_tags(get_the_title()) . ' - '. $website_name .'</title>';
		echo '<meta property="og:type" content="website"/>';
		echo '<meta property="og:title" content="' . strip_tags(get_the_title()) . ' - '. $website_name .'"/>';
		echo '<meta property="og:description" content="' . strip_tags(get_the_excerpt($post)) . '"/>';
		echo '<meta property="og:url" content="' . get_permalink() . '"/>';
		echo '<meta property="og:image" content="' . $featured_image . '"/>';
	}
}


// REMOVE EMOJI FROM STRINGS https://stackoverflow.com/a/65179618
function removeEmoji( string $text ): string {
    $text = iconv('UTF-8', 'ISO-8859-15//IGNORE', $text);
    $text = preg_replace('/\s+/', ' ', $text);
    return iconv('ISO-8859-15', 'UTF-8', $text);
};

// RETURN UNIQUE READABLE POST ID
function make_unique_id( string $str, string $date, $pre = false ): string { // $pre can be a string or a boolean: false
    $slug = removeEmoji( $str );
    $slug = sanitize_title( $slug );
    $unique_id = $slug . '-' . $date;
    if ( $pre ) {
        $unique_id =  $pre . '-' . $unique_id;
    }
    return $unique_id;
}

//Change default gravatar

add_filter( 'avatar_defaults', 'wbcom_new_gravatar' );
function wbcom_new_gravatar ($avatar_defaults) {
    $myavatar = 'https://komuhn.co/wordpress/wp-content/uploads/ok-avatar.png';
    $avatar_defaults[$myavatar] = "Default Gravatar";
    return $avatar_defaults;
}

//Get author avatar and name
function author() {

    $avatar = get_avatar(get_the_author_meta('ID', $post_id));
    $author_name = get_the_author_meta( 'display_name', $post->post_author );
    $author_URL = get_author_posts_url( get_the_author_meta( 'ID' , $post->post_author));

    echo  '<p class="author">'. $avatar .'<a href="'. $author_URL .'" title="'. $author_name .'">'. $author_name .'</a></p>';

}


//Get last edit author URL - when last_edit
function last_edit_author_url() {
    if ( $id = get_post_meta( $post_id, '_edit_last', true ) ) {
        echo esc_url( last_edit_author_url( $id ) );
    }
}


//Get last edit post meta info
function last_edit_details() {

    $latest_revision = array_shift(wp_get_post_revisions($post_id));
    $latest_revision_date = get_the_modified_date('Y-m-d');
    $latest_revision_author = get_the_author_meta('display_name', $latest_revision->post_author);
    $latest_revision_author_URL = get_author_posts_url( get_the_author_meta( 'ID' , $latest_revision->post_author));

    $postDate = get_the_date('Y-m-d');

    if($latest_revision > 0 && $latest_revision_date > $postDate) {
        echo '<p class="last-edit">Last edit by <a href="'. $latest_revision_author_URL .'">'. $latest_revision_author .' </a> on <time datetime="'. get_the_modified_date() .'">'. get_the_modified_date(). '</time></p>';
    }

}

/**
* Add custom fields to menu item
* https://www.kathyisawesome.com/add-custom-fields-to-wordpress-menu-items/
* This will allow us to play nicely with any other plugin that is adding the same hook
*
* @param  int $item_id 
* @params obj $item - the menu item
* @params array $args
*/
function kia_custom_fields( $item_id, $item ) {

	wp_nonce_field( 'custom_menu_meta_nonce', '_custom_menu_meta_nonce_name' );
	$custom_menu_meta = get_post_meta( $item_id, '_custom_menu_meta', true );
	?>

	<input type="hidden" name="custom-menu-meta-nonce" value="<?php echo wp_create_nonce( 'custom-menu-meta-name' ); ?>" />

	<div class="field-custom_menu_meta description-wide" style="margin: 5px 0;">
	    <span class="description"><?php _e( "Extra Field", 'custom-menu-meta' ); ?></span>
	    <br />

	    <input type="hidden" class="nav-menu-id" value="<?php echo $item_id ;?>" />

	    <div class="logged-input-holder">
	        <input type="text" name="custom_menu_meta[<?php echo $item_id ;?>]" id="custom-menu-meta-for-<?php echo $item_id ;?>" value="<?php echo esc_attr( $custom_menu_meta ); ?>" style="width: 100%;" />
	    </div>

	</div>

	<?php
}
add_action( 'wp_nav_menu_item_custom_fields', 'kia_custom_fields', 10, 2 );


/**
* Save the menu item meta
* 
* @param int $menu_id
* @param int $menu_item_db_id	
*/
function kia_nav_update( $menu_id, $menu_item_db_id ) {

	// Verify this came from our screen and with proper authorization.
	if ( ! isset( $_POST['_custom_menu_meta_nonce_name'] ) || ! wp_verify_nonce( $_POST['_custom_menu_meta_nonce_name'], 'custom_menu_meta_nonce' ) ) {
		return $menu_id;
	}

	if ( isset( $_POST['custom_menu_meta'][$menu_item_db_id]  ) ) {
		$sanitized_data = sanitize_text_field( $_POST['custom_menu_meta'][$menu_item_db_id] );
		update_post_meta( $menu_item_db_id, '_custom_menu_meta', $sanitized_data );
	} else {
		delete_post_meta( $menu_item_db_id, '_custom_menu_meta' );
	}
}
add_action( 'wp_update_nav_menu_item', 'kia_nav_update', 10, 2 );


/**
* Displays text on the front-end.
*
* @param string   $title The menu item's title.
* @param WP_Post  $item  The current menu item.
* @return string      
*/
function kia_custom_menu_title( $title, $item ) {

	if( is_object( $item ) && isset( $item->ID ) ) {

		$custom_menu_meta = get_post_meta( $item->ID, '_custom_menu_meta', true );

		if ( ! empty( $custom_menu_meta ) ) {
		    $title = $custom_menu_meta . ' <span>' . $title . '</span> ';
		}
	}
	return $title;
}
add_filter( 'nav_menu_item_title', 'kia_custom_menu_title', 10, 2 );

?>