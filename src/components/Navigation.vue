<template lang="pug">
    nav#main-nav
        .logo
          a(href="/")
            svg(id="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000")
              path(d="M961.4,269.52C987.1,244,1000,205.65,1000,154S987.1,63.52,961.4,38.23C935.8,12.74,903.3,0,864.2,0H499.9V134.88H864c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V307.9H864C903,307.8,935.6,295,961.4,269.52ZM864,481c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V654H864c39,0,71.5-12.69,97.2-38.18S999.8,552,999.8,500.3s-12.9-90.45-38.6-115.74q-38.55-38.23-97.2-38.18H499.9V481.21H864V481Z" transform="translate(0 -0.05)")
              path(d="M135.8,691.9c-3.6,0-6.4-2.2-8.2-6.6a30.72,30.72,0,0,1,0-25.19c1.8-4.4,4.6-6.6,8.2-6.6H461.7V518.79H135.8q-58.65,0-97.2,38.18C12.9,582.46,0,621.24,0,672.81s12.9,90.25,38.6,115.54c25.7,25.49,58.3,38.18,97.2,38.18l431.1-.2L461.7,691.9H135.8Z" transform="translate(0 -0.05)")
              path(d="M605.1,826.84L864,827c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V1000H864c39,0,71.5-12.69,97.2-38.18S999.8,898,999.8,846.33s-12.9-90.45-38.6-115.74Q922.65,692.35,864,692.4H499.9Z" transform="translate(0 -0.05)")
        .links
            router-link(to="/") Home
            router-link(to="/about") About
            router-link(to="/gallery") Work
            router-link(to="/contact") Contact
        .flair
          .switcher
             img(src="../assets/swap-arrows.svg" id="switcher" @click="swapColors")
          .pallete.bg
            input(id="pallete1" type="color" name="" v-model="colors.background")
          .pallete.fg
            input(id="pallete2" type="color" name="" v-model="colors.forground")
        .line
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters({
      colors: 'getColors',
      range: 'getRange',
    })
  },
  methods: {
    swapColors() {
      let background = this.colors.background;
      let forground = this.colors.forground;
      this.colors.background = forground;
      this.colors.forground = background;
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../sass/vars'
#main-nav
  height: 100vh
  padding-top: 1rem
  box-sizing: border-box
  display: flex
  align-items: center
  justify-content: space-between
  writing-mode: vertical-rl

.logo
  svg
    width: 50px
    fill: black
.links
  a
    text-decoration: none
    padding: 1em
.flair
  //height: 50vh
  position: relative

.line
  width: 1px
  height: 40vh
  background: $black
  margin: 0 auto
.switcher
  margin-left: 2em
.pallete
  +sq(2em)
  display: inline-block
  position: relative
.bg
  z-index: 2
.fg
  z-index: 1
.switcher
  position: absolute
  right: 65px
  img
    transform: rotate(270deg)
    position: absolute
    left: 12px
    top: 0px
    width: 15px
    cursor: pointer
#pallete1
  background: transparent
  position: relative
  border: none
  padding: 0
  height: 35px
  width: 30px
  appearance: none
  &:focus
    border: 0
    box-shadow: none
#pallete2
  background: transparent
  position: relative
  right: 1em
  bottom: 1em
  border: 0
  padding: 0
  height: 35px
  width: 30px
</style>