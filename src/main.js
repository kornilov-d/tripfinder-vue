import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/font-awesome'
import App from './App.vue'
import router from './router'
import store from './store'
import FlagIcon from 'vue-flag-icon'
import VueI18n from 'vue-i18n'
import  GlMap from "vue-mapbox";



Vue.config.productionTip = false

Vue.use(FlagIcon)
Vue.use(VueI18n)
Vue.use(GlMap)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
