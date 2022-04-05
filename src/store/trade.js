import { reqAddressInfo } from "@/api"

const actions = {

    //获取用户地址的信息
    async getUserAddress(context) {

        let result = await reqAddressInfo();
        if (result.code == 200) {
            context.commit('GETUSERADDRESS', result.data);
        }
    }

}

const mutations = {

    GETUSERADDRESS(state, address) {
        state.address = address;
    }
}

const state = {

    address: []
}

const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}