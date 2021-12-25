import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 1.載入component的方式可以用import如上或如下routes內載入
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //1.載入component的方式可以用import如上或如下routes內載入
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //2.載入component的方式可以用import如上或如下routes內載入
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
