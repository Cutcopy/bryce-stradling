<template lang="pug">
    main#Gallery(:style="{'background-image': gradient()}")
        #Work-grid
            - for (var x = 1; x < 20; x++)
                .work-item
                    span= [x]

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
</script>
<style lang="sass">
@import '../sass/vars'

#Gallery
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden
#Work-grid
  display: grid
  grid-template-rows: repeat(6, 100px)
  grid-template-columns: repeat(10, 100px)
  grid-gap: 20px
  transform: rotate(-45deg)
  .work-item
    border: 5px solid white
    display: flex
    align-items: center
    justify-content: center
    font-weight: bold
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
</style>
