import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Empty from '@/components/Empty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Empty',
      component: Empty
    }
  ]
})
