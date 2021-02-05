<template>
  <!-- begin statistics -->
    <section class="statistics">
      <div class="container">
        <div class="statistics__wrapper">
          <ul class="statistics__list">
            <li class="statistics__item" v-for="item in statistics" :key="item.text">
              <div class="statistics__image">
                <SvgIcon :name="item.iconFirst"/>
                <div class="statistics__icon">
                  <SvgIcon :name="item.iconSecond"/>
                </div>
              </div>
                <span class="statistics__value">
                  <CounterBlock :endVal="item.endVal" :id="item.id"/>
                </span>
              <span class="statistics__text">{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  <!-- end statistics -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import CounterBlock from './CounterBlock.vue'

export default {
  name: 'StatisticsBlock',
  components: {
    SvgIcon,
    CounterBlock
  },

  data() {
    return {
      statistics: [
        {
          iconFirst: 'cloud',
          iconSecond: 'user-add',
          endVal: 2514,
          id: 'user-add',
          text: 'Happy user'
        },
        {
          iconFirst: 'cloud',
          iconSecond: 'pdf',
          endVal: 6875,
          id: 'pdf',
          text: 'Files Hosted'
        },
        {
          iconFirst: 'cloud',
          iconSecond: 'list',
          endVal: 25025,
          id: 'list',
          text: 'Pages Served'
        },
        {
          iconFirst: 'cloud',
          iconSecond: 'cart',
          endVal: 147,
          id: 'cart',
          text: 'our store',
        }
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
  .statistics
    background-image: url('/assets/background-3.jpg')
    background-repeat: no-repeat
    background-size: 100% 100%

    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      min-height: 540px
      padding: 45px 0

    &__list
      display: flex
      justify-content: space-between
      flex-wrap: wrap

      +sm
        flex-direction: column
        align-items: center

    &__item
      display: flex
      flex-direction: column
      align-items: center
      max-width: 230px
      margin: 0 15px 30px 0

      &:last-of-type
        margin-right: 0

      +sm
        margin-right: 0

    &__image
      position: relative
      margin-bottom: 30px

      .svg-icon
        &--cloud
          width: 95px
          height: 65px
          fill: $white

    &__icon
      position: absolute
      top: 21px
      left: 32px

      .svg-icon
        width: 30px
        height: 30px
        fill: $blue

    &__value
      margin-bottom: 25px
      +OpenSansSemiBold
      font-size: 40px
      line-height: 1em
      color: $white
      text-align: center
      word-break: break-all

    &__text
      +OpenSansSemiBold
      font-size: 24px
      line-height: 1em
      color: $white
      text-align: center
      text-transform: uppercase
</style>