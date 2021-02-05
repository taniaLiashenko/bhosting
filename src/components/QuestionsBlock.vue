<template>
  <!-- begin questions -->
  <section class="questions">
    <div class="container">
      <div class="questions__wrapper">
        <h2 class="questions__title title title_left">Have question?</h2>
        <div class="questions__inner">
          <div class="questions__nav">
            <h3 class="questions__subtitle">Categories</h3>

            <ul class="questions__list">
              <li class="questions__list-item" 
                :class="{'is-active': currentCategory === category.name}"
                v-for="category in categories" 
                :key="category.name">
                <button class="questions__tab" @click="changeCategory(category.name)">{{ category.name }} <span>({{ category.count }})</span></button>
              </li>
            </ul>
          </div>

          <div class="questions__body">
            <div class="questions__point" 
              :class="{'is-active': point.data === currentCategory}" 
              v-for="point in accordion" 
              :key="point.data">
              <div class="questions__item" 
                :class="{'is-active': currentAccordion === item.question}" 
                v-for="item in point.list" 
                :key="item.question">
                <p class="questions__answer">{{ item.answer }}</p>
                <div class="questions__question">
                  <p class="questions__text">{{ item.question }}</p>
                  <button class="questions__button" type="button" @click="toggleAccordion(item.question)">
                    <SvgIcon name='plus'/>
                    <SvgIcon name='minus'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- end questions -->
</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
  name: 'QuestionsBlock',
  components: {
    SvgIcon
  },
  data() {
    return {
      categories: [
        {
          name: 'internet',
          count: '15'
        },
        {
          name: 'hosting',
          count: '25'
        },
        {
          name: 'server accessories',
          count: '43'
        },
        {
          name: 'server dedicated',
          count: '14'
        }
      ],

      currentCategory: 'internet',

      accordion: [
        {
          data: 'internet',
          list: [
            {
              question: 'How one can choose his webhosting?',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: 'What is Cloud Hosting or web Hosting Services?',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: 'How to Choose the Best Web Hosting Company?',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            }
          ]
        },
        {
          data: 'hosting',
          list: [
            {
              question: '11Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '12Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '13Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            }
          ]
        },
        {
          data: 'server accessories',
          list: [
            {
              question: '21Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '22Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '23Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            }
          ]
        },
        {
          data: 'server dedicated',
          list: [
            {
              question: '31Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '32Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            },
            {
              question: '33Text',
              answer: 'The best web hosting Services,	ability to run a successful website is going to seriously hindered. There is a dizzying array of web hosting providers competing for your business. Bandwidth, Diskspace, shared hosting, vps, load time, customers support etc.'
            }
          ]
        }
      ],

      currentAccordion: null,
    }
  },

  methods: {
    changeCategory(item) {
      this.currentCategory = item;
      this.currentAccordion = null;
    },

    toggleAccordion(item) {
      if(this.currentAccordion === item) {
        this.currentAccordion = null;
      } else {
        this.currentAccordion = item;
      }
    },
  }
}
</script>

<style lang="sass">
  .questions
    $this: &
    text-align: left

    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      min-height: 670px
      padding: 45px 0

      +md
        min-height: 575px

    &__title
      width: 100%
      margin-bottom: 65px
      padding-left: 100px

      +md
        padding-left: 0
        text-align: center

    &__inner
      display: flex
      width: 83%

      +md
        flex-direction: column

      +sm
        width: 100%

    &__nav
      width: 18%
      margin-right: 30px

      +md
        width: 82%
        margin-right: 0

      +sm
        width: 100%

    &__subtitle
      margin-bottom: 40px
      +OpenSansSemiBold
      font-size: 16px
      line-height: 1em
      color: $light-black
      text-transform: uppercase
      word-break: break-all

    &__list
      +md
        display: flex
        flex-wrap: wrap

    &__list-item
      margin-bottom: 25px
      font-size: 14px
      line-height: 1em

      +md
        margin-right: 15px

      &.is-active
        #{$this}__tab
          cursor: text

      &.is-active,
      &:hover
        #{$this}__tab
          color: $blue

    &__tab
      text-align: left
      background-color: transparent
      transition: color 0.25s ease-out

    &__body
      width: 82%

      +sm
        width: 100%

    &__point
      display: none

      &.is-active
        display: block

    &__item
      margin-bottom: 15px
      background-color: $bright-grey

      &.is-active
        #{$this}__answer
          display: block

        #{$this}__button
          .svg-icon--plus
            display: none

          .svg-icon--minus
            display: block

    &__question
      position: relative
      display: flex
      justify-content: space-between
      align-items: flex-start
      min-height: 53px
      padding-left: 45px

      +sm
        padding-left: 17px

      &::before
        content: ""
        position: absolute
        top: 0
        left: 0
        width: 14px
        height: 100%
        background-color: $blue

    &__text
      margin-right: auto
      padding: 15px 0
      font-size: 16px
      line-height: 1.6em
      color: $medium-grey

      +sm
        font-size: 14px

    &__answer
      display: none
      padding: 35px 60px 10px 45px

    &__button
      display: flex
      align-items: center
      justify-content: center
      min-width: 60px
      min-height: 60px
      margin-left: 15px
      background: linear-gradient(to right top, $blue 10%, $violet 100%)

      .svg-icon
        width: 20px
        height: 20px
        fill: $white
        transition: transform 0.25s ease-out

        &:hover
          transform: scale(1.2)

        &--minus
          display: none

</style>