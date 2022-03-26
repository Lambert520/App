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
export const reqGoodsInfo = (skuId)=>requests({
    url: `/item/${skuId}`,
    method: 'GET'
});

//将产品添加到购物车中或者更新某一个产品的个数
//地址：/api/cart/addToCart/{skuId}/{skuNum} 请求方式：POST
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST'
})