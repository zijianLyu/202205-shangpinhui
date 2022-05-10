import {reqGetCode,reqRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api/index'
import {setToken,getToken,removeToken} from '@/utils/token'
const state = {
  registerCode:'',
  token:getToken(),
  userInfo:{}
}
const actions = {
  async getCode({commit},phone){
    let result = await reqGetCode(phone)
    if(result.code==200){
      commit('GETCODE',result.data)
      return '请求成功'
    }else{
      return Promise.reject(new Error('请求失败'))
    }
  },
  async userRegister({commit},data){
    console.log(data)
    let result = await reqRegister(data)
    console.log(result)
    if(result.code==200)
    {
      return '注册成功'
    }else{
      return Promise.reject(new Error(result.message
    ))
    }
  },
  async userLogin({commit},data){
    const result = await reqUserLogin(data)
    if(result.code==200){
      commit('USERLOGIN',result.data.token)
      setToken(result.data.token)
      return '登录成功'
    }else{
      return Promise.reject(new Error('登录失败'))
    }
  },
  async getUserInfo({commit},data){
    let result = await reqUserInfo()
    console.log(result)
    if(result.code == 200){
      commit('GETUSERINFO',result.data)
      return 'ok'
    }else{
      return Promise.reject(result.message)
    }
  },
  async userLogout({commit}){
    const result = await reqLogout()
    if(result.code==200){
      commit('USERLOGOUT')
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  }
}
const mutations = {
  GETCODE(state,code){
    state.registerCode=code
  },
  USERLOGIN(state,token){
    state.token = token
  },
  GETUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  USERLOGOUT(state){
    state.token = ''
    state.userInfo = {}
    removeToken()
  }
}
const getters = {}
export default{
  state,
  mutations,
  actions,
  getters
}
