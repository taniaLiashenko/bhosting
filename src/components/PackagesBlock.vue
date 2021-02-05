<template>
  <!-- begin packages -->
  <section class="packages">
    <div class="container">
      <div class="packages__wrapper">
        <h2 class="packages__title title">Choose your package</h2>
        <p class="packages__text text">Find the Perfect Hosting Package for You, Get the Best Web Hosting Deals Today! Bhost is one of the best  web hosting services. Join Bhost now and get a free domain name!</p>
        <div class="packages__list">
          <SliderPackages :sliderPackages="sliderPackages"/>
        </div>
      </div>
    </div>
  </section>
  <!-- end advantages -->
</template>

<script>
import SliderPackages from './SliderPackages.vue'

export default {
  name: 'PackagesBlock',
  components: {
    SliderPackages
  },
  data() {
    return {
      sliderPackages: [
        {
          title: 'Startup Hosting Package',
          icon: '/assets/cloud-linear.svg',
          price: '$49',
          points: [
            'Website',
            'Unlimited Bandwidth',
            'Free Domain',
            '100 GB Storage',
            'For up to 10 Users',
            'Free Domainaa'
          ],
          text: 'Find the Perfect Hosting Package for You, Get the Best Web Hosting Deals Today! Bhost is one of the best	web hosting services. Join world best hosting Bhost now and get a free domain name!',
          button: {
            text: 'Get started',
            link: '#'
          },
          image: '/assets/image-2.png',
          alt: 'Computer'
        },
        {
          title: 'Startup Hosting Package 2',
          icon: '/assets/cloud-linear.svg',
          price: '$49',
          points: [
            '2Website',
            '2Unlimited Bandwidth',
            '2Free Domain',
            '2100 GB Storage',
            '2For up to 10 Users',
            '2Free Domainaa'
          ],
          text: 'Find the Perfect Hosting Package for You, Get the Best Web Hosting Deals Today! Bhost is one of the best	web hosting services. Join world best hosting Bhost now and get a free domain name!',
          button: {
            text: 'Get started',
            link: '#'
          },
          image: '/assets/image-2.png',
          alt: 'Computer'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .packages
    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      min-height: 835px
      padding: 45px 0

    &__title
      margin-bottom: 25px

    &__text
      max-width: 700px
      margin-bottom: 70px

</style>