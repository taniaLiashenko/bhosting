<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li class="tabs__item"
        :class="{'is-active': currentTab === tab}"
        v-for="tab in tabs" 
        :key="tab"
        >
        <button class="tabs__button" type="button" @click="currentTab = tab">{{ tab }}</button>
      </li>
    </ul>

    <ul class="tabs__content" v-for="item in tabsContent" :key="item.text">
      <div class="tabs__inner" :class="{'is-active': item.name === currentTab}" :name="item.data">
        <li class="tabs__point">
          <div class="tabs__info">
            <h3 class="tabs__subtitle">{{ item.subtitle }}</h3>
            <div class="tabs__text" v-html="item.text"></div>
          </div>
          <div class="tabs__image">
            <img class="tabs__pic" :src="item.image" :alt="item.alt"/>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabsBlock',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    tabsContent: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentTab: this.tabs[0],
    }
  }
}
</script>

<style lang="sass" scoped>
  .tabs
    $this: &

    &__list
      display: flex
      flex-wrap: wrap

      +sm
        flex-direction: column
        align-items: center
        width: 100%

    &__item
      margin-right: 2px

      &.is-active
        #{$this}__button
          cursor: text

      &:hover,
      &.is-active
        #{$this}__button
          color: $white
          background: linear-gradient(to right, $blue 10%, $violet 100%)

    &__button
      min-width: 167px
      padding: 20px
      +OpenSansSemiBold
      font-size: 15px
      line-height: 1.8em
      text-transform: uppercase
      word-break: break-all
      background: $bright-grey
      transition: background 0.25s ease-out

      +sm
        padding: 10px

    &__inner
      display: none
      max-width: 1014px

      &.is-active
        display: block

    &__point
      display: flex
      align-items: flex-start
      min-height: 447px
      padding: 40px 0

      +sm
        flex-direction: column
        align-items: center

    &__info
      width: 650px
      margin-right: 55px

      +bg
        width: 60%

      +sm
        display: flex
        flex-direction: column
        align-items: center
        width: 100%
        margin: 0 0 40px

    &__subtitle
      margin-bottom: 25px
      +OpenSansSemiBold
      font-size: 20px
      line-height: 1.4em

    &__text-item
      margin-bottom: 25px

      &:last-of-type
        margin-bottom: 0

    &__text
      +sm
        text-align: center

    &__image
      width: 340px
      height: 258px

      +bg
        width: 40%

      +sm
        width: 100%

    &__pic
      width: 100%
      height: 100%
      object-fit: contain

</style>