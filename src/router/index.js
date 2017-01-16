import Vue from 'vue'
import Router from 'vue-router'
import CustomSearch from '../views/CustomSearch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/top', component: CustomSearch },
    { path: '/', component: CustomSearch }
  ]
})
