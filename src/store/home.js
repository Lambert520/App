//home模块的小仓库
import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"
//actions：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {

    //三级列表的数据
    async getCategoryList(context) {

        //通过调用API中的接口函数，向服务器发送请求，获取服务器的数据
        //使用 await要和async一起使用，返回的就是成功信息（不然返回的就是promise对象）
        let result = await reqCategoryList();
        if (result.code == 200) {
            //slice()传递的参数还可以是负值。当参数中有一个负值时，则用数组长度加上该数来确定相应的位置(不包括)
            let data = result.data.slice(0, -1);

            context.commit('GETCATEGORYLIST', data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList(context) {
        let result = await reqBannerList();

        if (result.code == 200) {
            let data = result.data;
            context.commit('GETBANNERLIST', data);
        }
    },
    //获取floor数据
    async getFloorList(context){
        let result = await reqFloorList();
        if(result.code == 200){
            let data = result.data;
            context.commit('GETFLOORLIST',data);
        }
    }
}

//mutations：修改state的唯一手段
const mutations = {

    //三级列表数据
    GETCATEGORYLIST(state, categoryList) {

        state.categoryList = categoryList;
    },
    //轮播图数据
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    //floor数据
    GETFLOORLIST(state,floorList){

        state.floorList = floorList;
    }
}

//state：仓库存储数据的地方
const state = {
    //state中的数据默认初始值不要瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    //home仓库中存储三级菜单的数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //floor数组
    floorList: []
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