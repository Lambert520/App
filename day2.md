1：编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误？
    --路由跳转的两种形式：声明式导航、编程式导航
    --声明式导航没有这类问题，因为vue-router底层已经处理好了
    1.1 编程式导航出现这种警告信息，错误在哪？
    "vue-router": "^3.5.3"：最新的vue-router引入promise

    function push(){
        return new Promise((resolve,reject)=>{

        })
    }
    1.2 通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前的错误，可以解决（治标不治本）
        this.$router.push({name: 'search',params: {keyword: this.keyword},query: { k: this.keyword.toUpperCase()},()=>{},()=>{}})

    1.3 上述写法，通过底部代码，可以实现解决错误，但是这种写法治标不治本，将来在别的组件当中push|replace，还是有类似错误

    1.4 
    this：当前组件实例（search）
    this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当入库文件注册路由的时候，给组件实例添加$router|$route属性
    push：VueRouter类的一个实例

    function VueRouter(){

    }
    //原型对象的方法
    VueRouter.prototype.push = function(){
        //函数的上下文为VueRouter类的一个实例
    }

2：Home模块组件拆分
    --先把静态页面完成
    --拆分出静态组件
    --获取服务器的数据展示
    --动态业务

3：三级联动组件完成
    ---由于三级联动，在Home、Search、Detail，把三级联动注册成为全局组件
    好处：只需要注册一次，就可以在项目的任意地方使用

4：完成其余静态组件
    HTML + CSS + 图片资源 -----细心【结构、样式、图片资源】

5：postman测试接口
    --经过postman工具测试，接口是没有问题的
    --服务器返回的数据code字段200，代表服务器返回数据成功
    --整个项目，接口前缀都有 /api 字样

6：axios二次封装
    XMLHttpRequest、fetch、JQ、axios

    6.1 二次封装axios原因？
    请求拦截器、响应拦截器：
        请求拦截器，可以在发请求之前处理一些业务、响应拦截器
        响应拦截器，可以在服务器返回数据之后，可以处理一些事情

    6.2 项目当中经常有API文件夹 存放【axios】
    接口当中：路径都带有 /api
    baseURL: "/api"

    6.3 axios基础不好，可以参考 git|NPM 关于axios文档

7：接口统一管理
    项目很小：完全可以在组件的生命周期函数中发请求

    项目大：统一管理

    7.1 跨域问题
    什么是跨域：协议、域名、端口号不同的请求，称之为跨域
    http://localhost:8080/#/home  ----前端项目的本地服务器
    http://39.98.123.211          ----后台服务器

    解决的方法：
    JSONP、Cores、Proxy代理

8：nprogress进度条的使用
    start：进度条开始
    done：进度条结束
    进度条颜色可以修改，需要去修改样式

9：vuex状态管理库

    9.1 Vuex是什么？
    vuex是一个官方提供的一个插件，状态管理库，集中式管理 项目中组件共用的数据
    切记：并不是全部的项目都需要vuex，如果项目很小，完全不需要vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，就是使用Vuex
    state
    mutations
    actions
    modules

    9.2 Vuex基本使用

    9.3 Vuex实现模块式开发
    如果项目过大，组件过多，接口也过多，数据也很多，可以让Vuex实现模块式开发
    {
        //将大仓库拆分成小仓库
        home:{},
        search:{}
    }

10：完成TypeNav三级联动展示数据业务
    