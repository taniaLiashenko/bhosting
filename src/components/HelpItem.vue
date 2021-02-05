<template>
  <div class="help-item">
    <div class="help-item__icon"><SvgIcon name="phone"/></div>
    <span class="help-item__title">Need help?</span>
    <span class="help-item__subtitle">Call us!</span>
    <a class="help-item__tel" href="tel:+91254754785">+91 254 754 785</a>
    <button @click="initOpenChat" class="help-item__button button button_font" type="button">Live chat</button>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import { openPopup } from '@/utils.js'

export default {
  name: 'HelpItem',
  components: {
    SvgIcon
  },

  data() {
    return {
      id: 'chat'
    }
  },

  methods: {
    initOpenChat(e) {
      openPopup(e, this.id);
    }
  }
}
</script>

<style lang="sass" scoped>
  .help-item
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 370px
    min-height: 385px
    margin-bottom: -205px
    padding: 30px
    background-color: $white
    border-radius: 5px
    box-shadow: 0 5px 10px $bright-grey

    +md
      margin-bottom: 0

    +sm
      width: 100%

    &__icon
      display: flex
      justify-content: center
      align-items: center
      width: 55px
      height: 55px
      margin-bottom: 20px
      border-radius: 50%
      background-color: $blue

      .svg-icon
        width: 25px
        height: 25px
        fill: $white

    &__title
      margin-bottom: 15px
      +OpenSansSemiBold
      font-size: 30px
      line-height: 1em
      text-transform: uppercase
      text-align: center

    &__subtitle
      margin-bottom: 25px
      +OpenSansSemiBold
      font-size: 24px
      line-height: 1em
      text-transform: uppercase
      text-align: center

    &__tel
      margin-bottom: 40px
      +OpenSansSemiBold
      font-size: 24px
      line-height: 1em
      color: $black
      text-decoration: none
</style>
