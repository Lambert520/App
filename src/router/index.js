//配置路由的地方

//引入vue
import Vue from "vue";
//引入vue-router路由组件
import VueRouter from 'vue-router';
//引入路由配置信息
import routes from './routes.js'

//使用插件
Vue.use(VueRouter)


//先把VueRouter原型对象的push，保存一份，保存到了window上
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//重写push | replace方法
//第一个参数：告诉原来push方法，你该往哪跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call || apply区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {

    if (resolve && reject) {

        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

//配置路由
export default new VueRouter({

    //配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y=0，代表的滚动条在最上方
        return { y: 0 }
    },
})