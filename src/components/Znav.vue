<template>
  <div>
    <div class="weui-navbar">
      <div class="wap-logo"></div>
      <router-link to="/app/home" class="weui-navbar__item">首页</router-link>
      <router-link to="/app/Zworks/ZworksSofa/0" class="weui-navbar__item">全作品</router-link> 
      <router-link to="/app/my" class="weui-navbar__item">我的</router-link> 
      <router-link to="/app/car" class="weui-navbar__item">购物车</router-link>
    </div>

    <div class="weui-navbar nav_2" v-show="nav_show">
      <div class="weui-navbar__item">
        <a href="#behalf">代表作</a>
      </div>
      <div class="weui-navbar__item">
        <a href="#found">发现</a>
      </div>
      <div class="weui-navbar__item">
        <a href="#ZnewGoods">新品区</a>
      </div>
      <div class="weui-navbar__item">
        <a href="#Zsort">分类</a>
      </div>
      <div class="weui-navbar__item">
        <a href="#Zdisplay">晒单</a>
      </div>
    </div>

    <!-- 引入字体图标 -->
    <div class="huiding" v-show="ding">
      <p class="iconfont icon-huidingbu ziti1" ref="huiding" @click="The_top"></p>
      <p class="iconfont icon-kefu ziti2"></p>
    </div>
  </div>
</template>

<script>
import "../../libs/iconfont/iconfont.css";
export default {
  data() {
    return {
      ding: false
    };
  },

  computed: {
    nav_show() {
      return this.$store.getters.get_nav_show;
    }
  },

  methods: {
    nav_show_0() {
      window.onscroll = () => {
        var y = window.scrollY;
        if (y > 280) {
          this.$store.commit("upd_nav_show", true);
          this.ding = true;
        } else {
          this.$store.commit("upd_nav_show", false);
          this.ding = false;
        }
      };
    },

    //回顶部
    The_top() {
      clearInterval(this.times)
      this.times = setInterval(() => {
        let oy = window.scrollY;
        oy = oy - 10;
        if (oy < 0) {
          oy = 0;
          clearInterval(this.times);
        }
        window.scrollTo(0, oy);
      }, 5);
    }
  },

  created() {
    this.nav_show_0();
  }
};
</script>

<style scoped>
.wap-logo {
  width: 2.6316rem;
  height: 1.3158rem;
  margin: 0 0.2632rem;
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
.nav_2 {
  position: fixed;
  top: 0;
  left: 0;
}
a {
  text-decoration: none;
}
.sho_car {
  position: relative;
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.3421rem 0;
  text-align: center;
  font-size: 0.3947rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.huiding {
  position: fixed;
  top: 8.4211rem;
  right: 0;
  border: 0.0263rem solid #ccc;
  z-index: 800;
}
.ziti1,
.ziti2 {
  width: 1.3158rem;
  height: 1.3158rem;
  font-size: 1.0526rem;
  margin: 0;
  line-height: 1.3158rem;
  text-align: center;
  color:#a0a0a0;
}
.ziti1 {
  border-bottom: 0.0263rem solid #ccc;
}
</style>