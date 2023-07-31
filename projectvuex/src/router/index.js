import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTest from '@/components/pages/PageTest'
import PageUser from '@/components/pages/PageUser'
//@表示src 底下
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      // name: 'test',
      component: PageTest
    },
    {
      path: '/user/id/:num',
      // name: 'test',
      component: PageUser
    },
    {
      path: '/user/:name',
      // name: 'test',
      component: PageUser
    }
  ]
})
