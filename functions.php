<?php

add_theme_support('post-thumbnails');
add_post_type_support('page', 'excerpt');

add_filter('excerpt_length', fn () => 35);
add_filter('excerpt_more', fn () => '…');

add_action('init', function () {
	// https://developer.wordpress.org/reference/functions/register_post_type/
	register_post_type('thread', [
		// https://developer.wordpress.org/reference/functions/get_post_type_labels/
		'labels' => [
			'name' => 'Threads',
			'singular_name' => 'Thread',
			'add_new' => 'Add New Thread',
			'add_new_item' => 'Add New Thread',
			'edit_item' => 'Edit Thread',
			'new_item' => 'New Thread',
			'view_item' => 'View Thread',
			'view_items' => 'View Threads',
			'search_items' => 'Search Threads',
			'not_found' => 'No threads',
			'not_found_in_trash' => 'No threads found in Trash',
			'parent_item_colon' => 'Parent Thread:',
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
		'show_in_rest' => true,
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
});

add_action('wp_enqueue_scripts', function () {
	wp_enqueue_style('styles', get_theme_file_uri('/styles/styles.css'));
	wp_enqueue_style('sidenotes', get_theme_file_uri('/styles/sidenotes.css'));
	wp_enqueue_script_module('see-more', get_theme_file_uri('/scripts/see-more.js'));
	wp_enqueue_script_module('anchor-attribute-polyfill', get_theme_file_uri('/scripts/anchor-attribute-polyfill.js'));


	if (is_front_page()) {
		wp_enqueue_style('home', get_theme_file_uri('/styles/home.css'));
		wp_enqueue_script_module('click', get_theme_file_uri('/scripts/click.js'));
	}

	if (is_single()) {
		wp_enqueue_style('post', get_theme_file_uri('/styles/post.css'));
	}

	if (is_singular('thread')) {
		wp_enqueue_style('thread', get_theme_file_uri('/styles/thread.css'));
	}

	if (is_page('fluency-in-care')) {
		wp_enqueue_style('fluency-in-care', get_theme_file_uri('/styles/fluency-in-care.css'));
		wp_enqueue_script_module('cards', get_theme_file_uri('/scripts/cards.js'));
	}

	if (is_404()) {
		wp_enqueue_style('not-found', get_theme_file_uri('/styles/not-found.css'));
	}
});

function author() {
	?>
		<?= get_avatar(get_the_author_meta('ID'), args: ['extra_attr' => 'aria-hidden="true"']) ?>

		<div>
			<address><?= get_the_author_meta('display_name') ?></address>
			<time datetime="<?= get_the_date('c') ?>"><?= get_the_date('F j, Y') ?></time>
		</div>
	<?php
}

// https://developer.wordpress.org/reference/functions/comment_form/
function comments_form(string $label_submit = 'Comment') {
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
	placeholder="Your message*"
	name="comment"
	maxlength="65525"
	required
	rows="9"
></textarea>',

		'comment_notes_before' => '',
		'comment_notes_after' => '',
		'id_form' => '',
		'id_submit' => '',
		'class_container' => '',
		'class_form' => '',
		'class_submit' => '',
		'name_submit' => '',
		'title_reply' => '',
		'title_reply_to' => '<p>About %s\'s thought?</p>',
		'title_reply_before' => '',
		'title_reply_after' => '',
		'cancel_reply_before' => '',
		'cancel_reply_after' => '',
		'label_submit' => $label_submit,
		'submit_button' => '<button>%4$s</button>',
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
				$name = $user ? "{$user->display_name}" : get_comment_author();
			?>

			<?= get_avatar($user_id, args: ['extra_attr' => 'aria-hidden="true"']) ?>

			<div >
				<address><?= $name ?></address>

				<?php $time = strtotime($comment->comment_date); ?>
				<time datetime='<?= date('c', $time) ?>'><?= date('F j, Y', $time) ?></time>
			</div>
		</header>

		<div>
			<?= apply_filters('the_content', $comment->comment_content) ?>

			<!-- https://developer.wordpress.org/reference/functions/get_comment_reply_link/ -->
			<?= get_comment_reply_link([
				'max_depth' => get_option('thread_comments_depth'),
				'depth' => 1,
			]) ?>
		</div>
<?php
		},

		'end-callback' => function () { ?></article></li><?php },
  	]);
}
