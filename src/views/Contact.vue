<template lang="pug">
  main#Contact
    contact-background
    #Contact-content
      .title
        h1(:style="{'background': colors.forground}") Contact
      form#contactForm
        h2.c-header DEAR BRYCE
        fieldset
          label My Name is
          input(type="text" placeholder="(Name)")
        fieldset
          label you can reach me at
          input(type="email" placeholder="(Email)")
        textarea(name="message", cols="30", rows="10" placeholder="myWord(I do Declare);")
        input(type="submit" value="send" :style="{'background': colors.forground}")

</template>
<script>
import { mapGetters } from 'vuex'
import ContactBackground from '../components/ContactBackground'
export default {
  components: {
    'contact-background': ContactBackground
  },
  computed: {
    ...mapGetters({
      colors: 'getColors'
    })
  }
}
</script>
<style lang="sass" scoped>
@import '../sass/vars'
#Contact
  background-size: cover
  height: 100vh
  display: flex
  align-content: center
  justify-content: center
#Contact-content
  align-self: center
  display: grid
  grid-template-columns: repeat(5, 100px)
  grid-template-rows: repeat(6, 100px)
  .title
    grid-row: 1 / span 1
    grid-column: 1 / span 4
    z-index: 1
    text-align: center
    h1
      font-weight: 900

#contactForm
  grid-row: 2 / span 6
  grid-column: 2 / span 5
  background: $black
  padding: 1em
  color: white
  h2
    font-weight: 300
    font-size: 3.5em
    margin-bottom: 0
    text-transform: uppercase
  fieldset
    border: 0
    padding: 1em 0
    margin: 0
  label
    margin-right: 1em
  input,label
    display: inline
    width: 50%
  textarea
    border: 3px dashed white
    display: block
    width: 100%
    margin: 0.5em 0
    padding: 1em
    background: $black
    color: white
    &:focus
      outline: none
      &::placeholder
        opacity: 0
        transition: 0.1s ease-out
    &::placeholder
      //color: white
      font-family: monospace
  input
    padding: 0.5em
    border: 0
    border-bottom: 3px dashed white
    background: $black
    color: white
    &:focus
      outline: none
      &::placeholder
        opacity: 0
        transition: 0.1s ease-out
    &::placeholder
      //color: white
      font-family: monospace
      text-align: center
  input[type="submit"]
    margin-top: 1em
    display: block
    background: $magenta
    border: 0
    color: white
    text-transform: uppercase
    font-size: 1.5em
    width: 100%
    transition: 0.1s ease-out

</style>
