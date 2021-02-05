<template>
  <VPopup id="sharing">
    <share-it text="BHosting Blog" :url="url" :height="600" :width="600" />
  </VPopup>
</template>

<script>
import VPopup from './VPopup'

export default {
  name: 'TheSocialsSharingPopup',
  components: {
    VPopup,
  },
  data() {
    return {
      url: this.$root.blogPostUrl,
    }
  }
}
</script>

<style lang="sass">
  .vue-share-it-wrapper
    max-width: 100%
    display: flex
    justify-content: center
</style>