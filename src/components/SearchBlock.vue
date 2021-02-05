<template>
  <!-- begin search -->
  <section class="search">
    <div class="container">
      <div class="search__wrapper">
        <h2 class="search__title title title_white">Find your domain name</h2>
        <p class="search__text">Starting From &#36;1.65 Per Year!</p>
        <form class="search__form" action="#" method="get">
          <p class="search__success" v-if="success">{{ successMessage }}</p>
          <p class="search__error" v-else>{{ errorMessage }}</p>
          <div class="search__inner">
            <div class="search__body">
              <SvgIcon name="search"/>
              <input class="search__input" 
                type="text" 
                name="search" 
                id="search" 
                placeholder="test.com"
                v-model="text"
                @blur="clearResult"/>
            </div>
            <button class="search__button" type="submit" @click="startSearch">Search</button>
          </div>
          <ul class="search__list">
            <li class="search__list-item" v-for="item in searchCheckboxes" :key="item.name">
              <input class="search__checkbox" type="radio" name="domain" :id="item.name" :value="item.name" :checked="item.checked" @input="selectedItem = item.name"/>
              <label class="search__label" :for="item.name">{{ item.label }}</label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
  <!-- end search -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'SearchBlock',
  components: {
    SvgIcon
  },
  data() {
    return {
      text: '',
      selectedItem: 'com',
      success: false,
      successMessage: '',
      errorMessage: '',
      searchCheckboxes: [
        {
          name: 'com',
          label: '.com / $3',
          checked: true
        },
        {
          name: 'org',
          label: '.org / $2'
        },
        {
          name: 'net',
          label: '.net / $2'
        },
        {
          name: 'edu',
          label: '.edu/ $2'
        }
      ],
      domainsList: ['com', 'org', 'net', 'edu'],
      freeDomains: [
        ['test.com', 'test2.com', 'test3.com'],
        ['test.org', 'test2.org', 'test3.org'],
        ['test.net', 'test2.net', 'test3.net'],
        ['test.edu', 'test2.edu', 'test3.edu']
      ]
    }
  },

  methods: {
    checkSelected() {
      this.selected = !this.selected;
    },

    startSearch(e) {
      e.preventDefault();

      if(!this.text) {
        this.success = false;
        this.errorMessage = 'Enter your domain name, please.';
      } else {
        this.checkDomain();
      }
    },

    checkDomain() {
      if(this.text.indexOf(this.selectedItem) !== -1) {
        const index = this.domainsList.indexOf(this.selectedItem);
        if(this.freeDomains[index].indexOf(this.text) !== -1) {
          this.success = true;
          this.successMessage = 'This domain name is FREE!';
        } else {
          this.success = false;
          this.errorMessage = 'This domain name is not available! Try another name, please.';
        }
      } else {
        this.success = false;
        this.errorMessage = `Sorry, but such type of domain doesn't exist`;
      }
    },

    clearResult() {
      this.errorMessage = '';
      this.successMessage = '';
    }
  }
}
</script>

<style lang="sass" scoped>
  .search
    $this: &

    width: 100%
    background-image: url("/assets/background-2.jpg")
    background-repeat: no-repeat
    background-size: 100% 100%
    object-fit: cover

    &__wrapper
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      padding: 45px 0
      min-height: 465px

    &__title
      margin-bottom: 25px

    &__text
      margin-bottom: 50px
      font-size: 16px
      line-height: 1.5em
      color: $white

    &__form
      display: flex
      flex-direction: column
      align-items: center

    &__inner
      position: relative
      margin-bottom: 30px

      +sm
        display: flex
        flex-direction: column

    &__body
      display: flex
      align-items: center
      justify-content: center
      width: 574px
      height: 64px
      border-radius: 30px
      background: linear-gradient(to right top, $blue 60%, $green 100%)

      +sm
        width: 100%

      .svg-icon
        position: absolute
        left: 30px
        top: 25px
        width: 15px
        height: 17px
        fill: $light-grey

    &__input
      width: 570px
      height: 60px
      padding: 0 145px 0 55px
      border-radius: 30px

      +sm
        width: 98%

    &__button
      position: absolute
      right: 10px
      top: 6px
      display: flex
      align-items: center
      justify-content: center
      min-width: 125px
      min-height: 43px
      padding: 15px
      +OpenSansSemiBold
      line-height: 1.6em
      color: $white
      text-transform: uppercase
      letter-spacing: 0.1em
      border-radius: 25px
      background: linear-gradient(to right, $blue 10%, $violet 100%)
      transition: transform 0.25s ease-out

      &:hover
        transform: scale(1.1)

      +sm
        position: relative
        right: 0

    &__list
      display: flex
      flex-wrap: wrap

      +sm
        justify-content: center

    &__list-item
      position: relative
      display: flex
      align-items: center
      margin-right: 45px

      &:last-of-type
        margin-right: 0

      +sm
        margin: 0 15px 15px 0

    &__checkbox
      opacity: 0
      margin-right: 10px

      &:checked
        &+#{$this}__label
          &::after
            background-image: url('/assets/check.svg')
            background-repeat: no-repeat

    &__label
      position: relative
      color: $white
      line-height: 1em

      &::after
        content: ""
        position: absolute
        bottom: 0
        left: -25px
        width: 15px
        height: 15px
        border: 1px solid $blue
        background-color: transparent

    &__success,
    &__error
      margin-bottom: 20px
      font-size: 17px
      line-height: 1em

    &__success
      color: yellow

    &__error
      color: red
</style>