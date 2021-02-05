<template>
<!-- begin contacts -->
  <ul class="contacts">
    <li class="contacts__point" v-for="contact in contacts" :key="contact.image">
      <a class="contacts__link" :href="contact.link" @click="setAction($event, contact)">
        <SvgIcon :name="contact.image"/>
        <span class="contacts__text">{{ contact.text }}</span>
      </a>
    </li>
  </ul>
<!-- end introduction -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import { openPopup } from '@/utils.js'

export default {
  name: 'ContactsBlock',
  components: {
    SvgIcon
  },
  data() {
    return {
      id: 'chat',
      contacts: [
        {
          link: '#',
          id: 'chat',
          image: 'message',
          text: 'Live Chat',
          action: true
        },
        {
          link: 'tel:+91254878547',
          image: 'phone',
          text: '+91 254 878 547'
        },
        {
          link: 'mailto:yourmail@info.com',
          image: 'envelope',
          text: 'yourmail@info.com'
        }
      ],
    }
  },

  methods: {
    setAction(e, contact) {
      if(contact.action) {
        openPopup(e, contact.id);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .contacts
    $this: &

    display: flex
    flex-wrap: wrap

    +sm
      flex-direction: column

    &__point
      margin-right: 40px

      +sm
        margin-bottom: 7px

    &__link
      display: flex
      align-items: center
      text-decoration: none

      &:hover
        #{$this}__text
          color: $blue

        .svg-icon
          fill: $blue

      .svg-icon
        margin-right: 12px
        fill: $white
        transition: fill 0.25s ease-out

    &__text
      font-size: 12px
      line-height: 1em
      color: $white
      transition: color 0.25s ease-out
</style>
