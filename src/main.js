import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import shareIt from 'vue-share-it'

Vue.use(shareIt)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: Store,
  render: h => h(App)
})