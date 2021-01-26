<template>
  <!-- begin feedback -->
  <section class="feedback">
    <div class="container">
      <div class="feedback__wrapper">
        <h2 class="feedback__title title">they are happy!</h2>
        <ul class="feedback__persons-list">
          <li class="feedback__item" v-for="item in feedbacks" :key="item.feedback">
            <div class="feedback__image">
              <img class="feedback__photo" :src="item.image" :alt="item.alt"/>
            </div>
          </li>
        </ul>

        <div class="feedback__info-list">
          <carousel :nav="false" :items="1" :dots="true" :loop="true">
            <div class="feedback__point" v-for="item in feedbacks" :key="item.alt">
              <div class="feedback__image feedback__image feedback__image_hidden">
                <img class="feedback__photo" :src="item.image" :alt="item.alt"/>
              </div>
              <span class="feedback__name">{{ item.name }}</span>
              <span class="feedback__position">{{ item.position }}</span>
              <img class="feedback__icon" src="Static/img/quote-linear.svg" alt="Icon"/>
              <p class="feedback__text">{{ item.feedback }}</p>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- end feedback -->
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: 'FeedbackBlock',
  components: {
    carousel
  },
  data() {
    return {
      feedbacks: [
        {
          image: 'Static/img/avatar-1.png',
          alt: 'Consumer',
          name: 'Addison Tylor',
          position: 'CEO at DMc',
          feedback: 'There is a dizzying array of web hosting providers competing for your business. How can you pinpoint	the best one? If you are looking for a reliable and affordable hosting company? This is the right place to start! I am happy with the Bhost, One of the best hosting.'
        },
        {
          image: 'Static/img/avatar-2.png',
          alt: 'Consumer2',
          name: 'Name',
          position: 'CEO at DMc',
          feedback: '2There is a dizzying array of web hosting providers competing for your business. How can you pinpoint	the best one? If you are looking for a reliable and affordable hosting company? This is the right place to start! I am happy with the Bhost, One of the best hosting.'
        },
        {
          image: 'Static/img/avatar-3.png',
          alt: 'Consumer3',
          name: 'Name',
          position: 'CEO at DMc',
          feedback: '3There is a dizzying array of web hosting providers competing for your business. How can you pinpoint	the best one? If you are looking for a reliable and affordable hosting company? This is the right place to start! I am happy with the Bhost, One of the best hosting.'
        },
        {
          image: 'Static/img/avatar-4.png',
          alt: 'Consumer4',
          name: 'Name',
          position: 'CEO at DMc',
          feedback: '4There is a dizzying array of web hosting providers competing for your business. How can you pinpoint	the best one? If you are looking for a reliable and affordable hosting company? This is the right place to start! I am happy with the Bhost, One of the best hosting.'
        },
        {
          image: 'Static/img/avatar-5.png',
          alt: 'Consumer5',
          name: 'Name',
          position: 'CEO at DMc',
          feedback: '5There is a dizzying array of web hosting providers competing for your business. How can you pinpoint	the best one? If you are looking for a reliable and affordable hosting company? This is the right place to start! I am happy with the Bhost, One of the best hosting.'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .feedback
    &__wrapper
      position: relative
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      min-height: 688px
      padding: 45px 0

    &__title
      margin-bottom: 30px

      +sm
        margin-bottom: 40px

    &__persons-list
      position: absolute
      top: 222px
      width: 900px
      height: 543px
      border-top: 2px dotted $light-grey
      border-radius: 100% 100% 0 0

      +md
        width: 713px

      +sm
        display: none

      &::after
        content: ""
        position: absolute
        top: 30px
        left: 30px
        width: 830px
        height: 517px
        border-top: 2px dotted $light-grey
        border-radius: 100% 100% 0 0

        +md
          width: 652px

    &__item
      z-index: 20
      position: absolute

      &:first-of-type
        bottom: 235px
        left: -23px

      &:nth-of-type(2)
        bottom: 419px
        left: 115px

        +md
          bottom: 432px

      &:nth-of-type(3)
        bottom: 488px
        left: 405px

        +md
          left: 317px

      &:nth-of-type(4)
        bottom: 419px
        right: 117px

        +md
          bottom: 432px

      &:nth-of-type(5)
        bottom: 235px
        right: -23px

    &__image
      width: 75px
      height: 75px
      border-radius: 50%
      overflow: hidden

      &_hidden
        display: none

        +sm
          display: block
          width: 90px
          height: 90px

    &__photo
      width: 100%
      height: 100%
      object-fit: cover

    &__info-list
      max-width: 1170px
      padding-top: 170px

      +sm
        padding-top: 30px

    &__point
      display: flex
      flex-direction: column
      align-items: center
      width: 600px
      margin: 0 auto

      +sm
        width: 100%

    &__name
      +OpenSansSemiBold
      font-size: 18px
      line-height: 1.3em
      text-align: center

    &__position
      margin-bottom: 40px
      text-align: center

    &__icon
      max-width: 30px

    &__text
      width: 100%
      padding-top: 27px
      font-size: 14px
      line-height: 2.14em
      font-style: italic
      color: $grey
      text-align: center

</style>