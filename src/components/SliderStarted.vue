<template>
  <div class="slider-started">
    <carousel :nav="true" :items="1" :dots="false" :loop="true">
      <div class="slider-started__slide" v-for="slide in sliderStartedList" :key="slide.title">
        <h2 class="slider-started__title title title_white title_big">{{ slide.title }}</h2>
        <ul class="slider-started__list" v-if="slide.list">
          <li class="slider-started__point" v-for="point in slide.list" :key="point.text">
            <span class="slider-started__value" :class="{'slider-started__value_padding': point.icon}">
              {{ point.value }}
              <SvgIcon v-if="point.icon" :name="point.icon"/>
            </span>
            <span class="slider-started__text" v-html="point.text"></span>
          </li>
        </ul>
        <a class="slider-started__button button" :href="slide.button.link">{{ slide.button.text }}</a>
      </div>
    </carousel>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import carousel from 'vue-owl-carousel'

export default {
  name: 'SliderStarted',
  components: {
    SvgIcon,
    carousel
  },
  data() {
    return {

    }
  },
  props: {
    sliderStartedList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  .slider-started
    max-width: 945px

    &__slide
      display: flex
      flex-direction: column
      align-items: center

    &__title
      margin-bottom: 25px
      +OpenSansBold
      font-size: 42px
      line-height: 1.4em
      color: $white
      text-transform: uppercase

      +xs
        font-size: 32px

    &__list
      display: flex
      flex-wrap: wrap
      margin-bottom: 30px
      padding: 15px 0

      +sm
        flex-direction: column
        margin-bottom: 0

    &__point
      position: relative
      display: flex
      flex-direction: column
      align-items: center
      width: 110px
      margin: 0 110px 25px 0

      +sm
        width: 94px
        margin-right: 5px

      &:last-of-type
        margin-right: 0

      &::after
        z-index: 2
        content: ""
        position: absolute
        top: -15px
        left: 10px
        width: 90px
        height: 105px
        background-image: url('/assets/background-point.png')
        background-repeat: no-repeat

        +sm
          left: 2px

    &__value
      z-index: 3
      display: flex
      align-items: center
      justify-content: center
      margin-bottom: 45px
      +OpenSansBold
      font-size: 30px
      line-height: 2.3em
      color: $white

      &_padding
        padding: 20px 0

      .icon
        fill: $white

    &__text
      width: 100%
      +OpenSansExtraBold
      font-size: 12px
      line-height: 1.7em
      color: $white
      text-align: center
      text-transform: uppercase

      &_font
        +OpenSansRegular
        text-transform: none
</style>
