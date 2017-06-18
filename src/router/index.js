import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/activePublic/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
