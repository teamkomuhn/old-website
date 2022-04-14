<?php
// ADD SUPPORT FOR MENUS
add_theme_support( 'menus' );

// REMOVE EMOJI FROM STRINGS https://stackoverflow.com/a/65179618
function removeEmoji( string $text ): string {
    $text = iconv('UTF-8', 'ISO-8859-15//IGNORE', $text);
    $text = preg_replace('/\s+/', ' ', $text);
    return iconv('ISO-8859-15', 'UTF-8', $text);
};

// RETURN UNIQUE READABLE POST ID
// function make_unique_id( $str, $date, $pre ) {
//     $slug = removeEmoji( $str );
//     $slug = sanitize_title( $slug  );
//     $unique_id = $slug . '-' . $date;
//     if ( $pre ) {
//         $unique_id =  $pre . '-' . $unique_id;
//     }
//     return 'Foo';//$unique_id;
// }

function make_unique_id( string $str, string $date, $pre ): string { // $pre can be a string or a boolean: false
    $slug = removeEmoji( $str );
    $slug = sanitize_title( $slug );
    $unique_id = $slug . '-' . $date;
    if ( $pre ) {
        $unique_id =  $pre . '-' . $unique_id;
    }
    return $unique_id;
}
?>
