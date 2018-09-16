<template lang="pug">
  #app
    .grid
      navigation
      router-view(:key="$route.name")
</template>

<style lang="sass">
@import './style'
</style>
