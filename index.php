<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <title>Komuhn</title>
    <meta name="description" content="Our new website">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--Favicon Default-->
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/Favicon-32x32.png"/>
    <!--Favicon Apple Touch Icon-->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/Favicon-apple-touch-icon-180x180.png">
    <!--Favicon Android, Chrome and Opera-->
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/manifest.json">
    <!--Favicon Safari-->
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/Favicon-16x16.svg">

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css">

</head>

<body <?php body_class(); ?>>

    <header class="main-header">
        <h1 class="logo">Komuhn</h1>
    </header>

    <section class="intro">
        <h1>We're making a new website*</h1>
        <p><em>*If you're looking for our old website you can find it here: <a href="https://komuhn.co/old/">https://komuhn.co/old/</a></em></p>

        <h2>Open design</h2>
        <p>We don't know how to do this. We really don't</p>

        <h4>How can you participate?</h4>

    </section>

    <hr>

    <section class="posts">
        <h2 class="section-title">Posts</h2>

        <article id="post-2022-02-25">
            <header>
                <h3>Outgrowing.</h3>
                <time datetime="2022-02-25">2022-02-25</time>
            </header>
            <p>Donec eu dignissim nibh. Praesent hendrerit lobortis arcu at volutpat. Quisque eu mi viverra, luctus augue non, luctus odio. Praesent quis tristique nibh, et tempor urna.</p>
            <a href="#">Read more -></a>
        </article>

        <article id="post-2022-02-26">
            <header>
                <h3>Another post</h3>
                <time datetime="2022-02-25">2022-02-25</time>
            </header>
            <p>Donec eu dignissim nibh. Praesent hendrerit lobortis arcu at volutpat. Quisque eu mi viverra, luctus augue non, luctus odio. Praesent quis tristique nibh, et tempor urna.</p>
            <a href="#">Read more -></a>
        </article>

    </section>

    <hr>

    <section class="log">
        <h2 class="section-title">Log</h2>

        <article id="log-2022-04-07">
            <header>
                <h3>Make it easier to read</h3>
                <time datetime="2022-04-07">2022-04-07</time>
            </header>
            <ul>
                <li>Make initial CSS styles for readability</li>
            </ul>
        </article>

        <article id="log-2022-03-15">
            <header>
                <h3>Customizing for the soul</h3>
                <time datetime="2022-03-15">2022-03-15</time>
            </header>
            <ul>
                <li>Add a favicon, one of those tiny little images decorating your browser tabs, so you can quickly identify your tabs content.</li>
            </ul>
        </article>

        <article id="log-2022-03-10">
            <header>
                <h3>Published this page 🎉</h3>
                <time datetime="2022-03-10">2022-03-10</time>
            </header>
            <ul>
                <li>Publish online</li>
                <li>Make a cute image for our own wordpress theme - komuhn-website-v2 (check <a href="https://github.com/teamkomuhn/komuhn-website-v2.git">GitHub repository</a>) <img src="<?php echo get_template_directory_uri(); ?>/screenshot.png" alt="komuhn-website-v2 wordpress theme" /></li>
                <li>Setup wordpress and new theme</li>
                <li>Organize old directories in our server > <a href="https://komuhn.co/old/">https://komuhn.co/old/</a></li>
            </ul>
        </article>

        <article id="log-2022-02-25">
            <header>
                <h3>Built this page ⚡</h3>
                <time datetime="2022-02-25">2022-02-25</time>
            </header>
            <ul>
                <li>Add Google analytics script</li>
                <li>Add initial content to page</li>
                <li>Create HTML, CSS files</li>
                <li>Create Figma file</li>
                <li>Create GitHub repository</li>
            </ul>
        </article>

    </section>

    <hr>

    <footer>
        <h2 class="section-title">About this website</h2>
        <ul>
            <li>Discussion on <a href="#">Tribe?</a></li>
            <li>Tasks on <a href="#">Trello</a></li>
            <li>Content on <a href="https://docs.google.com/document/d/11nrReF8hhR_bdICX_AEbbe_ZEzYlXQxKjl-Bg9If0uc/edit?usp=sharing">Google docs</a></li>
            <li>Design files on <a href="#">Figma</a></li>
            <li>Repository on <a href="https://github.com/teamkomuhn">GitHub</a></li>
            <li>Hosted on <a href="#">SiteGround</a></li>
        </ul>
    </footer>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JJN9Q36MB0"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JJN9Q36MB0');
    </script>

</body>

</html>
