//路由配置的信息

//引入一级路由组件
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

//引入二级路由组件
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupCenter'

/*
    当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
    如果我们能把不同路由对应的组件分割成不同的代码块，
    然后当路由被访问的时候才加载对应组件，这样就会更加高效。
*/

//路由配置信息
export default [
    {
        path: '/home',
        //路由懒加载
        component: ()=> import('@/pages/Home'),
        //路由元信息key不能瞎写，只能叫做meta，表示footer组件要不要展示
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        //？表示传不传都行
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true },
        name: 'search',
        //路由组件能不能传递props数据？
        //布尔值写法:
        // props: true
        //对象写法：额外的给路由组件传递一些参数props
        // props:{a:1,b:2}
        //函数写法：可以传params参数、query参数，通过props传递给自己使用，组件中使用props接收(常用)
        props: ($route) => {
            return { categoryid: $route.query.categoryid, categoryname: $route.query.categoryname }
        }

    },
    {
        //产品详细信息路由
        path: '/detail/:skuId?',
        component: Detail,
        //路由元信息key不能瞎写，只能叫做meta，表示Footer组件要不要展示
        meta: { show: true }
    },
    {
        //添加购物车路由
        path: '/addcartsuccess',
        component: AddCartSuccess,
        name: 'AddCartSuccess',
        meta: { show: true }
    },
    {
        //购物车路由
        path: '/shopcart',
        component: ShopCart,
        name: 'ShopCart',
        meta: { show: true }
    },
    {
        //结算
        path: '/trade',
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter(to, from, next) {
            //去交易界面，必须是从购物车而来
            if (from.path == '/shopcart') {
                next();
            } else {
                //中断当前导航，URL变成from的path
                //其他路由组件过来，停留在当前
                next(false);
            }
        }
    },
    {
        //提交订单
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: { show: true },
        beforeEnter(to, from, next) {
            if (from.path == '/trade'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        //支付成功
        path: '/paysuccess',
        component: PaySuccess,
        meta: { show: true }
    },
    {
        //个人中心
        path: '/center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
                meta: { show: true }
            },
            {
                path: 'grouporder',
                component: GroupOrder,
                meta: { show: true }
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '/',
        redirect: '/home'
    }
]