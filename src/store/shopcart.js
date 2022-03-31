import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"

const actions = {

    //获取购物车的列表数据
    async getCartList(context) {

        let result = await reqCartList();
        if (result.code == 200) {
            context.commit('GETCARTLIST', result.data);
        }

    },

    //删除购物车某一个商品,不返回数据，只返回成功或失败
    async deleteCartListBySkuId(context, skuId) {

        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('fail'));
        }
    },

    //修改购物车某一个选中的状态
    async updateCheckedById(context, { skuId, isChecked }) {

        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return Promise.resolve('ok');
        } else {

            return Promise.reject(new Error('fail'));
        }
    },

    //删除全部勾选的产品
    deleteAllCheckedCart(context){
        //context：小仓库，
        //包含 commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】state【当前仓库】
        //获取购物车中全部的产品【是一个数组】
        let PromiseAll = [];
        context.getters.cartList.cartInfoList.forEach(item => {
            if(item.isChecked == 1){
                let promise = context.dispatch('deleteCartListBySkuId',item.skuId);
                //将每一个返回的Promise添加到数组中
                PromiseAll.push(promise);
            }      
        });
        //只要全部的p1|p2 ... 都成功，返回结果即为成功
        //如果有一个失败，返回即为失败的结果
        return Promise.all(PromiseAll);
    },

    //修改全部产品的状态
    updateAllCartIsChecked(context,isChecked){
        //数组
        let promiseAll = [];
        context.getters.cartList.cartInfoList.forEach(item=>{
           
            let promise = context.dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            promiseAll.push(promise);
        });

        return Promise.all(promiseAll);
    }
}

const mutations = {

    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
}

const state = {

    cartList: []
}

const getters = {

    cartList(state) {

        //获取的购物车数据在这个数组中
        return state.cartList[0] || {};
    }
}

export default {
    actions,
    mutations,
    state,
    getters
}