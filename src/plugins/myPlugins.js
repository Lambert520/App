//Vue插件一定暴露一个对象
let myPlugins = {};

myPlugins.install = function(Vue,options){
    //Vue.prototype.$bus：任何组件都可以使用
    //vue.directive()：全局自定义指令
    //Vue.component()：全局组件
    //Vue.filter：全局过滤器
    Vue.directive(options.name,(element,params)=>{
        //自定义指令的回调函数，第一个参数代表指令操作的dom，第二个参数是一个对象，包含指令名字，绑定参数的值
        element.innerHTML = params.value.toUpperCase();
        console.log(params)
    })

}

export default myPlugins
