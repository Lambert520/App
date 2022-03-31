//引入Vuex---------相当于我们的大仓库
import Vue from "vue";
import Vuex from 'vuex';

//需要使用插件一次
Vue.use(Vuex);

//引入各个模块的仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from "./user";

//对外暴露Store类的一个实例（你需要暴露这个类的实例，如果你不对外暴露，外部是不能使用的）
export default new Vuex.Store({
    //模块：把小仓库进行合并变为大仓库
    modules: {
        home,
        search,
        detail,
        shopcart,
        user
    }
})