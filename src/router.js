import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/Post.vue')
    },
    {
      path: '/minecraft',
      name: 'minecraft',
      component: () => import(/* webpackChunkName: "blog" */ './views/Minecraft.vue')
    }
  ]
})
