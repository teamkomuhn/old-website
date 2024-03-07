<?php
	get_header();

	while (have_posts()): the_post();
?>

<article>
	<header>
		<h1><?= get_the_title() ?></h1>

		<div>
			<b>#thread started by</b>
			<div>
				<img aria-hidden="true" src="<?= get_avatar_url(get_the_author_meta('ID')) ?>" />
				<div>
					<address><?= get_the_author_meta('display_name') ?></address>
					<time datetime="<?= get_the_date('c') ?>"><?= get_the_date('F j, Y') ?></time>
				</div>
			</div>
			<?php $comments_count = get_comment_count(get_the_ID())['approved'] ?>
			<b class="arrow-down"><?= $comments_count ?> <?= $comments_count === 1 ? 'response' : 'responses' ?></b>
		</div>
	</header>

	<section id="content">
		<?= get_the_content() ?>
	</section>

	<?php comments_template('/comments-thread.php'); ?>
</article>

<?php
	endwhile;
	
	get_footer();
?>
