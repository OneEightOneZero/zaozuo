<template>
  <div>
    <div class="weui-navbar">
      <div class="wap-logo"></div>
      <div class="weui-navbar__item weui-bar__item_on">首页</div>
      <div class="weui-navbar__item">全作品</div>
      <div class="weui-navbar__item">我的</div>
      <div class="weui-navbar__item">购物车</div>
    </div>

    <div class="weui-navbar nav_2" v-show="nav_show">
      <div class="weui-navbar__item"><a href="#behalf">代表作</a></div>
      <div class="weui-navbar__item"><a href="#found">发现</a></div>
      <div class="weui-navbar__item"><a href="#ZnewGoods">新品区</a></div>
      <div class="weui-navbar__item"><a href="#ZnewGoods">分类</a></div>
      <div class="weui-navbar__item"><a href="#ZnewGoods">晒单</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    nav_show(){
      return this.$store.getters.get_nav_show
    }
  },

  methods: {
    nav_show_0() {
      window.onscroll = ()=> {
        var y = window.scrollY;
        if (y > 280) {
          this.$store.commit("upd_nav_show", true);
        } else {
          this.$store.commit("upd_nav_show", false);
        }
      };
    }
  },

  created () {
    this.nav_show_0();
  }
};
</script>

<style scoped>
.wap-logo {
  width: 100px;
  height: 50px;
  margin: 0 10px;
  float: left;
  background: url(https://img.zaozuo.com/e566f2502a9b33ccfaf6341e138b06b0)
    no-repeat left;
  background-size: 100% auto;
}
.weui-navbar__item:after {
  display: none !important;
}
.weui-navbar {
  position: static;
}
.weui-navbar:after {
  display: none !important;
}
.nav_2{
  position: fixed;
  top: 0;
  left: 0;
}
a{
  text-decoration: none;
}
</style>