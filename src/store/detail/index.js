import { reqAddOrUpdateShopList, reqGoodsInfo,reqDeleteCartById } from "@/api"
import { getUUID } from "@/utils/uuid_token"
const state = {
  goodsInfo:[],
  uuid_token:getUUID()
}
const mutations = {
  GETGOODSINFO(state,goodsInfo){
    state.goodsInfo = goodsInfo
  }
}
const actions = {
  async getGoodsInfo({commit},skuId){
    const result = await reqGoodsInfo(skuId)
    if(result.code==200){
      commit('GETGOODSINFO',result.data)
    }
  },
  async reqAddOrUpdateShopCart({commit},{skuId,skuNum}){
      const result = await reqAddOrUpdateShopList(skuId,skuNum)
      console.log(skuId,skuNum,result)
      if(result.code==200){
        return '加入购物车成功'
      }else{
        return Promise.reject(new Error('加入购物车失败'))
      }
  },
  async deleteCartListBySkuId({commit},skuId){
    const result = await reqDeleteCartById(skuId)
    if(result.code == 200){
      return '删除成功'
    }else{
      return Promise.reject(new Error('删除出错了'))
    }
  }
}
const getters = {
  categoryView(state){
    return state.goodsInfo.categoryView || {}
  },
  skuInfo(state){
    return state.goodsInfo.skuInfo || {}
  },
  spuSaleAttrList(state){
    return state.goodsInfo.spuSaleAttrList || {}
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
