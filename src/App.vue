<template lang="pug">
  #app
    .grid
      navigation
      div(style="position: relative")
        transition(appear name="slide")
          router-view(:key="$route.name" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0")
</template>
<script>
export default {

}
</script>
<style lang="sass">
@import './style'
.slide-enter-active, .slide-leave-active
  transition: all .8s ease
  opacity: 1
  position: absolute
  left: 0
  top: 0
  width: 100%
.slide-enter-active
  position: absolute
  transition-delay: .8s
.slide-enter, .slide-leave-to
  position: absolute
  transform: translateY(50px)
  opacity: 0
</style>
