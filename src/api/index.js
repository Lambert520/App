//当前这个模块：API进行统一的管理
import requests from "./request";

//三级联动的接口
// 地址：/api/product/getBaseCategoryList 方式：GET 参数：无

export const reqCategoryList = ()=>{

    //发请求: axios发请求 返回结果是Promise对象 
    return requests({url:'/product/getBaseCategoryList',method: 'GET'});
}