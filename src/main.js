import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Axios set up
import './utils/axios';
import vSelect from 'vue-select'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Set up Vue select
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
