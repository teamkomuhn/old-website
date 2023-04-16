<?php get_header(null, [ 'styles' => [ '/styles.css' ] ]); ?>

<header>
    <h2>Collaboration is not about gluing together existing egos. It's about the ideas that never existed until after everyone entered the room.</h2>
</header>

<!-- TODO Update this section to be dynamic, as one for highlights, fetching a page/post/etc -->
<section id="recent-work">
    <h2><a class="arrow-down" href="#recent-work">Recent work</a></h2>

    <div>
        <h3>
            <img alt="Fluency in care" title="Fluency in care" src="<?= url('/images/fluency-in-care.png'); ?>" >
        </h3>

        <h4>Thriving organizations through empathy</h4>
    </div>
    
    <div>
        <p><strong>How we build capacity for care</strong> within our communities, organizations, teams, has a critical effect on how much we can participate, accomplish, and invest in.</p>

        <p>In this proposal, we are exploring ways towards more sustainable collaborations by understanding the value of being together.</p>

        <div class="button-group-horizontal">
            <a class="button" href="/fluency-in-care/proposal">Read the post</a>
            <a class="button" href="/fluency-in-care">Learn more</a>
        </div>
    </div>
</section>

<?php //GET POSTS
    $args = array(
        'post_type'         => array('post'),
        'category_name'     => 'post',
        'post_status'       => array('publish'),
        'posts_per_page'    => '10',
        'order'             => 'DESC',
        'orderby'           => 'date',
    );

    $ko_posts = new WP_Query( $args );
    if ( $ko_posts -> have_posts() ):
?>
    <section id="recent-posts">
        <h2><a class="arrow-down" href="#recent-posts">Recent posts ↓</a></h2>

            <div>
                <?php
                    while ( $ko_posts -> have_posts() ): $ko_posts -> the_post();
                ?>
                <article>
                    <?php
                        $post_image = get_the_post_thumbnail();
                        if ( !empty($post_image) ){ echo $post_image; }
                    ?>
                    <div>
                        <h3><?= get_the_title(); ?></h3>
                        <h4><?= get_post_meta(get_the_ID(), 'subtitle', true); ?></h4>


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
                        
                        <p><?= limit_characters(get_the_excerpt(), 150); ?></p>
                        <a class="arrow-right" href="<?= get_the_permalink(); ?>">Read more</a>
                    </div>              
                 </article>

                <?php endwhile; ?>

            </div>

            <button class="arrow-up">See more</button>
    </section>
    
<?php endif; wp_reset_postdata(); ?>

<section class="about">
    <header>
        <h2>Jacks of all trades.<br/>Masters of <strong>some</strong>.</h2>

        <p>We’re a multidisciplinary team working in the intersection of design, collaboration, and what-can-be.</p>
    </header>

    <div>
        <article>
            <img alt="Andréa" src="...">

            <p><strong>Andréa</strong> is making a case for <strong>Rotulama</strong> a site-specific artwork experiment aiming to grasp gentrification’s impact on small local businesses and their neighborhoods. A joint-project with Super Eclectic.</p>
        </article>

        <article>
            <img alt="Kako" src="...">

            <p><strong>Kako</strong> is organizing the next community meeting for <strong>RUA+</strong>, a participatory design exercise with the purpose of making the public spaces we inhabit more liveable and healthy.</p>
        </article>

        <article>
            <img alt="Pedro" src="..."> 

            <p><strong>Pedro</strong> is giving shape to our latest proposal — <strong>Fluency in care</strong> — an exploration of new and sometimes unexpected approaches, towards learning about what we need to be able to work well together.</p>
        </article>

        <article>
            <img alt="Riikka" src="..">

            <p><strong>Riikka</strong> is facilitating the conversations within a group of scientists that want to become a team and understand how they can take advantage of their capacities to create self-sustainability. </p>
        </article>

        <article>
            <img alt="Tita" src="...">

            <p><strong>Tita</strong> is laying out the content for <strong>Peniche - Treasure island</strong>, a book more than a book, a contribution towards this place, history, and community’s identity.</p>
        </article>
    </div>
</section>

<section id="partners-clients-collaborators">
    <header>
        <h2>Dance like nobody is watching, <strong>collaborate like everyone is</strong>.</h2>

        <p>We work with partners, clients, and collaborators across the world.</p>
    </header>

    <div>
        
    </div>
</section>

<?php get_footer(); ?>
