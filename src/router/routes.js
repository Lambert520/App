//路由配置的信息

//引入路由组件
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
import Detail from '@/pages/Detail/index.vue'

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
        path: '/detail/:skuId',
        component: Detail,
        //路由元信息key不能瞎写，只能叫做meta，表示Footer组件要不要展示
        meta: { show: true }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '*',
        redirect: '/home'
    }
]