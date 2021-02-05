<template>
  <component :is="counterComponent" :id="id" :endVal="endVal" :options="options"/>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
  props: {
    endVal: {
      type: Number,
      required: true
    },

    id: {
      type: String,
      required: true
    }
  },

  data() {
    return{
      counterComponent: null,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '',
        prefix: '',
        suffix: '',
        startVal: '0'
      }
    }
  },

  methods: {
    onReady() {
      const setCounter = () => {
        const top = document.querySelector('.statistics').getBoundingClientRect().top;

        if(top <= 200) {
          this.counterComponent = ICountUp;
        }
      };

      window.addEventListener('scroll', setCounter);
    }
  },

  mounted() {
    this.onReady();
  }
}
</script>