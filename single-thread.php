<?php
	get_header();

	while (have_posts()): the_post();
?>

<article>
	<header>
		<?php
			$subtitle = get_post_meta(get_the_ID(), 'subtitle', true);
			$comments_count = get_comment_count(get_the_ID())['approved'];

			if (empty($subtitle)):
		?>

		<h1><?= get_the_title() ?></h1>

		<?php else: ?>

		<hgroup>
			<h1><?= get_the_title() ?></h1>
			<p><?= $subtitle ?></p>
		</hgroup>

		<?php endif; ?>

		<div>
			<div>
				<span>#thread started by</span>
				<div class="author"><?= author() ?></div>
			</div>

			<h2 class="arrow-down">
				<a href="#comments">
					<?= $comments_count ?> <?= $comments_count === 1 ? 'response' : 'responses' ?>
				</a>
			</h2>
		</div>
	</header>

	<section id="content"><?= get_the_content() ?></section>
	<?php comments_template('/comments-thread.php'); ?>
</article>

<?php
	endwhile;

	get_footer();
?>
