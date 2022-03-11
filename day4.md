复习：
    1、商品分类的三级列表由静态变成动态形式【获取服务器数据：解决跨域问题】
    2、函数防抖与节流【面试频率很高】
    3、路由的跳转：声明式导航（router-link）、编程式导航（push|replace）
    编程式导航解决这个问题：自定义属性


1：开发Search模块中的TypeNav商品分类菜单（过渡动画的效果）
    过渡动画：前提组件|元素 务必要有 v-if|v-show指令 才可以进行过渡动画

2：现在我们的商品分类三级列表可以进行优化？

    需要进行优化，请求三级列表数据方法放在 TypeNav组件中，每次使用到这个组件，都会发出请求，性能较差
    我们需要让它 放在App组件中发请求，【根组件mounted】执行一次

3：合并params和query参数?
    这样查询才能精确

4：开发Home首页当中的ListContainer组件和Floor组件？
    但是这里需要知道一件事情：服务器返回的数据（接口）只有商品分类菜单数据对于ListContainer组件与Floor组件
    数据服务器没有数据提供
    
    mock数据（模拟）：如果你想mock数据，需要用到一个插件mock.js
    使用的步骤：
    1、在项目文件夹src文件夹中创建mock文件夹
    2、准备JSON数据（mock文件夹中创建相应的JS文件）----格式化一下，不要有空格
    3、把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中】
    4、创建mockServer.js通过mock.js插件实现模拟数据
    5、mockServer.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

5：ListContainer组件的开发重点？
    步骤：
    1）引包（相应的JS|CSS）
    2）页面结构务必有
    3）（页面当中务必要有结构）：new Swiper实例【轮播图的动态效果】

    1、安装Swiper插件：需要安装swiper@5 cnpm install --save swiper@5