<template>
  <ul class="socials" :class="{'socials_row': rowDirection}">
    <li class="socials__icon" :class="{'socials__icon_color': icon.color}" v-for="icon in socials" :key="icon.image" :aria-label="icon.label">
      <a class="socials__link" :class="setColoredIcon(icon.color)" :href="icon.link">
        <SvgIcon :name="icon.image"/>
      </a>
    </li>
  </ul>
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'VSocialsBlock',
  components: {
    SvgIcon
  },
  props: {
    rowDirection: {
      type: Boolean
    },
    socials: {
      type: Array,
      required: true
    }
  },
  methods: {
    setColoredIcon(color) {
      if(color) {
        return `socials__link_${color}`;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .socials
    $this: &

    display: flex
    flex-direction: column
    justify-content: center
    flex-wrap: wrap

    +sm
      flex-direction: row
      justify-content: space-between
      width: 100%

    &_row
      flex-direction: row
      justify-content: flex-start
      min-width: 193px

      +sm
        justify-content: center

    &__icon
      margin-bottom: 20px
      transition: transform 0.25s ease-out

      +sm
        margin-right: 15px

        &:last-of-type
          margin-right: 0

      &:hover
        transform: scale(1.2)

      &:last-of-type
        margin-bottom: 0

      &_color
        #{$this}__link
          display: flex
          justify-content: center
          align-items: center
          width: 35px
          height: 35px

          .icon
            width: 20px
            height: 20px

      .svg-icon
        fill: $white

    &__link
      width: 100%
      height: 100%

      &_blue
        background-color: $dark-blue

      &_red
        background-color: $red

      &_pink
        background-color: $pink

      &_light-blue
        background-color: $light-blue

      &_light-red
        background-color: $light-red
</style>
