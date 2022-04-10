import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false

//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'

//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'

//引入MockServer.js-----mock数据
import '@/mock/mockServer.js'

//第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);

//引入swiper样式
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'

//按需引入element-ui
import { Button, MessageBox } from 'element-ui'
//注册全局组件
Vue.component(Button.name,Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//统一接收api文件夹里面全部请求函数（不使用vuex方式处理请求）
import * as API from '@/api'

//引入图片懒加载插件，此处的VueLazyload是一个对象，有install方法
import VueLazyload from 'vue-lazyload'
//引入懒加载图片
import loading from '@/assets/loading.gif'
//注册插件--此处调用use方法，实际上执行的是install方法，使用Vue.prototype为Vue实例添加实例方法，属性
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading
});

//引入自定义插件
// import myPlugins from './plugins/myPlugins'
// Vue.use(myPlugins,{
//   name: 'upper'
// });

//引入表单校验插件
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router：进行变成是导航路由跳转push||replace
  router,
  //注册仓库：组件实例的身上会多一个属性 $store属性
  store,
  //全局事件总线$bus的配置(原型对象)
  //Vue.prototype加一个变量，只是给每个组件加了一个属性，这个属性的值并不具有全局性（即一个组件修改属性值，别的属性得不到,还是原来的值）
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')