<?php 
    declare(strict_types = 1);

    function url(string $url) {
        return wp_make_link_relative(get_template_directory_uri()) . $url;
    }
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <!-- <meta charset="UTF-8"> -->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <meta name="viewport" content="width=device-width">

        <title>Care</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,600&family=Inter:wght@400;700&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="<?= url('/styles.css'); ?>" />

        <script type="module" src="<?= url('/interaction.js'); ?>"></script>
    </head>
    
    <body>
        <nav>
            <a id="ok" href="/">OK</a>
        </nav>

        <main>
            <header>
                <div id="header-titles">
                    <h1>Fluency<br />in <span id="care">care</span></h1>

                    <h2>Thriving organizations through empathy</h2>
                </div>

                <div id="header-content">
                    <p><strong>How we build capacity for care</strong> within our communities, organizations, teams, has a critical effect on how much we can participate, accomplish, and invest in.</p>

                    <p>In this proposal, we are exploring ways towards more sustainable collaborations by understanding the value of being together.</p>
                </div>
            </header>

            <aside>
                <img arin-hidden="true" src="<?= url('/read-the-post.svg'); ?>">

                <p>Within many types of organizations — care — is often seen as something important, still, there's this uncertainty about its impact or how to put it into practice. How do we go about defining and manifesting it?</p>

                <a class="button" href="#">Read the post</a>
            </aside>

            <section id="learnings">
                <header class="side">
                    <h2>Learnings</h2>

                    <p>We've been signaling patterns where we recongnize opportunities for building processes and turning practicies, that facilitate participation fulfillment, and involvement.</p>
                </header>

                <ul class="cards">
                    <li><img aria-hidden="true" src="<?= url('/lightning.svg'); ?>" />Identify opportunities for raising capacity</li>
                    <li><img aria-hidden="true" src="..." />Recognize power imbalences, understand its cause, and learn to propose distribution</li>
                    <li><img aria-hidden="true" src="<?= url('/eye.svg'); ?>" />Enable practices that create awereness of positive habits and behaviors, and help detect obstacles to progress</li>
                    <li><img aria-hidden="true" src="..." />Facilitate activities that amplify strengths and consider everyone's needs</li>
                    <li><img aria-hidden="true" src="..." />Apply confilict as a device for supporting diversity</li>
                    <li><img aria-hidden="true" src="..." />Culture-in uncertain and complexity and tranform resistance into vulnerability and curiosity</li>
                </ul>
            </section>

            <section id="making-together">
                <header>
                    <div>
                        <h2>Why are we together?</h2>

                        <p><strong>How we build capacity for care</strong> within our communities, organizations, teams has a critical effect on how much we can participate, accomplish, and commit to.</p>
                    </div>

                    <div class="side">
                        <h3>Themes and topics</h3>
                
                        <p>We've been signaling patterns where we recongnize opportunities for building processes and turning practicies, that facilitate participation fulfillment, and involvement.</p>
                    </div>
                </header>

                <div>
                    <div class="cards">
                        <article>
                            <h4>Mapping needs</h4>

                            <p>Who we are changes how we are. Make visible the needs of An exercise to make visible the needs</p>

                            <p>outline everybody's needs and facilitate conversations</p>
                        </article>

                        <article>
                            <h4>Beyond rules</h4>

                            <p>What if we could organize and be without punishment and</p>
                        </article>

                        <article>
                            <h4>Bending time</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Rythym and routines</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Bending time</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Rythym and routines</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Bending time</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Rythym and routines</h4>

                            <p>Description</p>
                        </article>
                    </div>

                    <button type="button">Show more<span aria-hidden="true"> ↑</span></button>
                </div>
            </section>

            <section id="lets-play">
                <header>
                    <div>
                        <img src="...">
                        <h2>Let's play</h2>

                        <p><strong>How we build capacity for care</strong> within our communities, organizations, teams has a critical effect on how much we can participate, accomplish, and commit to.</p>
                    </div>

                    <div class="side">
                        <h3>Select</h3>

                        <p>We've been signaling patterns where we recongnize opportunities for building processes and turning practicies, that facilitate participation fulfillment, and involvement.</p>
                    </div>
                </header>

                <div>
                    <div class="cards">
                        <article>
                            <h4>Team as a service</h4>

                            <p>Long-term project</p>
                        </article>

                        <article>
                            <h4>Workshop series</h4>

                            <p>Description</p>
                        </article>

                        <article>
                            <h4>Design together</h4>

                            <p>Description</p>
                        </article>
                    </div>

                    <button type="button">Let's talk<span aria-hidden="true">  ↓</span></button>
                </div>
            </section>

            <section id="masters-of-care">
                <h2>Masters of care</h2>

                <p><strong>Always searching for</strong> deeper understanding, fairness, and better ways of making together. Is this you?</p>

                <ul>
                    <li><span>You're part of a <strong>team</strong> that wants to go the long haul and is looking for ways to create <strong>sustainable involvement</strong>.</span></li>
                    <li><span>You want to build a culture in your <strong>organization</strong> that enables people to be with uncertainty and <strong>tackle difficult issues</strong>.</span></li>
                    <li /><img src="<?= url('/hands-3.svg'); ?>');" /><span>You lead a <strong>community</strong> project that is seeking more <strong>investment</strong> from the participants.</span></li>
                    <li><span>You're always looking for self-improvement and want to learn more about <strong>fair and thriving collaborations</strong>.</span></li>
                </ul>
            </section>
        </main>
    </body>
</html>
