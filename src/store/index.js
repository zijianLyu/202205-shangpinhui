import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from  './home/index'
import search from  './search/index'
import detail from './detail/index'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
export default new Vuex.Store({
  modules:{
    home,
    search,
    shopcart,
    detail,
    user,
    trade,
  }
})
