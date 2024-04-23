import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import LoginBlog from '../views/LoginBlog.vue' ;

Vue.use(ElementUI);

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: LoginBlog
  },
  {
    path: '/LoginBlog',
    name: 'LoginBlog',
    component: LoginBlog
  },
  {
    path: '/RegiestBlog',
    name: 'RegiestBlog',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegiestBlog.vue')
  },
  {
    path: '/HomeBlog',
    name: 'HomeBlog',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeBlog.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cshGift',
    name: 'cshGift',
    component: () => import(/* webpackChunkName: "about" */ '../views/CshGiftCalculation.vue')
  },
  {
    path: '/tourView',
    name: 'tourView',
    component: () => import(/* webpackChunkName: "about" */ '../views/TourView.vue')
  },
  {
    path: '/PhotoQuiz',
    name: 'PhotoQuiz',
    component: () => import(/* webpackChunkName: "about" */ '../views/PhotoQuiz.vue')
  },
  {
    path: '/usetLogin01',
    name: 'usetLogin01',
    component: () => import(/* webpackChunkName: "about" */ '../views/usetLogin01.vue')
  }
]

const router = new VueRouter({
  //放开注释的话只能通过路由进行访问
 // mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router
