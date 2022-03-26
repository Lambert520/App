<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="slide.id">
        <img :src="slide.imgUrl" :class="{active:currentIndex==index}" @click="changeCurrentIndex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "ImageList",
  data () {
      return {
          currentIndex: 0
      }
  },
  props: ["skuImageList"],
  methods: {
      changeCurrentIndex(index){
        //修改响应式数据
        this.currentIndex = index;
        //通知兄弟组件，当前的索引值为几
        this.$bus.$emit('getIndex',this.currentIndex);
      }
  },
  watch: {
      //监听数据：可以保证数据一定ok，但不能保证v-for遍历结构是否完成
      skuImageList(newValue,oldValue){
        //当v-for遍历完毕后，执行一次
        this.$nextTick(()=>{

          new Swiper(this.$refs.cur,{
            //显示几个图片设置
            slidesPerView: 3,
            //每次切换图片的个数
            slidesPerGroup: 1,

            // direction: 'vertical', //垂直切换选项,不写默认是水平
            // loop: true, //循环模式选项

            //如果需要分页器
            // pagination: {
            //   el: '.swiper-pagination',
            // },

            //如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            //如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar'
            // }
          })
        })
      }
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>