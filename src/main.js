// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui，注意安装的时候使用淘宝镜像安装，不然会报错 cnpm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入store
import store from './store'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8080/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//引入element-ui之后，需要use一下
Vue.use(ElementUI);

//使用钩子函数判断是否拦截,每一个路由前调用
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username){
        next()
        // next({
        //   path: 'login',
        //   query: {redirect: to.fullPath}
        // })
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //
  render: h => h(App),
  router,
  store,
  components: {App},
  template: '<App/>'
})
