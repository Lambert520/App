<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="li in list" :key="li.id" >
        <img :src="li.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引包
import Swiper from "swiper";

export default {
  name: "Carsousel",
  props: ['list'],
  watch: {
    floor: {
      //立即监听：不管你数据有没有变化，我上来就立即监听
      //为什么watch监听不到floor，因为这个数据从来就没有变化（数据是父亲给的，父亲给的时候就是一个对象，对象里面该有的数据都有）
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper, {
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点小球时也切换图片
              clickable: true,
            },
            //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevE1: ".swiper-button-prev",
            },
          });
        });
      },
    },
  } 
};
</script>

<style>
</style>