<template>
  <a class="logo" href="#">
    <img class="logo__image" :src="logoImage" alt="Logo" width="70" height="48"/>
    <span class="logo__word">bhost</span>
  </a>
</template>

<script>
export default {
  name: 'LogoItem',
  props: {
    logoImage: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
  .logo
    display: flex
    align-items: center
    text-decoration: none
    transition: opacity 0.25s ease-out

    &:hover
      opacity: 0.5

    &__word
      +OpenSansSemiBold
      font-size: 30px
      color: $white
      text-transform: uppercase

      &_blue
        color: $blue
</style>