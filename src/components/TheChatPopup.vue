<template>
  <VPopup id="chat">
    <BasicVueChat/>
  </VPopup>
</template>

<script>
import VPopup from './VPopup';
import BasicVueChat from 'basic-vue-chat';

export default {
  name: 'TheChatPopup',
  components: {
    VPopup,
    BasicVueChat
  }
}
</script>