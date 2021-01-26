<template>
  <!-- begin info -->
  <section class="info">
    <div class="info__image">
      <img class="info__photo" src="Static/img/image-3.jpg" alt="Young man"/>
    </div>
    <div class="info__content">
      <h2 class="info__title title title_left title_white">Web site builder</h2>
      <p class="info__text text text_white text_left">Website hosting services are basically the plot of internet land that your website storefront sits on. If you have a website, it need to be be on the web, these hosting services are the landlords that put up your site and keep it running.</p>
      <p class="info__text text text_white text_left">So your customer can access and see it when they type in your url. There are different types of hosting services that cater to  varying types of businesses. </p>
    </div>
  </section>
  <!-- end info -->
</template>

<style lang="sass" scoped>
  .info
    display: flex
    width: 100%
    min-height: 400px
    background: linear-gradient(to right, $blue 0%, $violet 100%)

    +md
      flex-direction: column
      align-items: center

    &__image
      width: 50%

      +md
        width: 100%

    &__photo
      width: 100%
      height: 100%
      object-fit: cover

      +bg
        object-fit: none
        object-position: 0 50%

      +md
        object-fit: cover

    &__content
      display: flex
      flex-direction: column
      justify-content: center
      max-width: 580px
      padding: 25px 20px 25px 115px

      +md
        width: 100%
        padding: 25px 20px
        align-items: center

    &__title
      margin-bottom: 25px

    &__text
      max-width: 470px
      margin-bottom: 23px

      +md
        width: 100%

      &:last-of-type
        margin-bottom: 0

</style>
