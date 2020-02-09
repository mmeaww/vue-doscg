// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import storage from 'vue-web-storage'

import './plugins/bootstrap-vue'
import 'mutationobserver-shim'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(storage)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDknvxnd-sLYgXyNNokPppKDyPFbGs5lkw',
    libraries: 'places' // necessary for places input
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
