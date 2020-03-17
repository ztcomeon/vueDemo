//引入vue
import Vue from 'vue'
//引入vue-router
import Router from 'vue-router'
//官方的例子
import HelloWorld from '@/components/HelloWorld'

// 导入刚才编写的组件,注意路径要写正确
import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'

//第三方库需要use一下才能用
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
