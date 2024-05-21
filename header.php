<?php
	$page_type = match (true) {
		is_front_page() => 'home',
		is_singular() => 'post',
		is_404() => 'not_found',
	};

	$site_name = get_bloginfo('site_name');
	$site_description = get_bloginfo('description');

	$title = match ($page_type) {
		'home' => $site_name,
		'post' => get_the_title(),
		'not_found' => 'Page not found'
	};

	$full_title = "{$title} | " . match ($page_type) {
		'home' => $site_description,
		default => $site_name,
	};

	$subtitle = get_post_meta(get_the_ID(), 'subtitle', true);
	$excerpt = get_the_excerpt();

	$description = match ($page_type) {
		'post' => empty($subtitle) ? $subtitle : $excerpt,
		default => $site_description,
	};

	$type = match ($page_type) {
		'post' => 'article',
		default => 'website',
	};

	$image = match ($page_type) {
		'post' => get_the_post_thumbnail_url(),
		default => get_theme_file_uri('/images/open-graph-image-default.jpg'),
	};

	// HACK
	$url = home_url(add_query_arg([]));
?>

<!DOCTYPE html>

<html lang="en">
	<head prefix="og: https://ogp.me/ns#">
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />

		<title><?= $full_title ?></title>
		<meta name="description" content="<?= $description ?>" />

		<meta property="og:title" content="<?= $title ?>" />
		<meta property="og:type" content="<?= $type ?>" />
		<meta property="og:image" content="<?= $image ?>" />
		<meta property="og:url" content="<?= $url ?>" />
		<meta property="og:site_name" content="<?= $site_name ?>" />
		<meta name="X:card" content="summary_large_image" />

		<link rel="icon" href="<?= get_theme_file_uri('/images/favicon.png') ?>" type="image/png" />
		<link rel="icon" href="<?= get_theme_file_uri('/images/komuhn.svg') ?>" type="image/svg+xml" />

		<!-- GOOGLE FONTS -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:slnt,wght@-10..0,100..900&display=swap" />

		<!-- CSS ANCHOR POSITIONING POLYFILL -->
		<script type="module">
			if (matchMedia('(min-width: 1008px)').matches && !('anchorName' in document.documentElement.style)) {
				// TODO
				const { default: polyfill } = await import('https://unpkg.com/@oddbird/css-anchor-positioning/dist/css-anchor-positioning-fn.js');
				// const { default: polyfill } = await import('http://maze/wordpress/wp-content/themes/komuhn.org/scripts/anchor-positioning-polyfill.js');

				await polyfill()
			}
		</script>

		<?php wp_head(); ?>
	</head>

	<body>
		<?php if (!is_front_page() && !is_404()): ?>

		<header>
			<a href="<?= home_url() ?>">
				<img alt="Komuhn" src="<?= get_theme_file_uri('/images/komuhn.svg') ?>" />
			</a>
		</header>

		<?php endif; ?>

		<main>
