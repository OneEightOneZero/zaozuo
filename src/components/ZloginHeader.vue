<template>
  <div>
    <p class="iconfont icon-houtui houtui" @click="huitui"></p>
    <p class="logo">
        <span class="ziti">造作ZAOZUO</span>
    </p>
  </div>
</template>

<script>
import "../../libs/iconfont/iconfont.css";
export default {
  methods: {
    huitui(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.houtui {
  line-height: 1.3158rem;
  font-size: 0.8421rem;
  background: #fff;
  color: black;
}
.logo{
    width: 100%;
    text-align: center;
}
.ziti{
    font-weight: 900;
    font-size: 0.6316rem;
}
</style>
