复习：
    1、完成了登录与注册的静态组件【asserts文件夹：组件共用的静态资源 CSS当中书写@符号 要加~】
    2、表单的验证暂时没有处理
    3、vuex存储数据是非持久化的

/*****************************/
1）登录过后首页用户信息的展示
    1.1 当用户注册完成，用户登录【用户名+密码】向服务器发请求（组件派发action:userLogin）
        登陆成功获取到token，存储在仓库中（非持久化的），路由跳转到home首页
    1.2 因此在首页当中（mounted）派发action（getUserInfp）获取用户信息，一级动态展示header组件内容

    1.3 一刷新home首页，获取不到用户信息（token：vuex非持久化存储）

    1.4 持久化存储token

    1.5 存在问题
        1. 多个组件展示用户信息，需要在每一个组件的mounted中触发 this.$store.dispatch('getUserInfo');（不行）
        
        2. 用户已经登录了，不应该再回登录页

2）退出登录

3）导航守卫
    导航：表示路由正在发生改变，进行路由跳转
    守卫：路由发生跳转时的约束条件

    全局守卫：所有的组件都可以使用

    路由独享守卫：单个路由使用

    组件内守卫：单个组件使用
        
    解决上述 1.5存在的问题
    比如：用户已经登录，用户不应该还能打开login页面

4）整个项目：游客（uuid）与用户（token），后台老师以token为大

5）结算页，要用统一的账号，不然获取不到数据
    13700000000 111111

6）获取交易页面用户信息？
    用户登录了，才能获取用户地址信息