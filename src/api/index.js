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
export const reqCategoryList = ()=>requests.get('/product/getBaseCategoryList');

//获取banner（Home首页轮播图接口）
// export const reqBannerList = ()=>{

//     //发请求: axios发请求 返回结果是Promise对象 
//     return mockRequests({url:'/banner',method: 'GET'});
// }
export const reqBannerList = ()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor');
