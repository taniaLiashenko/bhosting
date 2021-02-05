<template>
  <VPopup id="login">
    <div class="login-popup">
      <h2 class="login-popup__title">Signin, please!</h2>

      <form class="login-popup__form">
        <p class="login-popup__subtitle">E-mail:</p>
        <input class="login-popup__input" type="text" id="email" name="email" v-model="email"/>

        <p class="login-popup__subtitle">Password:</p>
        <input class="login-popup__input" type="text" id="password" name="password" v-model="password"/>

        <button class="login-popup__button">Go</button>
      </form>

      <a class="login-popup__link" href="#">Signup</a>
    </div>
  </VPopup>
</template>

<script>
import VPopup from './VPopup';

export default {
  name: 'TheLoginPopup',
  components: {
    VPopup
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  mounted() {
    if (localStorage.email) {
      this.email = localStorage.email;
    }

    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },

  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    },

    password(newPassword) {
      localStorage.password = newPassword;
    }
  }
}
</script>

<style lang="sass">
  .login-popup
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px

    &__title
      margin-bottom: 20px
      font-size: 20px
      line-height: 1em
      color: $blue

    &__subtitle
      margin-bottom: 3px
      font-size: 15px
      line-height: 1em
      color: $blue

    &__form
      display: flex
      flex-direction: column
      align-items: flex-start
      width: 80%
      padding: 15px
      margin-bottom: 10px
      border: 3px solid $violet
      border-radius: 6px

    &__input
      width: 100%
      height: 30px
      margin-bottom: 15px
      padding: 5px
      border: 1px solid $blue
      border-radius: 3px

      &:focus
        border-color: $green

    &__button
      width: 50%
      height: 40px
      margin: 0 auto
      font-size: 15px
      line-height: 1em
      font-weight: bold
      color: #fff
      background-color: $violet
      border-radius: 3px
      transition: all 0.25s ease-out

      &:hover
        background-color: $green

    &__link
      color: $blue
      transition: color 0.25s ease-out

      &:hover
        color: $green
</style>