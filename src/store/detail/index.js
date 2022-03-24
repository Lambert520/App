import { reqGoodsInfo } from '@/api'

//获取产品信息的action
const actions = {

    async getGoodsInfo(context, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            context.commit('GETGOODSINFO', result.data);
        }
    }
}

const mutations = {

    GETGOODSINFO(state, goodsInfo) {

        state.goodsInfo = goodsInfo;
    }
}

const state = {
    goodsInfo: {}
}

const getters = {

    //路径导航简化的数据
    categoryView(state) {
        //比如：state.goodInfo初始状态为空对象，空对象的categoryView属性值是undefined
        //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了
        return state.goodsInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state) {

        return state.goodsInfo.skuInfo || {};
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {

        return state.goodsInfo.spuSaleAttrList ;
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}