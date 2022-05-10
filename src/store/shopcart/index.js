import { reqCartList,reqUpdateCheckedById } from "@/api"
const state = {
  shopCartList:[]
}
const mutations = {
  GETSHOPCARTLIST(state,shopCartList){
    console.dir(shopCartList)
    state.shopCartList = shopCartList
  }
}
const actions = {
  async reqShopCartList({commit}){
    const result =  await reqCartList()
    if(result.code == 200){
      commit('GETSHOPCARTLIST',result.data)
    }
  },
  async reqUpdateCheckedById({commit},{skuId,isChecked}){
    const result = await reqUpdateCheckedById(skuId,isChecked)
    if(result.code == 200){
      return 'ok'
    }else{
      return '修改错误！'
    }
  },
  deleteAllCheckedCart({dispatch,getters}){
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):''
      PromiseAll.push(promise)
    });
    return Promise.all(PromiseAll)
  },
  updateAllCartIsChecked({dispatch,getters},isChecked){
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item=>{
      let promise = dispatch('reqUpdateCheckedById',{skuId:item.skuId,isChecked})
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartList(state){
    return state.shopCartList[0] || []
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
