<template>
  <div class="weui-navbar" style="position: relative">
    <span @click="houtui" class="iconfont icon-houtui" id="houtui"></span>
    <div class="title">购物车</div>
    <div class="cao_zuo">数量</div>
  </div>
</template>

<script>
import "../../libs/iconfont/iconfont.css";
export default {
    methods: {
        houtui(){
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.title {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 0.3421rem 0;
  text-align: center;
  font-size: 0.3947rem;
  background-color: #fff;
  font-weight: 900;
}
.cao_zuo {
  width: 1.5789rem;
  display: table-cell;
  background-color: #fff;
  font-size: 0.4211rem;
  line-height: 1.3158rem;
}
#houtui {
  line-height: 1.3158rem;
  font-size: 0.5263rem;
  background: #fff;
  color: black;
}
</style>
