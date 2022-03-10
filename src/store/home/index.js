//home模块的小仓库
import { reqCategoryList } from "@/api"
//actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions ={

   async categoryList(context){

        //通过调用API中的接口函数，向服务器发送请求，获取服务器的数据
        //使用 await要和async一起使用，返回的就是成功信息（不然返回的就是promise对象）
        let result = await reqCategoryList();
        if(result.code == 200){
            //slice()传递的参数还可以是负值。当参数中有一个负值时，则用数组长度加上该数来确定相应的位置(不包括)
            let data = result.data.slice(0,-1);
            
            context.commit('CATEGORYLIST',data);
        }
    }
}

//mutations：修改state的唯一手段
const mutations = {

    CATEGORYLIST(state,categoryList){

        state.categoryList = categoryList;
    }
}

//state：仓库存储数据的地方
const state = {
    //state中的数据默认初始值不要瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[]
}

//getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}