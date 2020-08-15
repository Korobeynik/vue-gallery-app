import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Card from "./views/Card";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/card/:id',
      name: 'card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('./views/User.vue')
    }
  ]
})
