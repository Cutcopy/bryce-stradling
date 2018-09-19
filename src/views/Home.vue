<template lang="pug">
  main.content(:style="{'background': background}")
    div.gradient(:style="{'background': gradient}")
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
  data() {
    return {
      percent: 0,
      background: '#00ffc2',
      gradient: 'linear-gradient(45deg, transparent 100%, #00ffc2 0%',
      timer: null,
    }
  },
  computed: {
    ...mapGetters({
      colors: 'getColors',
    })
  },
  watch: {
    'colors.background': {
      handler: function(){
        this.background = this.colors.background;
        this.percent = 0;
        clearTimeout(wait);
        let wait = setTimeout(() => {
          clearInterval( this.timer );
          this.fadeBackground();
      }, 50)
      }, deep: true
    }
  },
  methods: {
    fadeBackground(){
      this.percent = 0;
      let duration = 0;
      let lastFrame = +new Date;
      this.timer = setInterval(() => {
        let now = +new Date;
        let deltaT = now - lastFrame;
        this.percent = Math.ceil( duration += 5 * deltaT / 50 );
        lastFrame = now;
        this.gradient = `linear-gradient(45deg, transparent ${this.percent}%, ${this.colors.backgroundOld}) ${100 - this.percent}%`;
  
        if ( this.percent > 99 ) {
          this.colors.backgroundOld = this.colors.background;
          this.percent = 0;
          clearInterval( this.timer );
        }
      }, 25);
    },
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
