<?php

// REMOVE EMOJI FROM STRINGS https://stackoverflow.com/a/65179618
function removeEmoji( string $text ): string {
    $text = iconv('UTF-8', 'ISO-8859-15//IGNORE', $text);
    $text = preg_replace('/\s+/', ' ', $text);
    return iconv('ISO-8859-15', 'UTF-8', $text);
};
?>
