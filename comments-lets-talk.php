<section id="lets-talk">
    <?php 
        $host_post = (get_posts([
            'name' => 'lets-talk'
        ]))[0];
        
        comments_form('Let’s talk!', 'Send', [], $host_post);
    ?>

    <ol>
        <?php list_comments(get_comments([ 'post_id' => $host_post->ID ])); ?>
    </ol>
</section>