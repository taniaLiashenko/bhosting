<template>
<!-- begin header -->
  <header class="header">
    <div class="container container_border">
      <div class="header__heading">
        <div class="header__contacts">
          <ContactsBlock></ContactsBlock>
        </div>
        <ul class="header__login">
          <li class="header__login-item" v-for="item in login" :key="item.image" @click="openLogin($event, item)">
            <a class="header__link" :class="item.color" :href="item.link" :aria-label="item.arialabel">
              <SvgIcon :name="item.image"/>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="header__down">
        <div class="header__logo">
          <LogoItem :logo-image="logoImage"/>
        </div>
        <button class="header__burger" type="button" @click="toggleMobMenu">
          <SvgIcon name="lines"/>
        </button>
        <nav class="header__menu" v-show="mobMenuOpen">
          <button class="header__close" type="button" @click="toggleMobMenu">
            <SvgIcon name="close"/>
          </button>
          <ul class="header__menu-list">
            <li class="header__menu-item" :class="item.status" v-for="item in menu" :key="item.name">
              <a class="header__menu-link" :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
<!-- end header -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import ContactsBlock from './ContactsBlock.vue'
import LogoItem from './LogoItem.vue'
import { openPopup } from '@/utils.js'

export default {
  name: 'TheHeader',
  components: {
    SvgIcon,
    ContactsBlock,
    LogoItem
  },
  data() {
    return {
      mobMenuOpen: false,
      contacts: [
        {
          link: '#',
          image: 'message',
          text: 'Live Chat'
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

      login: [
        {
          link: '#',
          image: 'user',
          arialabel: 'Go to the profile',
          color: 'header__link_white',
          action: true,
          id: 'login'
        }
      ],

      menu: [
        {
          link: '#',
          name: 'Home',
          status: 'is-active'
        },
        {
          link: '#',
          name: 'Hosting',
          status: ''
        },
        {
          link: '#',
          name: 'Services',
          status: ''
        },
        {
          link: '#',
          name: 'Pricing',
          status: ''
        },
        {
          link: '#',
          name: 'Contact',
          status: ''
        }
      ],

      logoImage: '/assets/logo.png'
    }
  },

  methods: {
    openLogin(e, item) {
      if(item.action) {
        openPopup(e, item.id);
      }
    },

    toggleMobMenu() {
      this.mobMenuOpen = !this.mobMenuOpen;
    }
  }
}
</script>

<style lang="sass" scoped>
  .header
    $this: &

    &__heading
      display: flex
      align-items: center
      width: 100%
      padding: 18px 0

    &__contacts
      margin-right: auto

    &__login
      display: flex
      flex-wrap: wrap

    &__login-item
      margin-right: 14px

      &:last-of-type
        margin-right: 0

    &__link
      display: flex
      align-items: center
      justify-content: center
      width: 28px
      height: 28px
      border-radius: 50px
      transition: transform 0.25s ease-out

      &:hover
        transform: scale(1.2)

      &_white
        background-color: $white

        .svg-icon
          fill: $blue
          stroke: $blue

    &__down
      position: relative
      display: flex
      align-items: center
      padding: 14px 0

    &__logo
      margin-right: 40px

      +sm
        margin-right: auto

    &__menu
      margin-left: auto

      &.is-hidden
        +sm
          display: none

      +sm
        z-index: 10
        position: absolute
        top: 0
        width: 100%
        padding: 15px 10px 10px
        background: linear-gradient(to right, $blue 0%, $violet 100%)
        box-shadow: 0 0 10px $white

    &__menu-list
      display: flex
      align-items: center
      flex-wrap: wrap

      +sm
        flex-direction: column
        align-items: center

    &__menu-item
      margin-right: 45px
      font-size: 14px
      text-transform: uppercase

      &:last-of-type
        margin-right: 0

      +sm
        margin: 0 0 15px

      &.is-active
        #{$this}__menu-link
          color: $blue
          cursor: text

    &__menu-link
      color: $white
      text-decoration: none
      transition: color 0.25s ease-out

      &:hover
        color: $blue

    &__close,
    &__burger
      display: none
      background-color: transparent

      +sm
        display: block

      .svg-icon
        width: 100%
        height: 100%

        &--lines
          fill: $blue

        &--close
          fill: $white

    &__burger
      width: 35px
      height: 35px

    &__close
      position: absolute
      top: 7px
      right: 7px
      width: 20px
      height: 20px
</style>