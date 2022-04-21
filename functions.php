<?php
global $post;
$post_id = $post->ID;

// ADD SUPPORT FOR MENUS
add_theme_support( 'menus' );

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
    $myavatar = 'http://komuhn.co/wordpress/wp-content/uploads/ok-avatar.png';
    $avatar_defaults[$myavatar] = "Default Gravatar";
    return $avatar_defaults;
}

//Get author avatar and name
function author_section() {

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


?>
