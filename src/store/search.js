//search模块的小仓库

import {reqGetSearchInfo} from '@/api'

//actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions ={

    //获取search模块数据
    async getSearchList(context,params){
        //params参数：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            let data = result.data;
            context.commit('GETSEARCHLIST',data);
        }
    }
}

//mutations：修改state的唯一手段
const mutations = {

    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
}

//state：仓库存储数据的地方
const state = {
    //仓库初始化状态
    searchList: {}
}

//getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
//可以把将来在组件中需要用的数据简化一下【将来组件获取数据的时候就方便了】
const getters = {

    //当前形参state，是当前仓库的state，不是大仓库的state
    goodsList(state){
        
        //假如网络不给力，返回的数据是undefined，就会出问题，要加条件
        //计算新的属性，至少要给人家一个数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state){

        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        
        return state.searchList.attrsList || []; 
    },

}

export default {
    actions,
    mutations,
    state,
    getters
}