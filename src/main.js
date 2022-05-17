import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import TypeNav from '@/pages/Home/TypeNav/index'
import store from '@/store/index'
import Carousel from '@/components/Carousel/index'
import Pagination from '@/components/Pagination/index'
import * as API from '@/api'
Vue.config.productionTip = false
//第一个参数是组件的名字，第二个参数是引入的哪个组件
Vue.component(Pagination.name,Pagination)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
import {reqCategoryList,reqGetSearchInfo} from '@/api'
import "@/mock/mockServer"
import 'swiper/css/swiper.css'
import { Button, MessageBox } from 'element-ui';
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueLazyload from 'vue-lazyload'
import MyPlugin from '@/plugins/myPlugins'
import "@/plugins/validate";
Vue.use(MyPlugin,{
  name:'hellolazj'
})
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
reqCategoryList();
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store,
}).$mount('#app')
