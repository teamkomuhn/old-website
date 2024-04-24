<?php get_header(); ?>

<header id="header">
	<h1>
		<img src="<?= get_theme_file_uri('/images/logo-ko-circle-purple.svg'); ?>" alt="Komuhn" title="Komuhn">
	</h1>

	<p>Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.</p>
</header>


<!-- TODO Update this section to be dynamic, as one for highlights, fetching a page/post/etc -->
<section id="recent-work">
	<h2 class="arrow-down">Recent work</h2>

	<article>
		<div>
			<h3>
				<img alt="Fluency in care" title="Fluency in care" src="<?= get_theme_file_uri('/images/logo-fluency-in-care-light.png'); ?>" >
			</h3>

			<h4>Thriving organizations through empathy</h4>
		</div>
		
		<div>
			<p><strong>How we build capacity for care</strong> within our communities, organizations, teams, has a critical effect on how much we can participate, accomplish, and invest in.</p>

			<p>In this proposal, we are exploring ways towards more sustainable collaborations by understanding the value of being together.</p>

			<div class="button-group">
				<a class="button" href="/posts/fluency-in-care">Read the post</a>
				<a class="button" href="/fluency-in-care">Learn more</a>
			</div>
		</div>
	</article>

</section>

<?php
	$the_query = new WP_Query([
		'category__not_in' => [ get_category_by_slug('log')->term_id ],
		'post_type' => ['post', 'thread'],
		'post_status' => 'publish',
		'posts_per_page'    => -1,
	]);

	if ($the_query -> have_posts()):
?>

<section id="recent-posts">
	<h2 class="arrow-down">Recent posts</h2>

	<div data-rows-mobile="4" data-items-desktop="5">
		<?php
			while ($the_query -> have_posts()): $the_query -> the_post();
		?>

		<article>
			<?php
				if (has_post_thumbnail()) {
					echo get_the_post_thumbnail();
				}
			?>

			<div>
				<h3><?= get_the_title(); ?></h3>

				<?php
					$post_subtitle = get_post_meta(get_the_ID(), 'subtitle', true);

					if (!empty($post_subtitle)): 
				?>
					<h4><?= $post_subtitle; ?></h4>
				<?php endif ?>


				<div class="author short">
					<img aria-hidden="true" src="<?= get_avatar_url( get_the_author_meta( 'ID' ) ); ?>" />

					<div>
						<address>
							<?= get_the_author_meta('first_name') . ' '. get_the_author_meta('last_name'); ?>
						</address>

						<time datetime="<?= get_the_date('c'); ?>">
							<?= get_the_date('F j, Y'); ?>
						</time>
					</div>
				</div>

				<p><?= get_the_excerpt() ?></p>
				<a class="arrow-right" href="<?= get_the_permalink(); ?>">Read more</a>
			</div>              
			</article>

		<?php endwhile; ?>
	</div>

	<button class="arrow-up see-more">See more</button>
</section>

<?php endif; wp_reset_postdata(); ?>

<section id="about">
	<header>
		<h2>Jacks of all trades.<br/>Masters of <strong>some</strong>.</h2>

		<p>We’re a multidisciplinary team working in the intersection of design, collaboration, and what-can-be.</p>
	</header>

	<div>
		<article>
			<img alt="Andréa" src="<?= get_theme_file_uri('/images/andrea.png'); ?>">

			<div>
				<p><strong>Andréa</strong> is making a case for <strong><a href="https://www.rotulama.com">Rotulama</a></strong> a site-specific artwork experiment aiming to grasp gentrification’s impact on small local businesses and their neighborhoods. A joint-project with <a href="https://www.supereclectic.team">Super Eclectic</a>.</p>
			</div>
		</article>

		<article>
			<img alt="Kako" src="<?= get_theme_file_uri('/images/kako.png'); ?>">

			<div>
				<p><strong>Kako</strong> is organizing the next community meeting for <strong><a href="https://www.ruamais.com">RUA+</a></strong>, a participatory design exercise with the purpose of making the public spaces we inhabit more liveable and healthy.</p>
			</div>
		</article>

		<article>
			<img alt="Pedro" src="<?= get_theme_file_uri('/images/pedro.png'); ?>"> 

			<div>
				<p><strong>Pedro</strong> is giving shape to our latest proposal — <strong><a href="/fluency-in-care">Fluency in care</a></strong> — an exploration of new and sometimes unexpected approaches, towards learning about what we need to be able to work well together.</p>
			</div>
		</article>

		<article>
			<img alt="Riikka" src="<?= get_theme_file_uri('/images/riikka.png'); ?>">

			<div>
				<p><strong>Riikka</strong> is facilitating the conversations within a group of scientists that want to become a team and understand how they can take advantage of their capacities to create self-sustainability.</p>
			</div>
		</article>

		<article>
			<img alt="Tita" src="<?= get_theme_file_uri('/images/tita.png'); ?>">

			<div>
				<p><strong>Tita</strong> is laying out the content for <strong><a href="https://ilhadotesouro.pt">Peniche — Treasure island</a></strong>, a book more than a book, a contribution towards this place, history, and community’s identity.</p>
			</div>
		</article>
	</div>
</section>

<section id="organizations">

	<header>
		<h2>Dance like nobody is watching, <strong>collaborate</strong> like everyone is.</h2>

		<p>We work with organizations of all types across the world.</p>
	</header>

	<div data-rows-mobile="4" data-rows-desktop="Infinity">
		<img src="<?= get_theme_file_uri('/images/logo-inecc.svg'); ?>" alt="INECC">
		<img src="<?= get_theme_file_uri('/images/logo-mindworks.svg'); ?>" alt="Mindworks">
		<img src="<?= get_theme_file_uri('/images/logo-smart-ocean.svg'); ?>" alt="Smart Ocean">
		<img src="<?= get_theme_file_uri('/images/logo-rua-mais.svg'); ?>" alt="RUA+">
		<img src="<?= get_theme_file_uri('/images/logo-tedx-peniche.svg'); ?>" alt="TEDx Peniche">
		<img src="<?= get_theme_file_uri('/images/logo-open-knowledge-finland.svg'); ?>" alt="Open Knowledge Finland">
		<img src="<?= get_theme_file_uri('/images/logo-largo.svg'); ?>" alt="Largo">
		<img src="<?= get_theme_file_uri('/images/logo-greenpeace.svg'); ?>" alt="Greenpeace">
		<img src="<?= get_theme_file_uri('/images/logo-cmp.svg'); ?>" alt="Câmara Municipal de Peniche">
		<img src="<?= get_theme_file_uri('/images/logo-docapesca.svg'); ?>" alt="Docapesca">
		<img src="<?= get_theme_file_uri('/images/logo-govint.svg'); ?>" alt="Govint">
		<img src="<?= get_theme_file_uri('/images/logo-iss.svg'); ?>" alt="ISS - Instituto da Segurança Social">
		<img src="<?= get_theme_file_uri('/images/logo-espaco-o.svg'); ?>" alt="Espaço Ó">
		<img src="<?= get_theme_file_uri('/images/logo-estm.svg'); ?>" alt="ESTM - IPL">
		<img src="<?= get_theme_file_uri('/images/logo-esad.svg'); ?>" alt="ESAD - IPL">
		<img src="<?= get_theme_file_uri('/images/logo-kaospilot.svg'); ?>" alt="Kaospilot">
		<img src="<?= get_theme_file_uri('/images/logo-r4l.svg'); ?>" alt="Reciclar para aprender">
		<img src="<?= get_theme_file_uri('/images/logo-twnd.svg'); ?>" alt="TWND">
		<img src="<?= get_theme_file_uri('/images/logo-seaentia.svg'); ?>" alt="Seaentia">
		<img src="<?= get_theme_file_uri('/images/logo-tggp.svg'); ?>" alt="TGGP">
	</div>
	
	<button class="arrow-up see-more">Show More</button>
</section>

<?php get_footer(); ?>
