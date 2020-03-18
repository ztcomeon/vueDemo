// 引入 Vuex cnpm install vuex --save 淘宝镜像安装
import Vue from 'vue'
import Vuex from 'vuex'

//导入后需要use一下
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      //localStorage，即本地存储
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login(state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})
