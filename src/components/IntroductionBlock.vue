<template>
<!-- begin introduction -->
  <section class="introduction">
    <div class="container">
      <div class="introduction__wrapper">
        <div class="introduction__socials">
          <VSocialsBlock :socials="socialsIntro"/>
        </div>
        <div class="introduction__slider">
          <SliderStarted :slider-started-list="sliderStarted"/>
        </div>
      </div>
    </div>
  </section>
<!-- end introduction -->
</template>

<script>
import VSocialsBlock from './VSocialsBlock.vue'
import SliderStarted from './SliderStarted.vue'

export default {
  name: 'IntroductionBlock',
  components: {
    VSocialsBlock,
    SliderStarted
  },
  data() {
    return {
      socialsIntro: [
        {
          label: 'Twitter',
          link: '#',
          image: 'twitter'
        },
        {
          label: 'Facebook',
          link: '#',
          image: 'facebook'
        },
        {
          label: 'Linkedin',
          link: '#',
          image: 'linkedin'
        },
        {
          label: 'Skype',
          link: '#',
          image: 'skype'
        }
      ],

      sliderStarted: [
        {
          title: 'Build your web site with bhost',
          list: [
            {
              value: '40%',
              text: 'save money	more then 40%'
            },
            {
              value: '$1.3',
              text: 'starting at $1.45/<span class="slider-started__text slider-started__text_font">year</span>'
            },
            {
              text: 'Support 24/7 days',
              icon: 'support'
            }
          ],
          button: {
            text: 'Get started',
            link: '#'
          }
        },
        {
          title: 'Build your web site with bhost 222',
          list: [
            {
              value: '40%',
              text: 'save money	more then 40%'
            },
            {
              value: '$1.3',
              text: 'starting at $1.45/<span class="slider-started__text slider-started__text_font">year</span>'
            },
            {
              text: 'Support 24/7 days',
              icon: 'support'
            }
          ],
          button: {
            text: 'Get started',
            link: '#'
          }
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .introduction
    &__wrapper
      display: flex
      align-items: center
      min-height: 705px
      padding: 45px 0

      +sm
        flex-direction: column
        min-height: 620px

    &__socials
      margin-right: 40px

      +sm
        margin: 0 0 20px

    &__slider
      margin: 0 auto
</style>