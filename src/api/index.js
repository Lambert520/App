//当前这个模块：API进行统一的管理
import requests from "./ajax";
import mockRequests from './mockAjax'

//三级联动的接口（以下是三种方式）
// 地址：/api/product/getBaseCategoryList 方式：GET 参数：无
// export const reqCategoryList = ()=>{

//     //发请求: axios发请求 返回结果是Promise对象 
//     return requests({url:'/product/getBaseCategoryList',method: 'GET'});
// }
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method: 'GET'});
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

//获取banner（Home首页轮播图接口）
// export const reqBannerList = ()=>{

//     //发请求: axios发请求 返回结果是Promise对象 
//     return mockRequests({url:'/banner',method: 'GET'});
// }
export const reqBannerList = () => mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索框模块数据 
//地址：/api/list 请求方式：POST 参数：需要带参数
//当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
});

//获取产品详情信息的接口 
//地址：/api/item/{skuId} 请求方式：GET
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'GET'
});

//将产品添加到购物车中或者更新某一个产品的个数
//地址：/api/cart/addToCart/{skuId}/{skuNum} 请求方式：POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST'
})

//获取购物车列表数据的接口
//地址：/api/cart/cartList  请求方式：GET
export const reqCartList = () => requests.get('/cart/cartList');

//删除购物产品的接口
//地址：/api/cart/deleteCart/{skuId} 请求方式：DELETE
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'DELETE'
});

//修改商品选择的状态
//地址：/api/cart/checkCart/{skuId}/{isChecked} 请求方式：GET
export const reqUpdateCheckedById = (skuId, isChecked) =>requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'GET'
})

//获取验证码
//地址：/api/user/passport/sendCode/{phone} 请求方式：GET
export const reqGetCode = (phone)=>requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'GET'
})

//注册
//地址：/api/user/passport/register 请求方式：POST   参数：phone、code、password
export const reqUserRegister = (data)=>requests({
    url: '/user/passport/register',
    method: 'POST',
    data //data: data
})

//登录
//地址：/api/user/passport/login 请求方式：POST  参数：phone，password
export const reqUserLogin = (data)=>requests({
    url: '/user/passport/login',
    method: 'POST',
    data
})

//获取用户的信息【需要带着用户的token向服务器要用户信息】
//地址：/api/user/passport/auth/getUserInfo  请求方式：GET
export const reqUserInfoByToken = ()=>requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'GET'
})

//退出登录
//地址：/api/user/passport/logout 请求方式：GET
export const reqLogout = ()=>requests({
    url: '/user/passport/logout',
    method: 'GET'
})

//获取用户地址信息
//地址：/api/user/userAddress/auth/findUserAddressList  请求方式：GET
export const reqAddressInfo = ()=>requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'GET'
})

//获取商品清单
//地址：/api/order/auth/trade 请求方式：GET
export const reqOrderInfo = ()=>requests({
    url: '/order/auth/trade',
    method: 'GET'
})

//提交订单的接口
//地址：/api/order/auth/submitOrder?tradeNo={tradeNo} 请求方式：POST
export const reqSubmitOrder = (tradeNo,data)=>requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'POST',
    data
});

//获取支付页面的信息
//地址：/api/payment/weixin/createNative/{orderId} 请求方式：GET
export const reqPayInfo = (orderId)=>requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'GET'
})

//获取支付订单状态
//地址：/api/payment/weixin/queryPayStatus/{orderId} 请求方式：GET
export const reqPayStatus = (orderId)=>requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'GET'
})

//获取我的订单列表
//地址：/api/order/auth/{page}/{limit} 请求方式：GET
export const reqMyOrderList = (page,limit)=>requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'GET'
})
