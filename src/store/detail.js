import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api'
import { Promise } from 'core-js';
//封装游客身份模块uuid ----->生成一个随机字符串（不能改变）
import {getUUID} from '@/utils/uuid_token'

//获取产品信息的action
const actions = {
    //获取产品信息的action
    /*  
      async 函数中可能会有 await 表达式，async 函数执行时，
      如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，
      恢复 async 函数的执行并返回解析值
      await 关键字仅在 async function 中有效
    */
    async getGoodsInfo(context, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            context.commit('GETGOODSINFO', result.data);
        }
    },
    //将产品添加到购物车中，该方法加了async，方法执行返回的一定是Promise对象
    async addOrUpdateShopCart(context, { skuId, skuNum }) {
        //加入购物车返回的结构
        //加入购物车以后（发请求），前台将参数带给服务器 
        //服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表操作成功
        //因为服务器并没有返回其余数据，因此不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);

        //代表服务器加入购物车成功
        if (result.code == 200){
            return Promise.resolve('ok');
        }else{
            //代表加入购物车失败
            return Promise.reject(new Error('fail'));
        }
            
    },
}

const mutations = {

    GETGOODSINFO(state, goodsInfo) {

        state.goodsInfo = goodsInfo;
    }
}

const state = {
    goodsInfo: {},
    uuid_token: getUUID()
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

        return state.goodsInfo.spuSaleAttrList;
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}