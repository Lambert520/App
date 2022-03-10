<template>
  <div>
    <Header/>
    <!--路由出口的地方-->
    <router-view></router-view> 
    <!--在Home、Search显示的，在登录、注册隐藏-->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  export default {
      name: 'App',
      components: {

          Header,
          Footer
      },
      mounted () {
          //派发一个action，获取商品分类的三级列表的数据
          //通知Vuex发请求，获取数据，存储于仓库当中
          this.$store.dispatch("categoryList");
      }
  }
</script>

<style>

</style>
