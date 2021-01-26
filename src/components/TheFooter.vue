<template>
<!-- begin footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__heading">
          <div class="footer__info">
            <a class="footer__logo">
              <LogoItem :logo-image="logoImage"/>
            </a>
            <div class="footer__address">
              <span class="footer__address-item">Road No- 6, House- 25/A,</span>
              <span class="footer__address-item">Dreamland Tower,</span>
              <span class="footer__address-item">Mancity</span>
            </div>
            <div class="footer__follow">
              <span class="footer__text">Follow Us</span>
              <VSocialsBlock :row-direction="true" :socials="socialsFooter"/>
            </div>
          </div>

          <ul class="footer__list">
            <li class="footer__list-item" v-for="item in footerList" :key="item.title">
              <h5 class="footer__item-title">{{ item.title }}</h5>
              <ul class="footer__sublist">
                <li class="footer__point" :class="{'is-active': point.isActive}" v-for="point in item.menu" :key="point.name">
                  <a class="footer__link" :href="point.link" v-if="point.link" v-html="point.name"></a>
                  <p class="footer__link footer__link_unhover" v-else v-html="point.name"></p>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="footer__down">
          <span class="footer__copyright">&copy; 2017 Roy Design. All Rights Reserved </span>
          <ul class="footer__menu">
            <li class="footer__menu-item" v-for="item in footerMenu" :key="item">
              <a class="footer__menu-link" href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- end footer -->
</template>

<script>
import LogoItem from './LogoItem.vue'
import VSocialsBlock from './VSocialsBlock.vue'


export default {
  name: 'TheFooter',
  components: {
    LogoItem,
    VSocialsBlock
  },
  data() {
    return {
      logoImage: 'Static/img/logo-blue.png',

      socialsFooter: [
        {
          image: "facebook",
          label: "Page in Facebook",
          color: "blue",
          link: "#"
        },
        {
          image: "pinterest",
          label: "Page in Pinterest",
          color: "red",
          link: "#"
        },
        {
          image: "instagram",
          label: "Page in Instagram",
          color: "pink",
          link: "#"
        },
        {
          image: "twitter",
          label: "Page in Twitter",
          color: "light-blue",
          link: "#"
        },
        {
          image: "google-plus",
          label: "Page in Google-plus",
          color: "light-red",
          link: "#"
        }
      ],

      footerList: [
        {
          title: "Contact",
          menu: [
            {
              name: "Phone: +91 254 541 254",
              link: 'tel:+91254541254'
            },
            {
              name: "Fax : +44 161 999 8888"
            },
            {
              name: "Email: dreamland@dream.com",
              link: "mailto: dreamland@dream.com"
            }
          ]
        },
        {
          title: "Opening Hours",
          menu: [
            {
              name: 'Monday to Friday <span class="footer__time">8 am - 12 pm</span>'
            },
            {
              name: 'Saturday to Sunday <span class="footer__time">12 pm - 6 pm</span>'
            },
            {
              name: 'Open 24 Hours in Online'
            }
          ]
        },
        {
          title: "Important links",
          menu: [
            {
              name: "Home",
              isActive: true,
              link: "#"
            },
            {
              name: "Menu",
              link: "#"
            },
            {
              name: "About",
              link: "#"
            },
            {
              name: "Search Domain",
              link: "#"
            },
            {
              name: "Upcoming Event",
              link: "#"
            },
            {
              name: "Contact",
              link: "#"
            }
          ]
        },
        {
          title: "Help",
          menu: [
            {
              name: "Help center",
              link: "#"
            },
            {
              name: "Item support",
              link: "#"
            },
            {
              name: "Customer refunds",
              link: "#"
            }
          ]
        },
        {
          title: "Our Commuinity",
          menu: [
            {
              name: "Forums",
              link: "#"
            },
            {
              name: "Community hub",
              link: "#"
            },
            {
              name: "Meetup",
              link: "#"
            }
          ]
        },
        {
          title: "Company",
          menu: [
            {
              name: "Terms",
              link: "#"
            },
            {
              name: "Licenses",
              link: "#"
            },
            {
              name: "Become an affiliate",
              link: "#"
            }
          ]
        }
      ],

      footerMenu: [
        "About Bhost",
        "Privacy Policy",
        "Help Center",
        "Terms",
        "Site Map"
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .footer
    $this: &

    background-color:	$darker-blue

    &__wrapper
      padding-top: 65px

    &__heading
      display: flex
      padding-bottom: 55px
      border-bottom: 1px solid rgba(225, 225, 225, 0.1)

      +md
        flex-direction: column
        align-items: center

    &__info
      margin-right: 100px
      padding-left: 40px

      +md
        display: flex
        justify-content: space-between
        align-items: center
        width: 100%
        margin: 0 0 55px
        padding-left: 0

      +sm
        flex-direction: column

    &__logo
      margin-bottom: 20px

    &__address
      display: flex
      flex-direction: column
      margin-bottom: 50px
      font-size: 13px
      line-height: 1.8em
      color: $dirty-grey

      +md
        margin-bottom: 0

      +sm
        width: 100%
        margin-bottom: 50px
        align-items: center

    &__follow
      display: flex
      flex-direction: column
      justify-content: center

      +sm
        align-items: center

    &__text
      line-height: 1.4em
      color: $shine-grey

    &__socials
      margin-top: 25px

    &__list
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      width: 100%

      +sm
        flex-direction: column
        align-items: center

    &__list-item
      min-width: 255px
      margin: 0 0px 50px 0

      +md
        min-width: 217px
        margin: 0 16px 50px 0

      +sm
        min-width: 100%
        margin: 0 0 20px 0
        text-align: center

    &__item-title
      margin-bottom: 15px
      color: $shine-grey
      opacity: 0.7

    &__sublist
      display: flex
      flex-direction: column
      flex-wrap: wrap
      height: 150px

      +sm
        height: auto
        text-align: center

    &__point
      margin-bottom: 12px

      &.is-active
        #{$this}__link
          color: $blue
          cursor: text

    &__link
      font-size: 13px
      line-height: 1.6em
      color: $dirty-grey
      text-decoration: none
      transition: color 0.25s ease-out

      &:hover
        color: $blue

      &_unhover
        &:hover
          cursor: text
          color: $dirty-grey

    &__time
      margin-left: 22px

      +md
        margin-left: 12px

    &__down
      display: flex
      justify-content: space-between
      align-items: center
      padding: 45px 0

      +sm
        flex-direction: column

    &__copyright
      margin-right: 45px
      font-size: 14px
      color: rgba(255, 255, 255, 0.2)

      +sm
        margin: 0 0 20px
        text-align: center

    &__menu
      display: flex
      align-items: center
      flex-wrap: wrap
      margin-left: auto

      +sm
        justify-content: center

    &__menu-item
      margin-right: 38px

      &:last-of-type
        margin-right: 0

    &__menu-link
      font-size: 14px
      color: rgba(255, 255, 255, 0.2)
      text-decoration: none
      transition: color 0.25s ease-out

      &:hover
        color: rgba(255, 255, 255, 1)

</style>