//api接口统一管理
import request from './ajax'
import mockRequests from './mockAjax'
export const reqCategoryList = ()=>
  request({url:'/product/getBaseCategoryList',method:'GET'})

export const reqFloorList = ()=>mockRequests.get('/floor')
export const reqGetBannerList = ()=>mockRequests.get('/banner')
export const reqGetSearchInfo = (params)=> request({url:"/list",method:"POST",data:params})
export const reqGoodsInfo = (skuId)=>request({url:`/item/${skuId}`})
export const reqAddOrUpdateShopList = (skuId,skuNum)=>
  request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'POST'})
export const reqCartList = ()=>request({url:'/cart/cartList',method:'GET'})
export const reqDeleteCartById = (skuId)=>request({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})
export const reqUpdateCheckedById = (skuId,isChecked)=>request({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'GET' })
export const reqGetCode = (phone)=>request({url:`/user/passport/sendCode/${phone}`,method:'GET'})
export const reqRegister = (data)=>request({url:'/user/passport/register/',data,method:'POST'})
export const reqUserLogin = (data)=>request({
  url:'/user/passport/login',data,method:'POST'
})
export const reqUserInfo = ()=>request({url:'/user/passport/auth/getUserInfo',method:'GET'})
export const reqLogout = ()=>request({
  url:'/user/passport/logout',method:'GET'
})
export const reqAddressInfo = ()=>request({url:'/user/userAddress/auth/findUserAddressList',method:'GET'})
export const reqOrderInfo = ()=>request({url:'/order/auth/trade',method:'GET'})
export const reqSubmitOrder = (tradeNo,data)=>request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'POST'})
export const reqPayInfo = (orderId) =>request({url:`/payment/weixin/createNative/${orderId}`,method:'GET'})
export const reqPayStatue = (orderId) =>request({url:`payment/weixin/queryPayStatus/${orderId}`,method:'GET'})
export const reqMyOrderList = (page,limit)=>request({url:`/order/auth/${page}/${limit}`,method:'GET'})
