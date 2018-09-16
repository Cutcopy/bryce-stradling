<template lang="pug">
  main.content(:style="{'background': colors.background}")
      .hero
        .big-logo
          //include ../../dist/img/logo_jet.svg
        .big-text
          h1 Bryce Stradling
          h2 Designer
      nav.ctas
        a.btn(href="#") Resume
        a.btn(href="#") Portfolio
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters({
      colors: 'getColors'
    })
  }
}
</script>
<style lang="sass">
@import '../sass/vars'
.content
  background: url(https://fillmurray.com/2000/2000)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.hero
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))
  text-transform: uppercase
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center
.big-logo
  fill: $black
  max-width: 33%
.ctas
  width: 100%
  display: flex
  justify-content: space-around
</style>
