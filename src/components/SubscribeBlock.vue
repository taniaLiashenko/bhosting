<template>
<!-- begin subscribe -->
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__wrapper">
        <div class="subscribe__inner subscribe__inner_column">
          <h2 class="subscribe__title title title_white">Subscribe our newsletter</h2>
          <span class="subscribe__subtitle">Singup for our news letter</span>
        </div>
        <div class="subscribe__inner">
          <form class="subscribe__form" action="#" method="post" novalidate="true" @submit="checkForm">
            <input class="subscribe__input" type="email" placeholder="Enter your email address" v-model="email"/>
            <input class="subscribe__button" type="submit" value="Subscribe" @blur="clearForm">
            <p class="subscribe__error" v-if="error">
              Please, enter the correct e-mail
            </p>
            <p class="subscribe__successful" v-if="successful">
              Your e-mail was successfully sent!
            </p>
          </form>
          <div class="subscribe__popup">
            <HelpItem></HelpItem>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- end subscribe -->
</template>

<script>
import HelpItem from './HelpItem.vue'

export default {
  name: 'SubscribeBlock',
  components: {
    HelpItem
  },

  data() {
    return {
      email: null,
      error: false,
      successful: false
    }
  },

  methods: {
    checkForm(e) {
      if (!this.validEmail(this.email)) {
        this.error = true;
      } else {
        this.error = false;
        this.successful = true;
      }

      e.preventDefault();
    },

    validEmail(email) {
      const re = /^[a-z0-9._-]+@[a-z0-9-]+(\.[a-z]{2,6})+(\.[a-z]{2,6})?$/i;
      return re.test(email);
    },

    clearForm() {
      this.email = null;
      this.error = false;
      this.successful = false;
    }
  }
}
</script>

<style lang="sass" scoped>
  .subscribe
    background: linear-gradient(to right top, $blue 0, $violet 100%)

    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: flex-start
      min-height: 412px
      padding: 45px 0

      +bg
        align-items: center

    &__title
      margin-bottom: 30px

    &__subtitle
      margin-bottom: 42px
      +OpenSansSemiBold
      font-size: 13px
      line-height: 1em
      color: $white
      text-transform: uppercase
      letter-spacing: 0.2em
      text-align: center

    &__inner
      display: flex
      align-items: flex-start

      +md
        flex-direction: column
        align-items: center
        width: 100%

      &_column
        flex-direction: column
        align-items: center
        width: 770px

        +md
          width: 100%

    &__form
      position: relative
      display: flex
      margin-right: 75px
      padding-left: 45px

      +md
        margin: 0 0 20px
        padding-left: 0

      +sm
        flex-direction: column
        align-items: center
        width: 100%

    &__input
      width: 483px
      height: 55px
      padding: 20px
      border-radius: 5px 0 0 5px

      &::-webkit-input-placeholder
        color: rgba(51, 51, 51, 0.7)

      &::-moz-placeholder
        color: rgba(51, 51, 51, 0.7)

      +bg
        width: 300px

      +md
        width: 483px

      +sm
        width: 100%
        margin-bottom: 10px
        border-radius: 5px

    &__button
      display: flex
      justify-content: center
      align-items: center
      min-width: 190px
      padding: 15px
      +OpenSansSemiBold
      font-size: 18px
      line-height: 1em
      color: $white
      text-transform: uppercase
      letter-spacing: 0.2em
      border-radius: 0 5px 5px 0
      background-color: $blue
      transition: transform 0.25s ease-out

      &:hover
        transform: scale(1.1)

      +sm
        width: 100%
        border-radius: 5px

    &__error
      position: absolute
      top: 60px
      color: yellow

    &__successful
      position: absolute
      top: 60px
      color: black

</style>