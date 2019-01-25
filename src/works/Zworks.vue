<template>
  <div class="container" id="container">
    <div class="page navbar js_show">
      <div class="page__bd" style="height: 100%;">
        <div class="weui-tab">
          <div class="weui-navbar header">
            <div @click="houtui" class="weui-navbar__item back iconfont icon-houtui"></div>
            <router-link to="/app/home" class="weui-navbar__item homepage iconfont icon-home"></router-link>
            <div class="weui-navbar__item headline">全作品</div>
          </div>
          <!-- //侧边导航 -->
          <div class="weui-navbar sidebar">
            <div v-for="(item,id) in worksBar" :key="id" @click="border(id)">
              <router-link
                :to="`${item.jump}/${id}`"
                class="weui-navbar__item sidebar-item"
                :class="{
                'cur':id==cur
                }"
                v-text="item.name"
              ></router-link>
            </div>
          </div>
          <!-- ========== -->
          <div id="box">
            <router-view></router-view>
            <!-- ============ -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../libs/iconfont/iconfont.css";
export default {
  name: "box",
  components: {},
  data() {
    return {
      worksBar: [
        {
          name: "沙发",
          jump: "/app/Zworks/ZworksSofa"
        },
        {
          name: "床.床具",
          jump: "/app/Zworks/Zworksbed"
        },
        {
          name: "柜架",
          jump: "/app/Zworks/ZworksChest"
        },
        {
          name: "椅凳",
          jump: "/app/Zworks/ZworksStool"
        },
        {
          name: "桌几",
          jump: "/app/Zworks/ZworksTable"
        },
        {
          name: "灯具",
          jump: "/app/Zworks/ZworksLamp"
        },
        {
          name: "家纺",
          jump: "/app/Zworks/ZworksMendale"
        },
        {
          name: "餐具",
          jump: "/app/Zworks/ZworksCutlery"
        },
        {
          name: "装饰",
          jump: "/app/Zworks/ZworksDecorate"
        },
        {
          name: "系列",
          jump: "/app/Zworks/ZworksSerise"
        },
        {
          name: "COSOM",
          jump: "/app/Zworks/ZworksCosmo"
        },
        {
          name: "礼品",
          jump: "/app/Zworks/ZworksGift"
        }
      ],
      cur: this.$route.params.id
    };
  },
  methods: {
    border() {
      this.cur = this.$route.params.id;
    },
    houtui() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.weui-navbar {
  position: fixed;
  z-index: 900;
  top: 0;
  width: 100%;
  background-color: #fff;
}
.back {
  flex: 1;
  color: #000;
  font-size: 20px;
  border-right: 1 solid #000;
}
.homepage {
  flex: 1;
  color: #000;
  font-size: 20px;
  border-left: 1 solid #313131;
}
.headline {
  flex: 8;
  color: #313131;
  font-weight: 700;
  padding-right: 16%;
}
.weui-navbar__item:after {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: none;
  color: #cccccc;
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
.sidebar {
  display: flex;
  position: fixed;
  left: 0;
  z-index: 500;
  top: 50px;
  width: 27%;
  background-color: #fff;
  flex-direction: column;
  border-right: 1px solid #d2d2d2;
}
.sidebar-item {
  padding: 13.5% 0;
  font-weight: 700;
}
.cur {
  background: #c8e9f8;
}
/* 右边商品内容样式 */
#box {
  position: absolute;
  top: 50px;
  left: 27%;
  width: 73%;
  min-height: 200px;
}
.list {
  display: flex;
}
.tlimg {
  width: 90%;
  max-height: 80px;
  margin: 9% auto 2%;
  border: 0 none;
  vertical-align: top;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.goods {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sofaImg {
  width: 100%;
  margin: 10% 10%;
  display: flex;
  flex-wrap: wrap;
}
.sofaImg_item {
  flex: 2;
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sofaImg_item img {
  height: 70%;
  width: 100%;
  display: table-cell;
}
.sort-font {
  text-align: center;
}
.sort-weight {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #313131;
}
</style>
