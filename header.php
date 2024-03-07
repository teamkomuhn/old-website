<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		
		<title><?= is_front_page()
			? get_bloginfo('name') .
				' - ' .
				strip_tags(get_bloginfo('description'))
			: get_the_title() . ' - ' . get_bloginfo('name') ?></title>
		<?php openGraph(); ?>

		<link rel="icon" href="<?= get_theme_file_uri(
			'/images/favicon.ico') ?>" sizes="any"><!-- 32×32 -->
		<link rel="icon" href="<?= get_theme_file_uri(
			'/images/logo-ko-circle-purple.svg') ?>" type="image/svg+xml">
		<link rel="apple-touch-icon" href="<?= get_theme_file_uri(
			'/images/favicon-apple-touch-icon.png') ?>"><!-- 180×180 -->
		<link rel="manifest" href="<?= get_theme_file_uri(
			'/images/site.webmanifest') ?>">

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		
		<link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

		<?php wp_head(); ?>
	</head>
	
	<body <?php if (is_singular('thread')):?> class="thread" <?php endif; ?>>
		<?php if (!is_front_page()): ?>
			<header>
				<nav>
					<a href="/" title="Komuhn">
						<img src="<?= get_theme_file_uri(
							'/images/logo-ko-circle-purple.svg'
						) ?>" alt="Komuhn">
					</a>
				</nav>
			</header>
		<?php endif; ?>

		<main>
