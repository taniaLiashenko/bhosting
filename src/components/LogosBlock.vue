<template>
  <!-- begin logos -->
  <section class="logos">
    <div class="container">
      <div class="logos__wrapper">
        <ul class="logos__list">
          <li class="logos__item" v-for="item in logos" :key="item.alt">
            <a :href="item.link">
              <img :src="item.image" :alt="item.alt"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end logos -->
</template>

<script>
export default {
  name: 'LogosBlock',
  data() {
    return {
      logos: [
        {
          link: '#',
          image: 'Static/img/logo-1.png',
          alt: 'Logo'
        },
        {
          link: '#',
          image: 'Static/img/logo-2.png',
          alt: 'Logo2'
        },
        {
          link: '#',
          image: 'Static/img/logo-3.png',
          alt: 'Logo3'
        },
        {
          link: '#',
          image: 'Static/img/logo-1.png',
          alt: 'Logo4'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .logos
    &__wrapper
      min-height: 330px
      padding: 60px 0

      +md
        min-height: 190px

    &__list
      display: flex
      justify-content: space-between
      align-items: center
      flex-wrap: wrap
      max-width: 770px

      +bg
        max-width: 600px

      +md
        max-width: 100%

      +sm
        flex-direction: column

    &__item
      margin: 0 15px 15px 0
      transition: opacity 0.25s ease-out

      +sm
        margin-right: 0

      &:hover
        opacity: 0.5
</style>