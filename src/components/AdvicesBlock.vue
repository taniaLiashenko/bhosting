<template>
  <!-- begin advices -->
  <section class="advices">
    <div class="container">
      <div class="advices__wrapper">
        <h2 class="advices__title title">How to choose the best web hosting company?</h2>
        <div class="advices__tabs">
          <TabsBlock :tabs="tabs" :tabsContent="tabsContent"/>
        </div>
      </div>
    </div>
  </section>
  <!-- end advices -->
</template>

<script>
import TabsBlock from './TabsBlock.vue'

export default {
  name: 'AdvicesBlock',
  components: {
    TabsBlock
  },
  data() {
    return {
      tabs: ['bandwidth', 'compatibility', 'reliability', 'security', 'shared', 'load time'],
      tabsContent: [
        {
          name: 'bandwidth',
          subtitle: 'The First Thing You Need!',
          text: `<p class="tabs__text-item">Welcome to WHMCS! You have made great choice an we want to help you get up a	running as quickly as possible. This is a sample announcement. Announcements are a ways to keep your customers informed about news and special offers. </p>
          <p class="tabs__text-item">Ntegrity, working families, affiliamedicasl supplies insurmountable challees, dialogues, hack combat malaria diversity approach. Nonprofit collaborative cities and catalyUnited Nations. Save lives innovate hunger, visionary accelses disruptor recognizes potential. Informals and economies volunteer foundation benefit reproductive rights.</p>
          <p class="tabs__text-item">ntegrity, working families, affiliamediscal supplies insurmountable challees, dialogues, hack combat malaria diversity approach. Nonprofit collaborative cities and catalyUnited Nations. Save live innovate hunger, visionary acceles disruptor recognize potential.</p>`,
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        },
        {
          name: 'compatibility',
          subtitle: 'The First Thing You Need 2!',
          text: '<p class="tabs__text-item">Some text</p>',
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        },
        {
          name: 'reliability',
          subtitle: 'The First Thing You Need 3!',
          text: '<p class="tabs__text-item">Some text 2</p>',
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        },
        {
          name: 'security',
          subtitle: 'The First Thing You Need 4!',
          text: '<p class="tabs__text-item">Some text 3</p>',
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        },
        {
          name: 'shared',
          subtitle: 'The First Thing You Need 5!',
          text: '<p class="tabs__text-item">Some text 4</p>',
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        },
        {
          name: 'load time',
          subtitle: 'The First Thing You Need 6!',
          text: '<p class="tabs__text-item">Some text 5</p>',
          image: '/assets/image-4.jpg',
          alt: 'Bandwidth'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .advices
    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      min-height: 770px
      padding: 45px 0 45px 70px

      +md
        padding: 45px 0

    &__title
      margin-bottom: 70px

</style>