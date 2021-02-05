<template>
  <div class="popup-block js-popup" @click="closePopup">
    <div class="popup-block__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CLASSES from '../consts.js';

export default {
  name: 'VPopup',

  methods: {
    closePopup(e) {
      if(e.target === e.currentTarget) {
        e.target.classList.remove(CLASSES.active);
        document.querySelector('html').classList.remove(CLASSES.overlayOpen);
      }
    }
  }
}
</script>

<style lang="sass">
  .popup-block
    z-index: 100
    display: none
    position: fixed
    overflow: auto
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.5)

    &.is-active
      display: block

    &__body
      position: absolute
      top: 50%
      left: 50%
      width: 100%
      max-width: 500px
      transform: translate(-50%, -50%)
      background: #fff
      border-radius: 15px
</style>