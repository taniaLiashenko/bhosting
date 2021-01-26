<template>
  <div class="out" id="app">
    <div class="out__inner">
      <TheHeader/>
      <IntroductionBlock></IntroductionBlock>
    </div>

    <ExperienceBlock></ExperienceBlock>
    <SearchBlock></SearchBlock>
    <StepsBlock></StepsBlock>
    <AdvantagesBlock></AdvantagesBlock>
    <PackagesBlock></PackagesBlock>
    <InfoBlock></InfoBlock>
    <AdvicesBlock></AdvicesBlock>
    <StatisticsBlock></StatisticsBlock>
    <FeedbackBlock></FeedbackBlock>
    <BlogBlock></BlogBlock>
    <QuestionsBlock></QuestionsBlock>
    <SubscribeBlock></SubscribeBlock>
    <LogosBlock></LogosBlock>

    <TheFooter/>
  </div>
</template>

<script>
import '@/assets/sass/common-styles.sass';

import TheHeader from '@/components/TheHeader.vue';
import IntroductionBlock from '@/components/IntroductionBlock.vue';
import TheFooter from '@/components/TheFooter.vue';
import ExperienceBlock from '@/components/ExperienceBlock.vue';
import SearchBlock from '@/components/SearchBlock.vue';
import StepsBlock from '@/components/StepsBlock.vue';
import AdvantagesBlock from '@/components/AdvantagesBlock.vue';
import PackagesBlock from '@/components/PackagesBlock.vue';
import InfoBlock from '@/components/InfoBlock.vue';
import AdvicesBlock from '@/components/AdvicesBlock.vue';
import StatisticsBlock from '@/components/StatisticsBlock.vue';
import FeedbackBlock from '@/components/FeedbackBlock.vue';
import BlogBlock from '@/components/BlogBlock.vue';
import QuestionsBlock from '@/components/QuestionsBlock.vue';
import SubscribeBlock from '@/components/SubscribeBlock.vue';
import LogosBlock from '@/components/LogosBlock.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    IntroductionBlock,
    TheFooter,
    ExperienceBlock,
    SearchBlock,
    StepsBlock,
    AdvantagesBlock,
    PackagesBlock,
    InfoBlock,
    AdvicesBlock,
    StatisticsBlock,
    FeedbackBlock,
    BlogBlock,
    QuestionsBlock,
    SubscribeBlock,
    LogosBlock
  }
}
</script>

<style lang="sass" scoped>
  .out
    overflow-x: hidden

    &__inner
      width: 100%
      background-image: url('~Static/img/background.jpg')
      background-repeat: no-repeat
      background-size: 100% 100%

      +md
        background-size: 150% 100%

      +sm
        background-size: 458% 100%
        background-position: 54%
</style>
