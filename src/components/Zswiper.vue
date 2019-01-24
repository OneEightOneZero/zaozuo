<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="../assets/swiper1.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper2.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper3.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper4.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper5.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper6.jpg" alt>
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/swiper7.jpg" alt>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>


<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style scoped>
img {
  height: 240px;
  width: 100%;
}
</style>
