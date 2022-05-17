import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/views/Detail'
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
},
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {y:0}
  }
})
router.beforeEach( async (to, from, next) => {
  // to and from are both route objects. must call `next`.
  const token = store.state.user.token
  const name = store.state.user.userInfo.name
  if(token){
    if(to.path=='/login'||to.path=='/register')
    {
      next('/')
    }else{
      if(name){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          await store.dispatch('userLogout')
          next('/login')
        }
      }
    }
  }else{
    let toPath = to.path
    if(toPath == '/trade' || toPath.indexOf('/pay')!=-1 || toPath=='/myorder'){
      next('/login?redirect='+toPath)
    }else{
      next()
    }
  }
  // if(token){
  //   if(to.path=='/login'||to.path=='/register')
  //   {
  //     next('/')
  //   }else{
  //     if(name){
  //       next()
  //     }else{
  //       try {
  //         await store.dispatch('getUserInfo')
  //         next()          
  //       } catch (error) {
  //         await store.dispatch('userLogout')
  //         next('/login')
  //       }
  //     }
  //   }
  // }else{

  // }
})
export default router
// export default new VueRouter({
//   routes,
//   scrollBehavior (to, from, savedPosition) {
//     // return 期望滚动到哪个的位置
//     return {y:0}
//   }
// })
