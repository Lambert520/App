//路由配置的信息

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

export default [
    {
        path: '/home',
        component: Home,
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
        //函数写法：可以params参数、query参数，通过props传递给路由组件(常用)
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
        //
        path: '/trade',
        component: Trade,
        meta: { show: true },
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]