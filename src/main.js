// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'
import App from './App'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store(),
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
