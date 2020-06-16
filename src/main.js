import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/font-awesome'
import App from './App.vue'
import router from './router'
import store from './store'
import GlMap from "vue-mapbox";
import Axios from 'axios'



export let API_URL = 'http://tripfinder-api.herokuapp.com/'

Vue.config.productionTip = false

Vue.use(GlMap)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
