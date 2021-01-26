<template>
  <!-- begin steps -->
  <section class="steps">
    <div class="container">
      <div class="steps__wrapper">
        <h2 class="steps__title title">How to build your website ?</h2>
        <p class="steps__text text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teor invidunt ut abore et dolore magnaLorem ipsum dolor sit amet, lorem ipsum dollar.</p>
        <ul class="steps__list">
          <li class="steps__item" :class="{'is-active': item.isActive}" v-for="item in steps" :key="item.title">
            <span class="steps__order">{{ item.order }}</span>
            <h3 class="steps__subtitle title title_smaller title_font">{{ item.title }}</h3>
            <p class="steps__subtext text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end steps -->
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          isActive: true,
          order: '1',
          title: 'Domain',
          text: 'Find the Perfect web Hosting Package for You, best	hosting services. Join now and get free domain !'
        },
        {
          order: '2',
          title: 'Hosting',
          text: 'Website hosting services are basically the plot of internet land that your website storefront sits on.'
        },
        {
          order: '3',
          title: 'Website',
          text: 'Customers can access and see it when they type your url.	different types of hosting services that cater to the varying types of '
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .steps
    $this: &

    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      min-height: 617px
      padding: 45px 0

    &__title
      margin-bottom: 25px

    &__text
      max-width: 680px
      margin-bottom: 70px

    &__list
      position: relative
      display: flex
      justify-content: space-between
      width: 100%

      +sm
        flex-direction: column

      &::after
        content: ""
        position: absolute
        top: 37px
        left: 100px
        width: 77%
        height: 1px
        border-bottom: 1px dotted $blue

        +md
          width: 74%

        +sm
          display: none

    &__item
      display: flex
      flex-direction: column
      align-items: center
      width: 265px
      margin-right: 10px

      &:last-of-type
        margin-right: 0

      +sm
        width: 100%
        margin: 0 0 40px

      &.is-active
        #{$this}__order
          color: $white
          background: linear-gradient(to right top, $blue 10%, $violet 100%)

    &__order
      z-index: 8
      display: flex
      align-items: center
      justify-content: center
      width: 70px
      height: 70px
      margin-bottom: 25px
      +RobotoSlabRegular
      font-size: 24px
      line-height: 1em
      color: $blue
      background-color: $white
      border: 1px dotted $blue
      border-radius: 50%

    &__subtitle
      margin-bottom: 25px
      word-break: break-all

    &__subtext
      width: 100%
</style>