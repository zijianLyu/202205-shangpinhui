import {reqAddressInfo,reqOrderInfo} from '@/api/index'
const state = {
  addressInfo:[],
  orderInfo:{}
}
const mutations = {
  ADDRESSINFO(state,addressInfo){
    state.addressInfo = addressInfo
  },
  ADDORDERINFO(state,orderInfo){
    state.orderInfo = orderInfo
  }
}
const actions = {
  async getUserAddress({commit}){
    const result = await reqAddressInfo()
    console.log(result)
    if(result.code == 200){
      commit('ADDRESSINFO',result.data)
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  async getOrderInfo({commit}){
    const result = await reqOrderInfo()
    console.log(result)
    if(result.code==200){
      commit('ADDORDERINFO',result.data)
    }else{
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
