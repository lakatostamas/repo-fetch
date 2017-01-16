// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

/* eslint-disable no-new */

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

export { app, router, store }
