<template>
  <div>
    <div class="weui-navbar nav">
      <div class="wap-logo"></div>
      <router-link to="/app/home" class="weui-navbar__item">首页</router-link>
      <router-link to="/app/Zworks/ZworksSofa/0" class="weui-navbar__item">全作品</router-link>
      <router-link to="/app/my" class="weui-navbar__item">我的</router-link>
      <router-link to="/app/car" class="weui-navbar__item">购物车</router-link>
    </div>
    <!-- 引入字体图标 -->
    <div class="huiding" v-show="ding">
      <p class="iconfont icon-huidingbu ziti1" ref="huiding" @click="The_top"></p>
      <p class="iconfont icon-kefu ziti2"></p>
    </div>
    <!-- 内容区 -->
    <div class="container" id="container">
      <div class="page flex js_show">
        <div class="page__hd account">
          <div class="page__title via">
            <img src="../assets/2.jpg" alt>
          </div>
          <p class="page__desc name">13503045337</p>
        </div>
        <div class="page__bd page__bd_spacing">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder what">
                <p class="ico iconfont icon-huiyuanzhongxin"></p>
                <p class="description">会员中心</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-wodedingdan"></p>
                <p class="description">我的订单</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-wodeyouhuiquan"></p>
                <p class="description">我的优惠券</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-qiapian002"></p>
                <p class="description">我的礼品卡</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-xiaoxi"></p>
                <p class="description">我的消息</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-shaidan"></p>
                <p class="description">我的晒单</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-star__easyico"></p>
                <p class="description">我的收藏</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-home"></p>
                <p class="description">个人资料</p>
              </div>
              <div class="placeholder what">
                <p class="ico iconfont icon-zhanghaoanquan"></p>
                <p class="description">账户安全</p>
              </div>
            </div>
          </div>
          <!-- 退出按钮 -->
          <div class="weui-flex">
            <div class="weui-flex__item dropout">
              <div class="logout">用户登出</div>
            </div>
          </div>
          <!-- ========== -->
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="base">
        <Zfooter/>
    </div>
  </div>
</template>

<script>
import "../../libs/iconfont/iconfont.css";
import Zfooter from '../components/Zfooter';
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
    //回顶部
    The_top() {
      clearInterval(this.times);
      this.times = setInterval(() => {
        let oy = window.scrollY;
        oy = oy - 10;
        if (oy < 0) {
          oy = 0;
          clearInterval(this.times);
        }
        window.scrollTo(0, oy);
      }, 8);
    }
  },

  created() {
    this.nav_show_0();
  },
    name: "base",
      components:{
        Zfooter
    }
};
</script>


<style scoped>
/* 内容css */
.account {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.via {
  flex: 1;
  background: pink;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
}
.via > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
}
.name {
  margin-top: 4%;
  margin-bottom: 10%;
}
.what {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  border-top: #d2d2d2 1px solid;
  width: 90%;
  margin: 2% auto 2%;
}
.ico {
  color: #000;
  margin-top: 2%;
}
.description {
  font-size: 14px;
  color: #313131;
}
.dropout {
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  height: 80px;
}
.logout {
  flex: 1;
  width: 80%;
  margin: 2% auto 2%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #000;
  font-size: 14px;
  text-align: center;
  margin-top: 21px;
}
/* ============= */
.nav {
  border-bottom: 2px solid #d2d2d2;
}
.wap-logo {
  width: 2.6316rem;
  height: 1.3158rem;
  margin: 0 0.2632rem;
  float: left;
  background: url(https://img.zaozuo.com/e566f2502a9b33ccfaf6341e138b06b0)
    no-repeat left;
  background-size: 100% auto;
  margin-left: 5%;
}
.weui-navbar__item:after {
  display: none !important;
}
.weui-navbar__item {
  font-size: 14px;
  font-weight: 600;
  color: #707070;
}
.weui-navbar {
  position: static;
  background: #fff;
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
  color: #a0a0a0;
}
.ziti1 {
  border-bottom: 0.0263rem solid #ccc;
}
</style>

