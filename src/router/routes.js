import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/myOrder'
import GroupView from '@/views/Center/groupView'
export default[
  {
    path:'/detail/:skuId',
    component:()=>import('@/views/Detail'),
    meta:{show:true}
  },
  {
    path:'/home',
    component:()=>import('@/pages/Home'),
    meta:{show:true}
  },
  {
    path:'/search/:keyword?',
    component:()=>import('@/pages/Search'),
    meta:{show:true},
    name:"search"
  },
  {
    path:'/login',
    component:()=>import('@/pages/Login'),
    meta:{show:false}
  },
  {
    path:'/register',
    component:()=>import('@/pages/Register'),
    meta:{show:false}
  },
  {
    path:'/addcartsuccess',
    component:()=>import('@/views/AddCartSuccess'),
    meta:{show:true}
  },
  {
    path:'/shopcart',
    component:()=>import('@/views/ShopCart'),
    meta:{show:true}
  },
  {
    path:'/trade',
    component:()=>import('@/views/Trade'),
    meta:{show:true},
    beforeEnter: (to, from, next) => {
      if(from.path=='/shopcart'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path:'/pay',
    component:()=>import('@/views/Pay'),
    meta:{show:true},
    beforeEnter: (to, from, next) => {
      if(from.path=='/trade'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path:'/paysuccess',
    component:()=>import('@/views/PaySuccess'),
    meta:{show:true},
    beforeEnter: (to, from, next) => {
      if(from.path=='/pay'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path:'/center',
    component:()=>import('@/views/Center'),
    children:[
      {
        path:'/myorder',
        component:()=>import('@/views/Center/myOrder'),
        meta:{
          show:true
        }
      },
      {
        path:'/groupview',
        component:()=>import('@/views/Center/groupView'),
        meta:{
          show:true
        }
      },
      {
        path:'',
        redirect:'myorder'
      }
    ],
    meta:{show:true}
  },
  {
    path:'*',
    redirect:'/home'
  }
]
