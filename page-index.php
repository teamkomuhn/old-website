<?php get_header(); ?>

<hgroup>
	<h1>
		<img alt="Komuhn" src="<?= get_theme_file_uri('/images/komuhn.svg') ?>" />
	</h1>

	<p>Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.</p>
</hgroup>

<section id="recent-work">
	<h2 class="arrow-down">Recent work</h2>

	<article>
		<hgroup>
			<h3>
				<img alt="Fluency in care" src="<?= get_theme_file_uri('/images/fluency-in-care-light.svg') ?>" />
			</h3>

			<p>Thriving organizations through empathy</p>
		</hgroup>

		<div>
			<p><strong>How we build capacity for care</strong> within our communities, organizations, teams, has a critical effect on how much we can participate, accomplish, and invest in.</p>
			<p>In this proposal, we are exploring ways towards more sustainable collaborations by understanding the value of being together.</p>

			<div>
				<a class="button" href="<?= home_url('/posts/fluency-in-care') ?>">Read the post</a>
				<a class="button" href="<?= home_url('/fluency-in-care') ?>">Learn more</a>
			</div>
		</div>
	</article>
</section>

<?php
	$the_query = new WP_Query([
		'category__not_in' => [get_category_by_slug('log') -> term_id],
		'post_type' => ['post', 'thread'],
		'post_status' => 'publish',
		'posts_per_page' => -1,
	]);

	if ($the_query -> have_posts()):
?>

<section id="recent-posts">
	<h2 class="arrow-down">Recent posts</h2>

	<div data-rows-mobile="4" data-items-desktop="5">
		<?php while ($the_query -> have_posts()): $the_query -> the_post(); ?>

		<article>
			<?= get_the_post_thumbnail() ?>

			<div>
				<?php
					$subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

					if (empty($subtitle)):
				?>

				<h3><?= get_the_title() ?></h3>

				<?php else: ?>

				<hgroup>
					<h3><?= get_the_title() ?></h3>
					<p><?= $subtitle ?></p>
				</hgroup>

				<?php endif; ?>

				<div class="author"><?= author() ?></div>
				<p><?= get_the_excerpt() ?></p>
				<a class="arrow-right" href="<?= get_the_permalink() ?>">Read more</a>
			</div>
		</article>

		<?php endwhile; ?>
	</div>

	<button class="see-more">See more</button>
</section>

<?php endif; wp_reset_postdata(); ?>

<section id="team">
	<header>
		<h2>Jacks of all trades.<br/>Masters of <strong>some</strong>.</h2>
		<p>We’re a multidisciplinary team working in the intersection of design, collaboration, and what-can-be.</p>
	</header>

	<div>
		<article>
			<img aria-hidden="true" src="<?= get_theme_file_uri('/images/team/andrea.png'); ?>" />
			<p><strong>Andréa</strong> is making a case for <strong><a href="https://www.rotulama.com">Rotulama</a></strong> a site-specific artwork experiment aiming to grasp gentrification’s impact on small local businesses and their neighborhoods. A joint-project with <a href="https://www.supereclectic.team">Super Eclectic</a>.</p>
		</article>

		<article>
			<img aria-hidden="true" src="<?= get_theme_file_uri('/images/team/kako.png'); ?>" />
			<p><strong>Kako</strong> is organizing the next community meeting for <strong><a href="https://www.ruamais.com">RUA+</a></strong>, a participatory design exercise with the purpose of making the public spaces we inhabit more liveable and healthy.</p>
		</article>

		<article>
			<img aria-hidden="true" src="<?= get_theme_file_uri('/images/team/pedro.png'); ?>" />
			<p><strong>Pedro</strong> is giving shape to our latest proposal — <strong><a href="<?= home_url('/fluency-in-care') ?>">Fluency in care</a></strong> — an exploration of new and sometimes unexpected approaches, towards learning about what we need to be able to work well together.</p>
		</article>

		<article>
			<img aria-hidden="true" src="<?= get_theme_file_uri('/images/team/riikka.png'); ?>" />
			<p><strong>Riikka</strong> is facilitating the conversations within a group of scientists that want to become a team and understand how they can take advantage of their capacities to create self-sustainability.</p>
		</article>

		<article>
			<img aria-hidden="true" src="<?= get_theme_file_uri('/images/team/tita.png'); ?>" />
			<p><strong>Tita</strong> is laying out the content for <strong><a href="https://ilhadotesouro.pt">Peniche — Treasure island</a></strong>, a book more than a book, a contribution towards this place, history, and community’s identity.</p>
		</article>
	</div>
</section>

<section id="organizations">
	<header>
		<h2>Dance like nobody is watching, <strong>collaborate</strong> like everyone is.</h2>
		<p>We work with organizations of all types across the world.</p>
	</header>

	<div data-rows-mobile="4" data-rows-desktop="Infinity">
		<img alt="INECC" src="<?= get_theme_file_uri('/images/logos/inecc.svg'); ?>" />
		<img alt="Mindworks" src="<?= get_theme_file_uri('/images/logos/mindworks.svg'); ?>" />
		<img alt="Smart Ocean" src="<?= get_theme_file_uri('/images/logos/smart-ocean.svg'); ?>" />
		<img alt="RUA+" src="<?= get_theme_file_uri('/images/logos/rua-mais.svg'); ?>" />
		<img alt="TEDx Peniche" src="<?= get_theme_file_uri('/images/logos/tedx-peniche.svg'); ?>" />
		<img alt="Open Knowledge Finland" src="<?= get_theme_file_uri('/images/logos/open-knowledge-finland.svg'); ?>" />
		<img alt="Largo" src="<?= get_theme_file_uri('/images/logos/largo.svg'); ?>" />
		<img alt="Greenpeace" src="<?= get_theme_file_uri('/images/logos/greenpeace.svg'); ?>" />
		<img alt="Câmara Municipal de Peniche" src="<?= get_theme_file_uri('/images/logos/cmp.svg'); ?>" />
		<img alt="Docapesca" src="<?= get_theme_file_uri('/images/logos/docapesca.svg'); ?>" />
		<img alt="Govint" src="<?= get_theme_file_uri('/images/logos/govint.svg'); ?>" />
		<img alt="ISS - Instituto da Segurança Social" src="<?= get_theme_file_uri('/images/logos/iss.svg'); ?>" />
		<img alt="Espaço Ó" src="<?= get_theme_file_uri('/images/logos/espaco-o.svg'); ?>" />
		<img alt="ESTM - IPL" src="<?= get_theme_file_uri('/images/logos/estm.svg'); ?>" />
		<img alt="ESAD - IPL" src="<?= get_theme_file_uri('/images/logos/esad.svg'); ?>" />
		<img alt="Kaospilot" src="<?= get_theme_file_uri('/images/logos/kaospilot.svg'); ?>" />
		<img alt="Reciclar para Aprender" src="<?= get_theme_file_uri('/images/logos/r4l.svg'); ?>" />
		<img alt="TWND" src="<?= get_theme_file_uri('/images/logos/twnd.svg'); ?>" />
		<img alt="SEAentia" src="<?= get_theme_file_uri('/images/logos/seaentia.svg'); ?>" />
		<img alt="TGGP" src="<?= get_theme_file_uri('/images/logos/tggp.svg'); ?>" />
	</div>

	<button class="see-more">See more</button>
</section>

<?php get_footer(); ?>
