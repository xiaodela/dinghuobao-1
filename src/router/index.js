import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods/Goods'
import Activity from '@/components/Activity/Activity'
import Example from '@/components/Example/Example'
import Homepage from '@/components/Homepage/Homepage'
import Join from '@/components/Join/Join'
import Platform from '@/components/Platform/Platform'
import News from '@/components/News/News'
import Price from '@/components/Price/Price'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/Homepage'
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Platform',
      name: 'Platform',
      component: Platform
    },
    {
      path: '/Price',
      name: 'Price',
      component: Price
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/News',
      name: 'News',
      component: News
    }
  ]
})
