<?php

function register_post_types() {
	// TOOD archive and feed
	register_post_type('thread', [
		'labels' => [
			'name' => 'Threads',
			'singular_name' => 'Thread',
			'add_new_item' => 'Add New Thread',
			'edit_item' => 'Edit Thread',
			'new_item' => 'New Thread',
			'view_item' => 'View Thread',
			'view_items' => 'View Threads',
			'search_items' => 'Search Threads',
			'not_found' => 'No threads',
			'not_found_in_trash' => 'No threads found in Trash',
			'all_items' => 'All Threads',
			'archives' => 'Thread Archives',
			'attributes ' => 'Thread Attributes',
			'insert_into_item ' => 'Insert into thread',
			'uploaded_to_this_item' => 'Uploaded to this thread',
			'filter_items_list' => 'Filter threads list',
			'items_list_navigation' => 'Threads list navigation',
			'items_list' => 'Threads list',
			'item_published' => 'Thread published',
			'item_published_privately' => 'Thread published privately',
			'item_reverted_to_draft' => 'Thread reverted to draft',
			'item_trashed' => 'Thread trashed',
			'item_scheduled' => 'Thread scheduled',
			'item_updated' => 'Thread updated',
			'item_link' => 'Thread Link',
			'item_link_description ' => 'A link to a thread.',
		],

		'description' => 'A thread',
		'public' => true,
		'menu_icon' => 'dashicons-format-chat',
		
		'supports' => [
			'title',
			'editor',
			'comments',
			'revisions',
			'author',
			'excerpt',
			'page-attributes',
			'thumbnail',
			'custom-fields',
		],

		'rewrite' => [
			'slug' => 'threads',
			'with_front' => false,
		]
	]);
}

add_action('init', 'register_post_types');

define('THEME_DIR', get_template_directory_uri());

// ADD SUPPORT FOR FEATURED IMAGE
add_theme_support('post-thumbnails');
// ADD SUPPORT FOR MENUS
add_theme_support('menus');
// ADD SUPPORT FOR EXCERPT ON PAGES
add_post_type_support('page', 'excerpt');

// REMOVE GENERATOR META TAG
remove_action('wp_head', 'wp_generator');

function add_type_attribute($tag, $handle, $src)
{
	if (!in_array($handle, ['click', 'show-more', 'cards'])) {
		return $tag;
	}

	$tag = '<script type="module" src="' . esc_url($src) . '"></script>';

	return $tag;
}

add_filter('script_loader_tag', 'add_type_attribute', 10, 3);

function enqueue_scripts_styles()
{
	wp_enqueue_style('icomoon', get_theme_file_uri('/icomoon/icomoon.css'));
	wp_enqueue_style('style', get_theme_file_uri('/styles/main.css'));

	wp_enqueue_script(
		'click',
		get_template_directory_uri() . '/scripts/click.js'
	);
	wp_enqueue_script('show-more', get_theme_file_uri('/scripts/show-more.js'));

	if (is_page('fluency-in-care')) {
		wp_enqueue_style(
			'fluency-in-care',
			 get_theme_file_uri('/styles/fluency-in-care.css')
		);
		wp_enqueue_script('cards', get_theme_file_uri('/scripts/cards.js'));
	}
}

add_action('wp_enqueue_scripts', 'enqueue_scripts_styles');

function openGraph()
{
	$website_name = get_bloginfo('name');
	$website_description = strip_tags(get_bloginfo('description'));
	$subtitle = get_post_meta(get_the_ID(), 'subtitle', true);
	$excerpt = get_the_excerpt();
	$homepage_excerpt =
		"Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.";
	$type = is_single() ? 'article' : 'website';
	$title = is_front_page('index')
		? $website_name . ' - ' . $website_description
		: get_the_title();
	$description_content = !empty($excerpt) ? $excerpt : $subtitle;
	$description = is_front_page('index')
		? $homepage_excerpt
		: $description_content;

	//replace this with a default image
	$default_image =
		get_template_directory_uri() . '/images/open-graph-image-default.jpg';
	$post_featured_image = get_post_thumbnail_id();

	if (!empty($post_featured_image)) {
		$image = wp_get_attachment_image_url($post_featured_image, 'medium');
	} else {
		$image = $default_image;
	}

	echo '<meta property="og:url" content="' . get_permalink() . '"/>';
	echo '<meta property="og:title" content="' . $title . '"/>';
	echo '<meta property="og:description" content="' . $description . '"/>';
	echo '<meta property="og:type" content="' . $type . '"/>';
	echo '<meta property="og:image" content="' . $image . '"/>';

	echo '<meta name="twitter:card" content="summary_large_image" />';
	echo '<meta name="twitter:site" content="' . $website_name . '" />';
	echo '<meta name="twitter:title" content="' . $title . '" />';
	echo '<meta name="twitter:description" content="' . $description . '" />';
	echo '<meta name="twitter:image" content="' . $image . '" />';
}

//TRIM TEXT - limit characters

function limit_characters($text, $limit)
{
	if (strlen($text) > $limit) {
		$offset = $limit - 3 - strlen($text);
		$text = substr($text, 0, strrpos($text, ' ', $offset)) . '...';
	}

	return $text;
}

// https://developer.wordpress.org/reference/functions/comment_form/
function comments_form(
	string $title_reply,
	string $title_reply_to = '',
	string $comment_notes_before = '',
	string $label_submit = 'Comment',
) {
	comment_form([
		'fields' => [
			'author' => '<input
	placeholder="Name*"
	name="author"
	maxlength="245"
	autocomplete="name"
	required
/>',

			'email' => '<input
	placeholder="Email*"
	name="email"
	maxlength="100"
	aria-describedby="email-notes"
	autocomplete="email"
	required
/>',

			'url' => '<input
	placeholder="Website"
	name="url"
	maxlength="200"
	autocomplete="url"
/>',

			'cookies' => '',
		],

		'comment_field' => '<textarea
	placeholder="Your comment*"
	name="comment"
	maxlength="65525"
	required
></textarea>',

		'comment_notes_before' => $comment_notes_before,
		'comment_notes_after' => '',
		'id_form' => '',
		'id_submit' => '',
		'class_container' => '',
		'class_form' => '',
		'class_submit' => 'button-inverted',
		'name_submit' => '',
		'title_reply' => $title_reply,
		'title_reply_to' => $title_reply_to,
		'title_reply_before' => '<h2>',
		'title_reply_after' => '</h2>',
		'label_submit' => $label_submit,
		'submit_button' => '<button class="%3$s">%4$s</button>',
		'submit_field' => '%1$s %2$s',
	]);
}

// https://developer.wordpress.org/reference/functions/wp_list_comments/
function list_comments() {
	wp_list_comments([
		'style' => 'ol',

		'callback' => function ($comment) {
?>

<li>
	<article>
		<header class='author'>
			<?php
				$user_id = $comment->user_id;
				$user = get_userdata($user_id);

				$name = $user
					? "{$user->display_name}"
					: get_comment_author();
			?>

			<img aria-hidden="true" src="<?= get_avatar_url($user_id) ?>" />

			<div>
				<!-- TODO ca only be used inside `article` -->
				<address><?= $name ?></address>

				<?php $time = strtotime($comment->comment_date); ?>
				<time datetime='<?= date('c', $time) ?>'><?= date('F j, Y', $time) ?></time>
			</div>
		</header>

		<?= apply_filters('the_content', $comment->comment_content) ?>

		<!-- https://developer.wordpress.org/reference/functions/get_comment_reply_link/ -->
		<?= get_comment_reply_link([
			'respond_id' => '',
			'reply_text' => 'Reply',
			'max_depth' => get_option('thread_comments_depth'),
			'depth' => 1,
		]) ?>

<?php
		},

		'end-callback' => function () {
			echo '</article></li>';
		},
  	]);
}
