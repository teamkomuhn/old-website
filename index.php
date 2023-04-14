<?php get_header(null, [ 'styles' => [ '/styles.css' ] ]); ?>

<header>
    <h1>
        <img src="" alt="">
    </h1>
    <h2></h2>

    <!--Next: Update this section to be dynamic, as one for highlights, fetching a page/post/etc.-->
    <article class="fluency-in-care">
        <h2>
            <!--Fluency<br/>in <span id="care">care</span>-->
            <img src="<?=url('/images/fluency-in-care.png'); ?>" title="Fluency in care" alt="Fluency in care">
        </h2>

        <h3>Thriving organizations through empathy</h3>
      
        <p><strong>How we build capacity for care</strong> within our communities, organizations, teams, has a critical effect on how much we can participate, accomplish, and invest in.</p>
        <p>In this proposal, we are exploring ways towards more sustainable collaborations by understanding the value of being together.</p>

        <a class="button" href="#">Read the post</a>
        <a class="button" href="#">Learn more</a>

    </article>

</header>

<section class="related-posts">
    <h2>Recent posts ↓</h2>

    <article>
        <h3>title</h3>
        <h4>subtitle</h4>
        <div class="author"></div>
        <p>description</p>
        <img src="" alt="">
    </article>

</section>

<section class="about">

    <header>
        <h2>Jacks of all trades.<br/>Masters of some.</h2>

        <p><strong>This is an invitation</strong> to explore new and sometimes unexpected approaches to learning about - what we need - to be able to work well as a whole.</p>
    </header>

    <div>
        
    </div>

</section>

<?php get_footer(); ?>
