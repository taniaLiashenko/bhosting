<template>
  <!-- begin experience -->
  <section class="experience">
    <div class="container">
      <div class="experience__wrapper">
        <div class="experience__inner">
          <h2 class="experience__title title title_smaller title_left">Experienced we are</h2>
          <p class="experience__text text text_left">Without the best web hosting, your ability to run a successful website is going to be seriously hindered. There is a dizzying array of web hosting providers competing for your business.</p>
          <p class="experience__text text text_left">We are experienced, last 15 years we lead the world in hosting service. If you need any hosting services? We are eagerly wating for you.</p>
          <ul class="experience__list">
            <li class="experience__item" v-for="item in experiences" :key="item.info">
              <div class="experience__item-icon" :class="setIconColor(item.color)">
                <SvgIcon :name="item.image"/>
              </div>
              <p class="experience__item-text">
                <span class="experience__info">{{ item.info }}</span>
                <span class="experience__value">{{ item.value }}</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="experience__image">
          <img class="experience__photo" src="/assets/image-1.jpg" alt="A man with the team"/>
        </div>
      </div>
    </div>
  </section>
<!-- end experience -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'ExperienceBlock',
  components: {
    SvgIcon
  },
  data() {
    return {
      experiences: [
        {
          image: 'circle',
          info: 'Website hosted',
          value: '90000+',
          color: 'black'
        },
        {
          image: 'circle',
          info: 'Domain registered',
          value: '150000+',
          color: 'blue'
        },
        {
          image: 'user',
          info: 'Happy customer',
          value: '49000+',
          color: 'violet'
        },
        {
          image: 'coins',
          info: 'Data transferred',
          value: '80542+',
          color: 'green'
        }
      ]
    }
  },
  methods: {
    setIconColor(color) {
      return `experience__item-icon_${color}`;
    }
  }
}
</script>

<style lang="sass" scoped>
  .experience
    &__wrapper
      display: flex
      align-items: center
      min-height: 612px
      padding: 45px 0

      +md
        flex-direction: column

    &__inner
      max-width: 540px
      margin-right: 100px

      +md
        max-width: 100%
        margin-right: 0

    &__title
      margin-bottom: 23px

      +md
        text-align: center

    &__text
      margin-bottom: 20px

    &__list
      display: flex
      align-items: center
      justify-content: space-between
      flex-wrap: wrap
      padding: 20px 0

      +sm
        flex-direction: column

    &__item
      display: flex
      align-items: center
      min-width: 245px
      margin-bottom: 25px

    &__item-icon
      display: flex
      align-items: center
      justify-content: center
      min-width: 50px
      min-height: 50px
      border-radius: 2px

      &_black
        background-color: $black

      &_blue
        background-color: $blue

      &_violet
        background-color: $violet

      &_green
        background-color: $green

      .svg-icon
        fill: $white

        &--circle
          width: 20px
          height: 20px

        &--user
          width: 20px
          height: 20px

        &--coins
          width: 30px
          height: 40px

    &__item-text
      display: flex
      flex-direction: column
      align-items: center
      margin-left: 20px
      text-align: center

      +sm
        align-items: flex-start
        text-align: left

    &__info
      +OpenSansBold
      font-size: 16px
      line-height: 1.4em
      color: $dark-grey
      text-transform: uppercase

    &__value
      +OpenSansSemiBold
      line-height: 1.5em
      color: $grey

    &__image
      width: 500px
      height: 375px

    &__photo
      width: 100%
      max-width: 500px
      height: 100%
      object-fit: cover
</style>