//引入vue
import Vue from 'vue'
//引入vue-router
import Router from 'vue-router'

// 导入刚才编写的组件,注意路径要写正确
import Login from '../components/Login'
import AppIndex from '../components/home/AppIndex'

import Home from '../components/Home'

import LibraryIndex from '../components/library/LibraryIndex'

//第三方库需要use一下才能用
Vue.use(Router)

export default new Router({

//使用history模式
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
