<template lang="pug">
    main
        #about-content
        .title
            h1 SEE WHAT YOU THINK
        .bio
            ul.socials
            li
                a(href="#") linkedin
            li
                a(href="#") Twitter
            li
                a(href="#") Github
            .blurb
            p Hi, I'm Bryce. I'm a graphic designer, front-end developer, illustrator, photographer and maker of other pretty things—one of those people who aren’t happy unless they’re learning something new and using what they know to make extraordinary things.

            p I believe design, coding, and engineering are all creative endeavors we must engage to solve the thorniest problems. While my contemporaries may talk of the need to narrowly specialize in a profession, they are misguided. A narrow skill-set might make them more categorizable, and perhaps easier to place in a job (for now). But the landscape re-shapes itself constantly. All skill and experience must be drawn on to find elegant and creative solutions—and the wider the knowledge terrain, the better the solution.

            p For example, my experience as a musician made video editing easier, allowing me to draw on my skills in timing, arrangement, and experimentation. The Animations I made in After Effects influenced my work designing user interfaces. See for yourself on this site. Feel free to shoot me an email if you'd like to work together or find something that inspires you.
        .mugshot
            img(src="http://fillmurray.com/200/200")
</template>
<script>
    export default {

    }
</script>
<style lang="sass">
@import '../sass/vars'
#about-content
  display: grid

</style>