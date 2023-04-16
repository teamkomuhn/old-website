<?php
add_theme_support('post-thumbnails');

function comment_fields($fields) {
	unset($fields['cookies']);

	return $fields;
}

add_filter('comment_form_default_fields', 'comment_fields');


//TRIM TEXT - limit words

function limit_words($text, $limit) {
    if (str_word_count($text, 0) > $limit) {
        $words = str_word_count($text, 2);
        $pos   = array_keys($words);
        $text  = substr($text, 0, $pos[$limit]) . '...';
    }
    return $text;
}

function limit_characters($text, $limit) {

    if (strlen($text) > $limit) {
        $offset = ($limit - 3) - strlen($text);
        $text = substr($text, 0, strrpos($text, ' ', $offset)) . '...';
    }

    return $text;
}