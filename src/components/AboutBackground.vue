<template lang="pug">
.background
  svg(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4200 4200')
    g(id='Layer_2' data-name='Layer 2')
      g(id='Layer_1-2' data-name='Layer 1')
        g(id='sqFull')
          g(id='Top')
            polygon(:style="{'fill': backgroundColor(0)}" points='1400 2800 0 4200 0 2100 0 1400 1400 2800')
            polygon(:style="{'fill': backgroundColor(10)}" points='1750 2450 1400 2800 0 1400 0 700 1750 2450')
            polygon(:style="{'fill': backgroundColor(20)}" points='2100 2100 1750 2450 0 700 0 0 2100 2100')
            polygon(:style="{'fill': backgroundColor(30)}" points='2450 1750 2100 2100 0 0 700 0 2450 1750')
            polygon(:style="{'fill': backgroundColor(40)}" points='2800 1400 2450 1750 700 0 1400 0 2800 1400')
            polygon(points='4200 0 2800 1400 1400 0 2100 0 4200 0')
          g(id='Bottom')
            polygon(points='2800 4200 2100 4200 0 4200 1400 2800 2800 4200')
            polygon(:style="{'fill': forgroundColor(0)}" points='3500 4200 2800 4200 1400 2800 1750 2450 3500 4200')
            polygon(:style="{'fill': forgroundColor(10)}" points='4200 4200 3500 4200 1750 2450 2100 2100 4200 4200')
            polygon(:style="{'fill': forgroundColor(20)}" points='4200 3500 4200 4200 2100 2100 2450 1750 4200 3500')
            polygon(:style="{'fill': forgroundColor(30)}" points='4200 2800 4200 3500 2450 1750 2800 1400 4200 2800')
            polygon(:style="{'fill': forgroundColor(40)}" points='4200 2100 4200 2800 2800 1400 4200 0 4200 2100')
</template>
<script>
import { mapGetters } from 'vuex'
import tinyColor from 'tinycolor2'
export default {
  computed: {
    ...mapGetters({
      colors: 'getColors'
    })
  },
  methods: {
    forgroundColor (amount) {
      return tinyColor(this.colors.forground).darken(amount).toString()
    },
    backgroundColor (amount) {
      return tinyColor(this.colors.background).darken(amount).toString()
    }
  }
}
</script>

<style lang="sass" scoped>
.background
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: -100
  overflow: hidden
  background-attachment: fixed;background-size: cover;background-position: center
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  svg
    width: 100%
    g
      width: 100%
      polygon
        width: 100%
        transition: .3s ease all
</style>
