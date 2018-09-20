<template lang="pug">
  //style.
    body{background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4200 4200'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:%23f90094;}.cls-2{fill:%23c70076;}.cls-3{fill:%23950059;}.cls-4{fill:%2364003b;}.cls-5{fill:%2332001e;}.cls-6{fill:%23012e26;}.cls-7{fill:%23025d4b;}.cls-8{fill:%23038b71;}.cls-9{fill:%2304ba96;}.cls-10{fill:%2305e8bc;}%3C/style%3E%3C/defs%3E%3Ctitle%3ESqFull%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cg id='sqFull'%3E%3Cg id='Top'%3E%3Cpolygon class='cls-1' points='1400 2800 0 4200 0 2100 0 1400 1400 2800'/%3E%3Cpolygon class='cls-2' points='1750 2450 1400 2800 0 1400 0 700 1750 2450'/%3E%3Cpolygon class='cls-3' points='2100 2100 1750 2450 0 700 0 0 2100 2100'/%3E%3Cpolygon class='cls-4' points='2450 1750 2100 2100 0 0 700 0 2450 1750'/%3E%3Cpolygon class='cls-5' points='2800 1400 2450 1750 700 0 1400 0 2800 1400'/%3E%3Cpolygon points='4200 0 2800 1400 1400 0 2100 0 4200 0'/%3E%3C/g%3E%3Cg id='Bottom'%3E%3Cpolygon points='2800 4200 2100 4200 0 4200 1400 2800 2800 4200'/%3E%3Cpolygon class='cls-6' points='3500 4200 2800 4200 1400 2800 1750 2450 3500 4200'/%3E%3Cpolygon class='cls-7' points='4200 4200 3500 4200 1750 2450 2100 2100 4200 4200'/%3E%3Cpolygon class='cls-8' points='4200 3500 4200 4200 2100 2100 2450 1750 4200 3500'/%3E%3Cpolygon class='cls-9' points='4200 2800 4200 3500 2450 1750 2800 1400 4200 2800'/%3E%3Cpolygon class='cls-10' points='4200 2100 4200 2800 2800 1400 4200 0 4200 2100'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");background-attachment: fixed;background-size: cover;background-position: center;}
  main#About
    #about-content
      .title
        h1 SEE WHAT YOU THINK
      .bio
        .socials
          a(href="/")
            | <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#05E8BC"/><path d="M31.2237 14.4783C31.2237 14.7203 31.2237 14.958 31.2237 15.2001C31.2237 22.5411 25.6535 31 15.4781 31C12.4722 31.0046 9.52866 30.1398 7 28.509C7.43688 28.5578 7.87621 28.5813 8.31579 28.5794C10.8139 28.589 13.2419 27.7515 15.2061 26.2028C14.0512 26.182 12.9316 25.7996 12.0037 25.1092C11.0758 24.4188 10.386 23.4548 10.0307 22.3518C10.376 22.4074 10.7249 22.4368 11.0746 22.4399C11.5659 22.4384 12.0552 22.3748 12.5307 22.2506C11.2777 21.9954 10.1513 21.3129 9.34303 20.3188C8.5347 19.3248 8.09425 18.0806 8.09649 16.7977V16.7272C8.86297 17.1562 9.71954 17.3974 10.5965 17.4314C9.42328 16.6447 8.59318 15.4387 8.27536 14.0591C7.95753 12.6796 8.1759 11.2304 8.88596 10.0068C10.2752 11.7225 12.0083 13.1263 13.9727 14.127C15.9372 15.1278 18.0892 15.7033 20.2895 15.8162C20.2028 15.3993 20.1587 14.9746 20.1579 14.5487C20.1599 13.4351 20.4951 12.3478 21.1202 11.4276C21.7453 10.5075 22.6314 9.79698 23.6637 9.38815C24.6959 8.97932 25.8268 8.89104 26.9096 9.13474C27.9925 9.37844 28.9775 9.9429 29.7368 10.7549C30.9737 10.5215 32.1608 10.0748 33.2456 9.43462C32.8371 10.7258 31.9711 11.8219 30.8114 12.5154C31.9121 12.3834 32.9869 12.0867 34 11.6352C33.2397 12.7321 32.3012 13.6932 31.2237 14.4783V14.4783Z" fill="white"/></svg>

          a(href="/")
            | <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#038B71"/>
            <path d="M12.3963 14.6583H12.3696C10.9232 14.6583 10 13.6123 10 12.3291C10 11.046 10.9632 10 12.4229 10C13.8827 10 14.8059 11.0077 14.8192 12.3291C14.8325 13.6506 13.8927 14.6583 12.3963 14.6583ZM14.5459 30H10.2466V16.4958H14.5426L14.5459 30ZM30 30H25.714V22.7755C25.714 20.9623 25.0908 19.7245 23.5411 19.7245C23.056 19.7229 22.5825 19.8796 22.1864 20.1727C21.7904 20.4658 21.4915 20.8807 21.3314 21.3598C21.2258 21.7163 21.1774 22.0886 21.1881 22.4616V29.993H16.9122C16.9655 17.7615 16.9122 16.4958 16.9122 16.4958H21.1948V18.4589H21.1681C21.5521 17.739 22.1198 17.1449 22.8077 16.7428C23.4957 16.3408 24.2769 16.1466 25.0642 16.182C27.8904 16.182 29.9967 18.1172 29.9967 22.2559L30 30Z" fill="white"/></svg>
          a(href="/")
            | <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#012E26"/><path d="M17.305 24.0967C17.305 25.1308 16.76 26.823 15.47 26.823C14.18 26.823 13.635 25.1308 13.635 24.0967C13.635 23.0627 14.18 21.3705 15.47 21.3705C16.76 21.3705 17.305 23.0627 17.305 24.0967V24.0967ZM32 21.5981C32 23.1765 31.84 24.8488 31.125 26.2985C29.23 30.0885 24.02 29.9994 20.29 29.9994C16.5 29.9994 10.98 30.133 9.01 26.2985C8.28 24.8637 8 23.1765 8 21.5981C8 19.525 8.695 17.5657 10.075 15.9775C9.815 15.1957 9.69 14.3744 9.69 13.5629C9.69 12.4992 9.935 11.9648 10.42 11C12.685 11 14.135 11.4453 15.86 12.7812C17.31 12.4398 18.8 12.2864 20.295 12.2864C21.645 12.2864 23.005 12.4299 24.315 12.7416C26.015 11.4206 27.465 11 29.705 11C30.195 11.9648 30.435 12.4992 30.435 13.5629C30.435 14.3744 30.305 15.1809 30.05 15.9478C31.425 17.5508 32 19.525 32 21.5981V21.5981ZM28.785 24.0967C28.785 21.9247 27.45 20.0099 25.11 20.0099C24.165 20.0099 23.26 20.1781 22.31 20.3068C21.565 20.4206 20.82 20.4651 20.055 20.4651C19.295 20.4651 18.55 20.4206 17.8 20.3068C16.865 20.1781 15.95 20.0099 15 20.0099C12.66 20.0099 11.325 21.9247 11.325 24.0967C11.325 28.4409 15.345 29.1088 18.845 29.1088H21.255C24.77 29.1088 28.785 28.4458 28.785 24.0967V24.0967ZM24.655 21.3705C23.365 21.3705 22.82 23.0627 22.82 24.0967C22.82 25.1308 23.365 26.823 24.655 26.823C25.945 26.823 26.49 25.1308 26.49 24.0967C26.49 23.0627 25.945 21.3705 24.655 21.3705Z" fill="white"/></svg>
        .blurb
          p Hi, I'm Bryce. I'm a graphic designer, front-end developer, illustrator, photographer and maker of other pretty things—one of those people who aren’t happy unless they’re learning something new and using what they know to make extraordinary things.

          p I believe design, coding, and engineering are all creative endeavors we must engage to solve the thorniest problems. While my contemporaries may talk of the need to narrowly specialize in a profession, they are misguided. A narrow skill-set might make them more categorizable, and perhaps easier to place in a job (for now). But the landscape re-shapes itself constantly. All skill and experience must be drawn on to find elegant and creative solutions—and the wider the knowledge terrain, the better the solution.

          p For example, my experience as a musician made video editing easier, allowing me to draw on my skills in timing, arrangement, and experimentation. The Animations I made in After Effects influenced my work designing user interfaces. See for yourself on this site. Feel free to shoot me an email if you'd like to work together or find something that inspires you.
      .mugshot
</template>
<script>
export default {}
</script>
<style lang="sass">
@import '../sass/vars'

// ABOUT PAGE
#About
  display: flex
  align-items: center
  justify-content: center
#about-content
  display: grid
  grid-template-columns: repeat(24, 50px)
  grid-template-rows: repeat(12, 75px)
.title
  grid-row: 2 / span 1
  grid-column: 1 / span 13
  z-index: 1
  h1
    font-size: 3.5em
    font-weight: 900
    text-transform: uppercase
    color: $black
    background: $magenta
    padding: 10px
    border: 10px solid white

.bio
  background: white
  padding: 1em
  grid-row: 3 / span 8
  grid-column: 2 / span 11
  z-index: 0

.socials
  padding-top: 4rem
  a
    margin-right: 1em
    text-decoration: none
  svg
    +sq(3em)

.mugshot
  width: 100%
  grid-row: 2 / span 10
  grid-column: 12 / span 13
  border: 10px solid white
  background-image: linear-gradient(180deg, #F90094 0%, #05E8BC 100%), url(../assets/Portrait.png)
  background-blend-mode: overlay, normal
  background-repeat: no-repeat
  background-size: cover
</style>
