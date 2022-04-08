//配置路由的地方

//引入vue
import Vue from "vue";
//引入vue-router路由组件
import VueRouter from 'vue-router';
//引入路由配置信息
import routes from './routes.js'
//引入store
import store from '@/store'

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
let router = new VueRouter({

    //配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 返回的这个y=0，代表的滚动条在最上方
        return { y: 0 }
    },
});

//全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to,from,next)=>{
    //to：可以获取到你要跳转到那个路由信息
    //from：可以获取到你从哪个路由跳转而来的信息
    //next:放行函数：直接使用next()、放行到指定的路由next(path) next(false)
    
    //用户登陆了才会有token，未登录一定不会有token
    let token = store.state.user.token;
    //用户信息
    let name = store.state.user.userInfo.name;
    //用户已经登录
    if(token){
        //用户已经登陆了，还想去login【不能去，停留在首页】
        if(to.path=='/login'||to.path=='/register'){
            next('/');
        }else{
            //登陆了，但访问的不是login，是【search、detail、shopcart】
            if(name){
                next();
            }else{
                try {
                    //通过token获取用户信息在首页展示，mounted只执行一次，页面刷新，还会再
                    await store.dispatch('getUserInfo');
                    //放行
                    next();
                } catch (error) {
                    //token失效了，没有向后台获取到用户信息，要重新登录
                    //现在需要清除token、用户信息后，跳转到登录界面
                    await store.dispatch('userLogout');
                    next('/login');
                    alert(error.message);
                }
            }
        }
    }else{
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if(toPath.indexOf('/trade')!= -1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            //把未登录的
            next('/login?redirect='+toPath);
        }else{
            //去的不是上面这些路由（home|search|shopcart）---放行
            next();
        }
        

    }
});

export default router;