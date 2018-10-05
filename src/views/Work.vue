<template lang="pug">
    main#Work(:style="{'background-image': gradient()}")
        #Work-grid
            - for (var x = 1; x < 20; x++)
               router-link(to="/workitem").work-item
                  //span= [x]
                  span.back go
        h1.title WORK
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      background: null,
      forground: null,
    }
  },
  computed: {
    ...mapGetters({
      colors: 'getColors'
    })
  },
  watch: {
    colors: {
      handler: function() {
        this.background = this.colors.background
        this.forground = this.colors.forground
      },
      deep: true
    }
  },
  created() {
    this.background = this.colors.background
    this.forground = this.colors.forground
  },
  methods: {
    gradient() { return `linear-gradient(235.55deg, ${this.background} 0%, ${this.forground} 93.78%)`}
  }
}
export default {}
</script>
<style lang="sass">
@import '../sass/vars'

#Work
  background-color: #fff
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(360,960,469)'%3E%3Cstop offset='0' stop-color='%23f90094'/%3E%3Cstop offset='1' stop-color='%2305e8bc'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='470' height='391.7' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.11'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")
  background-attachment: fixed
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  position: relative
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden
  .title
    //align-self: center
    width: 100%
    //background: url(../assets/Subtle-Prism.svg)
    //-webkit-background-clip: text
    //mix-blend-mode: multiply
    writing-mode: vertical-lr
    text-align: center
    position: absolute
    right: 0
    z-index: 0
    font-size: calc(20vw - 100px)
    margin: 0
    padding-top: 1rem
    color: rgba(white, 0.01)
    background-clip: text
    //-moz-text-fill-color: #fff
    //-webkit-text-fill-color: #fff
    -moz-text-stroke-color: #fff
    -webkit-text-stroke-color: #fff
    -moz-text-stroke-width: 10px
    -webkit-text-stroke-width: 2px
    //opacity: 0.4

#Work-grid
  z-index: 1
  display: grid
  grid-template-rows: repeat(6, 100px)
  grid-template-columns: repeat(10, 100px)
  grid-gap: 20px
  transform: rotate(-45deg)
  .work-item
    background: linear-gradient(235.55deg, rgba($magenta, 0.5) 0%, rgba($mint, 0.5) 93.78%), url(http://fillmurray.com/200/200)
    background-size: cover
    color: white
    text-decoration: none
    border: 5px solid white
    display: flex
    align-items: center
    justify-content: center
    font-weight: bold
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)
    transform-style: preserve-3d
    &:hover
      transform: rotateY(180deg)
      //transform: scale(1.5) translateZ(0)
      //box-shadow: 0px 0px 25px rgba(#000, 0.8)
    &:nth-child(1)
      grid-row: 2/ span 1
      grid-column: 1 / span 1
    &:nth-child(2)
      grid-row: 3 / span 1
      grid-column: 1 / span 1
    &:nth-child(3)
      grid-row: 1 / span 2
      grid-column: 2 / span 2
    &:nth-child(4)
      grid-row: 3 / span 1
      grid-column: 2 / span 1
    &:nth-child(5)
      grid-row: 3 / span 1
      grid-column: 3 / span 1
    &:nth-child(6)
      grid-row: 1 / span 1
      grid-column: 4 / span 1
    &:nth-child(7)
      grid-row: 2 / span 1
      grid-column: 4 / span 1
    &:nth-child(8)
      grid-row: 3 / span 1
      grid-column: 4 / span 1
    &:nth-child(9)
      grid-row: 4 / span 2
      grid-column: 4 / span 2
    &:nth-child(10)
      grid-row: 1 / span 2
      grid-column: 5 / span 2
    &:nth-child(11)
      grid-row: 3 / span 1
      grid-column: 5 / span 1
    &:nth-child(12)
      grid-row: 3 / span 1
      grid-column: 6 / span 1
    &:nth-child(13)
      grid-row: 3 / span 1
      grid-column: 7 / span 1
    &:nth-child(14)
      grid-row: 4 / span 1
      grid-column: 6 / span 1
    &:nth-child(15)
      grid-row: 5 / span 1
      grid-column: 6 / span 1
    &:nth-child(16)
      grid-row: 4 / span 2
      grid-column: 7 / span 2
    &:nth-child(17)
      grid-row: 3 / span 1
      grid-column: 8 / span 1
    &:nth-child(18)
      grid-row: 3 / span 1
      grid-column: 9 / span 1
    &:nth-child(19)
      grid-row: 4 / span 1
      grid-column: 9 / span 1
  .back
    color: white
    font-size: 2em
    backface-visibility: hidden
    transform: rotateY(180deg)
</style>
