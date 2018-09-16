<template lang="pug">
main#Contact-content
  .title
    h1 Contact
  form#contactForm
    h2.c-header DEAR BRYCE
    fieldset
    label My Name is
    input(type="text" placeholder="Name")
    fieldset
    label you can reach me at
    input(type="email" placeholder="Email")
    textarea(placeholder="myWord(I do Declare);")
    input(type="submit" value="send")

</template>
<script>
    export default {

    }
</script>
<style lang="sass" scoped>
@import '../sass/vars'

#Contact-content
    // background: url(../../dist/img/contact-bg.svg)
    display: flex
    align-content: center
    justify-content: center
#contactForm
    background: $black
    padding: 1em
    color: white
    max-width: 30%
    align-self: center
h2
    font-size: 3.5em
    text-transform: uppercase
fieldset
    border: 0
    padding: 0
    margin: 0
input,label
    display: inline
    width: 50%
    //padding: 1em
textarea
    border: 3px dashed white
    display: block
    width: 100%
    margin: 1em 0
    background: $black
    color: white
    &:focus
    outline: none
    &::placeholder
        opacity: 0
        transition: 0.1s ease-out
    &::placeholder
    color: white
input
    padding-left: 0
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
    color: white
input[type="submit"]
    display: block
    background: $magenta
    border: 0
    color: white
    text-transform: uppercase
    font-size: 1.5em
    width: 100%
</style>