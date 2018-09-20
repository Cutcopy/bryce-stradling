<template lang="pug">
  main
    .content(:style="{'background': background}")
      .gradient(:style="{'background': gradient}")
        .hero
          .big-logo
            svg(id="big-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000")
              path(d="M961.4,269.52C987.1,244,1000,205.65,1000,154S987.1,63.52,961.4,38.23C935.8,12.74,903.3,0,864.2,0H499.9V134.88H864c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V307.9H864C903,307.8,935.6,295,961.4,269.52ZM864,481c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V654H864c39,0,71.5-12.69,97.2-38.18S999.8,552,999.8,500.3s-12.9-90.45-38.6-115.74q-38.55-38.23-97.2-38.18H499.9V481.21H864V481Z" transform="translate(0 -0.05)")
              path(d="M135.8,691.9c-3.6,0-6.4-2.2-8.2-6.6a30.72,30.72,0,0,1,0-25.19c1.8-4.4,4.6-6.6,8.2-6.6H461.7V518.79H135.8q-58.65,0-97.2,38.18C12.9,582.46,0,621.24,0,672.81s12.9,90.25,38.6,115.54c25.7,25.49,58.3,38.18,97.2,38.18l431.1-.2L461.7,691.9H135.8Z" transform="translate(0 -0.05)")
              path(d="M605.1,826.84L864,827c3.6,0,6.4,2.2,8.2,6.6a30.72,30.72,0,0,1,0,25.19c-1.8,4.4-4.6,6.6-8.2,6.6H499.9V1000H864c39,0,71.5-12.69,97.2-38.18S999.8,898,999.8,846.33s-12.9-90.45-38.6-115.74Q922.65,692.35,864,692.4H499.9Z" transform="translate(0 -0.05)")
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
  data () {
    return {
      percent: 0,
      background: null,
      gradient: null,
      timer: null
    }
  },
  computed: {
    ...mapGetters({
      colors: 'getColors'
    })
  },
  created () {
    this.background = this.colors.background
    this.gradient = `linear-gradient(45deg, transparent 100%, ${this.colors.background} 0%`
  },
  watch: {
    'colors.background': {
      handler: function () {
        this.background = this.colors.background
        this.percent = 0
        clearTimeout(wait)
        let wait = setTimeout(() => {
          clearInterval(this.timer)
          this.fadeBackground()
        }, 50)
      },
      deep: true
    }
  },
  methods: {
    fadeBackground () {
      this.percent = 0
      let duration = 0
      let lastFrame = +new Date()
      this.timer = setInterval(() => {
        let now = +new Date()
        let deltaT = now - lastFrame
        this.percent = Math.ceil(duration += 5 * deltaT / 50)
        lastFrame = now
        this.gradient = `linear-gradient(45deg, transparent ${this.percent}%, ${this.colors.backgroundOld}) ${100 - this.percent}%`

        if (this.percent > 99) {
          this.colors.backgroundOld = this.colors.background
          this.percent = 0
          clearInterval(this.timer)
        }
      }, 25)
    }
  }
}
</script>
<style lang="sass">
@import '../sass/vars'
.gradient
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
.content
  position: relative
  background: url(https://fillmurray.com/2000/2000)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  transition: .3s linear all
  width: 100%
  height: 100%
.hero
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25))
  text-transform: uppercase
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center
  color: white
  //mix-blend-mode: difference
.big-logo
  margin-top: 1em
  width: 100%
  svg
    fill: $black
    max-width: 33%
.ctas
  width: 100%
  display: flex
  justify-content: space-around
</style>
