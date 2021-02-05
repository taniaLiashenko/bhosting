<template>
  <!-- begin blog -->
  <section class="blog">
    <div class="container">
      <div class="blog__wrapper">
        <ul class="blog__list">
          <li class="blog__item" v-for="item in blogPosts" :key="item.title">
            <div class="blog__heading">
              <div class="blog__image">
                <img class="blog__photo" :src="item.image" :alt="item.alt"/>
              </div>
              <span class="blog__date">{{ item.date }}</span>
            </div>
            <div class="blog__body">
              <span class="blog__author">{{ item.author }}</span>
              <h3 class="blog__title">{{ item.title }}</h3>
              <p class="blog__text">{{ item.text }}</p>
              <div class="blog__actions">
                <a class="blog__button" :href="item.link">Read more</a>
                <div class="blog__socials">
                  <button class="blog__comment" type="button">
                    <SvgIcon name="message-outline"/>
                    <span class="blog__count">16</span>
                  </button>
                  <button class="blog__share" type="button" @click="handler($event, item.link)">
                    <SvgIcon name="share"/>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end blog -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'
import { openPopup } from '@/utils.js'

export default {
  name: 'BlogBlock',
  components: {
    SvgIcon
  },
  data() {
    return {
      id: 'sharing',
      blogPosts: [
        {
          image: '/assets/image-5.jpg',
          alt: 'Team',
          date: '6 Nov',
          author: 'Jordan Alba',
          title: 'What are Website Hosting Services and Which is Right for You?',
          text: 'Shared hosting is the most popular hosting where you share bandwidth, diskspace and capacity,other network.',
          link: '#link1'
        },
        {
          image: '/assets/image-1.jpg',
          alt: 'Team',
          date: '6 Nov',
          author: 'Jordan Alba',
          title: '2What are Website Hosting Services and Which is Right for You?',
          text: 'Shared hosting is the most popular hosting where you share bandwidth, diskspace and capacity,other network.',
          link: '#link2'
        },
        {
          image: '/assets/image-6.jpg',
          alt: 'Man',
          date: '6 Nov',
          author: 'Jordan Alba',
          title: '3What are Website Hosting Services and Which is Right for You?',
          text: 'Shared hosting is the most popular hosting where you share bandwidth, diskspace and capacity,other network.',
          link: '#link3'
        }
      ]
    }
  },

  methods: {
    initOpenSharing(e) {
      openPopup(e, this.id);
    },

    setSharedLink(link) {
      this.$root.blogPostUrl = link;
    },

    handler(e, link) {
      this.setSharedLink(link);
      this.initOpenSharing(e);
    }
  }
}
</script>

<style lang="sass" scoped>
  .blog
    background-color: $bright-grey

    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      min-height: 828px
      padding: 45px 0 15px

    &__list
      display: flex
      justify-content: center
      flex-wrap: wrap

      +md
        flex-direction: column
        align-items: center

    &__item
      width: 360px
      margin: 0 30px 30px 0
      background-color: $white

      &:last-of-type
        margin-right: 0

      +md
        margin-right: 0

      +sm
        width: 100%

    &__heading
      position: relative

    &__image
      width: 100%
      height: 278px

    &__photo
      width: 100%
      height: 100%
      object-fit: cover

    &__date
      position: absolute
      bottom: 15px
      left: 15px
      display: flex
      align-items: center
      justify-content: center
      min-width: 85px
      padding: 10px
      +OpenSansSemiBold
      font-size: 14px
      line-height: 1.9em
      color: $white
      text-transform: uppercase
      background: $blue
      border-radius: 3px

    &__body
      padding: 30px 25px
      text-align: left

    &__author
      margin-bottom: 20px
      line-height: 2em
      color: $grey

    &__title
      margin-bottom: 18px
      +OpenSansSemiBold
      font-size: 18px
      line-height: 1.6em

    &__text
      max-width: 285px
      margin-bottom: 30px
      padding-top: 23px
      font-size: 14px
      line-height: 1.9em
      color: $grey
      border-top: 2px solid $bright-grey

      +sm
        max-width: 100%

    &__actions
      display: flex
      align-items: center
      flex-wrap: wrap

      +sm
        flex-direction: column

    &__button
      display: flex
      justify-content: center
      align-items: center
      min-width: 122px
      margin-right: 60px
      padding: 10px
      +OpenSansSemiBold
      font-size: 14px
      line-height: 1.9em
      color: $blue
      text-align: center
      text-transform: uppercase
      text-decoration: none
      background: $bright-grey
      border-radius: 2px
      transition: background 0.25s ease-out, color 0.25s ease-out

      +sm
        margin: 0 0 15px

      &:hover
        color: $white
        background: linear-gradient(to right, $blue 10%, $violet 100%)

    &__socials
      display: flex

    &__comment
      display: flex
      justify-content: center
      align-items: center
      min-width: 55px
      min-height: 30px
      margin-right: 10px
      border-radius: 3px
      transition: background 0.25s ease-out

      &:hover
        background: linear-gradient(to right, $blue 10%, $violet 100%)

    &__count
      margin-left: 5px
      font-size: 14px
      line-height: 1.9em

    &__share
      display: flex
      justify-content: center
      align-items: center
      min-width: 40px
      min-height: 30px
      border-radius: 3px
      transition: background 0.25s ease-out

      &:hover
        background: linear-gradient(to right, $blue 10%, $violet 100%)
</style>