import { reqAddressInfo, reqOrderInfo } from "@/api"

const actions = {

    //获取用户地址的信息
    async getUserAddress(context) {

        let result = await reqAddressInfo();
        if (result.code == 200) {
            context.commit('GETUSERADDRESS', result.data);
        }
    },

    //获取商品清单的数据
    async getOrderInfo(context) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            context.commit('GETORDERINFO', result.data);
        }
    }

}

const mutations = {
    //获取用户地址的信息
    GETUSERADDRESS(state, address) {
        state.address = address;
    },
    //获取商品清单的数据
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    }
}

const state = {

    address: [],
    orderInfo: {}
}

const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}