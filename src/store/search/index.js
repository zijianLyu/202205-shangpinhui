import {reqGetSearchInfo}  from '@/api'
const state = {
  searchList:{}
};
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList
  }
};
const actions = {
  async getSearchList({commit},params={}){
    const result = await reqGetSearchInfo(params)
    if(result.code==200){
      commit("GETSEARCHLIST",result.data)
    }
  }
};
const getters = {
  goodList(state){
    return state.searchList.goodsList || []
  },
  trademarkList(state){
    return state.searchList.trademarkList || [];
  },
  attrsList(state){
    return state.searchList.attrsList || []
  }
};
export default{
  state,
  mutations,
  actions,
  getters
}
