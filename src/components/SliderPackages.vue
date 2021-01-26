<template>
  <div class="slider-packages">
    <carousel :nav="true" :items="1" :dots="true" :loop="true">
      <div class="slider-packages__slide" v-for="slide in sliderPackages" :key="slide.title">
        <h3 class="slider-packages__title title title_smaller title_left title_font">{{ slide.title }}</h3>
        <div class="slider-packages__small-wrapper">
          <div class="slider-packages__inner">
            <div class="slider-packages__features">
              <span class="slider-packages__price">
                <img class="slider-packages__icon" :src="slide.icon" alt="Icon"/>
                <span class="slider-packages__amount">{{ slide.price }}</span>
              </span>
              <ul class="slider-packages__list">
                <li class="slider-packages__item" v-for="item in slide.points" :key="item">
                  <SvgIcon name="check"/>{{ item }}
                </li>
              </ul>
            </div>
            <p class="slider-packages__text text text_left">{{ slide.text }}</p>
            <a class="slider-packages__button button button_white" :href="slide.button.link">{{ slide.button.text }}</a>
          </div>

          <div class="slider-packages__image">
            <img class="slider-packages__photo" :src="slide.image" :alt="slide.alt"/>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import carousel from 'vue-owl-carousel'

export default {
  name: 'SliderPackages',
  components: {
    SvgIcon,
    carousel
  },
  props: {
    sliderPackages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  .slider-packages
    max-width: 1170px
    width: 100%

    &__title
      margin-bottom: 25px

    &__small-wrapper
      display: flex

      +sm
        flex-direction: column

    &__inner
      display: flex
      flex-direction: column
      align-items: flex-start
      width: 570px
      margin-right: auto

      +bg
        margin-right: 30px

      +sm
        align-items: center
        width: 100%
        margin: 0 0 20px

    &__features
      display: flex
      margin-bottom: 25px

      +sm
        flex-direction: column

    &__price
      position: relative
      margin-right: 65px

      +sm
        margin: 0 0 15px

    &__icon
      min-width: 140px

    &__amount
      position: absolute
      top: 47px
      left: 32px
      +OpenSansBold
      font-size: 40px
      line-height: 1em
      color: $white

      +sm
        top: 73px
        left: 50px

    &__list
      display: flex
      justify-content: space-between
      align-items: flex-start
      flex-wrap: wrap
      max-width: 370px

      +sm
        flex-direction: column
        align-items: center

    &__item
      display: flex
      align-items: center
      min-width: 175px

      .svg-icon
        min-width: 15px
        min-height: 15px
        margin-right: 10px
        fill: $light-grey

    &__text
      width: 100%
      margin-bottom: 45px

    &__image
      width: 500px
      height: 340px

      +md
        width: 360px

      +sm
        width: 100%

    &__photo
      width: 100%
      height: 100%
      object-fit: contain

    &__button
      margin-left: 10px
</style>