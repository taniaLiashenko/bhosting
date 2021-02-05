<template>
  <!-- begin advantages -->
  <section class="advantages">
    <div class="container">
      <div class="advantages__wrapper">
        <h2 class="advantages__title title">What makes our Wordpress hosting is Best?</h2>
        <p class="advantages__text text">We'll help you find the right blend of our technologies and service expertise to power your enterprise performance. Join Bhost now and get a free domain name!</p>
        <ul class="advantages__list">
          <li class="advantages__item" v-for="item in advantages" :key="item.title">
            <img class="advantages__icon" :src="item.image" alt="Icon"/>
            <h3 class="advantages__subtitle title title_small title_font">{{ item.title }}</h3>
            <p class="advantages__subtext text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end advantages -->
</template>

<script>
export default {
  name: 'AdvantagesBlock',
  data() {
    return {
      advantages: [
        {
          image: '/assets/display.svg',
          title: 'Instant Setup',
          text: 'Compress deployment time, protect high-value content,and speed up your site 5x on average.'
        },
        {
          image: '/assets/lock.svg',
          title: 'Account isolation',
          text: 'Compress deployment time, protect high-value content,and speed up your site 5x on average.'
        },
        {
          image: '/assets/share-linear.svg',
          title: 'Shared hosting plans',
          text: 'Compress deployment time, protect high-value content,and speed up your site 5x on average.'
        },
        {
          image: '/assets/support-linear.svg',
          title: 'Live chat support',
          text: 'Compress deployment time, protect high-value content,and speed up your site 5x on average.'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .advantages
    background-color: $bright-grey

    &__wrapper
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      min-height: 665px
      padding: 45px 0

    &__title
      margin-bottom: 30px

    &__text
      max-width: 630px
      margin-bottom: 65px

    &__list
      display: flex
      justify-content: center
      flex-wrap: wrap

      +sm
        flex-direction: column
        align-items: center

    &__item
      display: flex
      flex-direction: column
      align-items: center
      width: 288px
      margin-bottom: 15px
      padding: 30px 15px
      border-right: 1px dotted $blue

      &:last-of-type
        border-right: none

      +sm
        border-right: none
        border-bottom: 1px dotted $blue

        &:last-of-type
          border-bottom: none

    &__icon
      width: 60px
      margin-bottom: 25px

    &__subtitle
      margin-bottom: 20px

    &__subtext
      width: 100%
</style>