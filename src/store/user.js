//登录与注册的模块
import { reqGetCode, reqLogout, reqUserInfoByToken, reqUserLogin, reqUserRegister } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token';

const actions = {

    //获取验证码
    async getCode(context, phone) {
        //获取验证码的这个接口，把验证码返回，但是正常情况下，后台会把验证码发送到用户手机【省钱】
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            context.commit('GETCODE', result.data);
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('验证码获取失败'));
        }
    },
    //用户注册
    async userRegister(context, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('注册失败'));
        }
    },
    //用户登录业务
    async userLogin(context, data) {

        let result = await reqUserLogin(data);
        //服务器下发token，用户唯一标识符（uuid）
        //将来经常通过带token找到服务器要用户信息
        if (result.code == 200) {
            //用户已经登陆成功且获取到token
            context.commit('USERLOGIN', result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return Promise.resolve('ok');
        } else {
            return Promise.reject(new Error('账户名或密码错误'));
        }
    },
    //通过token，获取用户信息
    async getUserInfo(context) {
        let result = await reqUserInfoByToken();
        if (result.code == 200) {
            context.commit('GETUSERINFO', result.data);
            return Promise.resolve('ok');
        }else{
            return Promise.reject(new Error('获取用户信息失败'));
        }
    },
    //退出登录(header组件调用)
    async userLogout(context){
        //只是向服务器发起一次请求，通知服务器清除token
        let result = await reqLogout();
        if(result.code == 200){
            context.commit('CLEAR');
            return Promise.resolve('ok');
        }else{
            return Promise.reject(new Error('fail'));
        }
    }
}

const mutations = {

    //获取验证码
    GETCODE(state, code) {
        state.code = code;
    },
    //用户登录
    USERLOGIN(state, token) {
        state.token = token;
    },
    //通过token，获取用户信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    //清除本地数据
    CLEAR(state){
        state.token = '',
        state.userInfo = {},
        removeToken();
    }
}

const state = {

    code: '',
    token: getToken(),
    userInfo: {}
}

const getters = {

}

export default {
    actions,
    mutations,
    state,
    getters
}