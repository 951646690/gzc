import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index.vue'
import Dm from '@/views/dm.vue'
import Games from '@/views/games.vue'
import Contact from '@/views/contact.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '主站',
      component: Home
    },
    {
      path: '/dm',
      name: '番剧',
      component: Dm
    },
    {
      path: '/games',
      name: '游戏',
      component: Games
    },
    {
      path: '/contact',
      name: '灌水',
      component: Contact
    },
   
  ]
})
