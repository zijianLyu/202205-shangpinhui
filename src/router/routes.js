import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
export default[
  {
    path:'/detail/:skuId',
    component:Detail,
    meta:{show:true}
  },
  {
    path:'/home',
    component:Home,
    meta:{show:true}
  },
  {
    path:'/search/:keyword?',
    component:Search,
    meta:{show:true},
    name:"search"
  },
  {
    path:'/login',
    component:Login,
    meta:{show:false}
  },
  {
    path:'/register',
    component:Register,
    meta:{show:false}
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    meta:{show:true}
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{show:true}
  },
  {
    path:'/trade',
    component:Trade,
    meta:{show:true}
  },
  {
    path:'/pay',
    component:Pay,
    meta:{show:true}
  },
  {
    path:'*',
    redirect:'/home'
  }
]
