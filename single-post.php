<?php
	get_header();

	while (have_posts()): the_post();
?>

<article>
	<header>
		<?php
			$subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

			if (empty($subtitle)):
		?>

		<h1><?= get_the_title() ?></h1>

		<?php else: ?>

		<hgroup>
			<h1><?= get_the_title() ?></h1>
			<p><?= $subtitle ?></p>
		</hgroup>

		<?php endif; ?>

		<div class="author"><?= author() ?></div>
		<?= get_the_post_thumbnail() ?>
	</header>

	<section id="content"><?= get_the_content() ?></section>
	<section id="author" class="author"><?= author() ?></section>
	<?php comments_template(); ?>
</article>

<?php
	endwhile;

	get_footer();
?>
