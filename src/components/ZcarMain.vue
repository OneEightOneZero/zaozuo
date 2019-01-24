<template>
  <div>
    <div class="weui-panel__bd">
      <div class="weui-media-box weui-media-box_appmsg" v-for="(item, idx) in data" :key="idx">
        <input type="checkbox" @click="one_click(idx)" v-model="choose" :value="idx">
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="item.imgurl">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="item.name"></h4>
          <p class="weui-media-box__desc" style="margin-bottom: 0.1316rem;">
            <span v-text="item.category"></span>
            <br>
            <span v-text="item.delivery"></span>
          </p>
          <p>
            <span class="ga-cartprice">¥{{item.price}}</span>
            <span style="float: right;" class="sub" @click="sub(idx)">-</span>
            <span class="ga-cartprice qty" style="float: right;">{{item.qty}}</span>
            <span style="float: right;" class="add" @click="add(idx)">+</span>
          </p>
        </div>
        <span class="del" @click="del(idx)">&times;</span>
      </div>
    </div>

    <div class="weui-tabbar">
      <div class="weui-tabbar__item" style="padding-left: 0.3947rem;">
        <p style="float: left;" @click="check_all()">
          <input type="checkbox" :checked="check_show">
          <span style="font-size: 0.4211rem;">全选</span>
        </p>
      </div>
      <div class="weui-tabbar__item">
        <p class="weui-tabbar__label" style="float: right; margin-right: 0.3947rem;">￥{{totals}}</p>
      </div>
      <div class="weui-tabbar__item xiadan" :style="{background: totals>0? 'orangered':'#bbb'}">
        <p class="weui-tabbar__label" style="color: #fff">下单</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          imgurl: "//img.zaozuo.com/dab342be2ed25d1faae0ea7440ec8246@!small",
          name: "造作花间实木小桌®",
          category: "矮桌（五叶款）／木本色",
          delivery: "预计2019-01-26前发货",
          price: "899",
          qty: 1
        },
        {
          imgurl: "//img.zaozuo.com/ceb2191111721239075c6e4b3ccb64d8@!small",
          name: "造作百合椅®",
          category: "青粉",
          delivery: "预计2019-01-26前发货",
          price: "699",
          qty: 1
        },
        {
          imgurl: "//img.zaozuo.com/8f1fae30eb1e8b60e4606aaa89458035@!small",
          name: "光匙台灯",
          category: "阳橙棕",
          delivery: "预计2019-01-26前发货",
          price: "399",
          qty: 1
        }
      ],
      check_show: false,
      choose: [],
      totals: 0
    };
  },
  methods: {
    //商品全选
    check_all() {
      this.check_show = !this.check_show;
      if (this.check_show == true) {
        for (let i = 0; i < this.data.length; i++) {
          if (this.choose.indexOf(i) >= 0) {
            continue;
          } else {
            this.choose.push(i);
          }
        }
      }
      if (this.check_show == false) {
        this.choose = [];
      }
      this.total();
    },

    //单个选商品
    one_click(idx) {
      if (this.choose.indexOf(idx) >= 0) {
        //点击时存在该id，将id从数组choose中裁剪取消
        this.choose.splice(this.choose.indexOf(idx), 1);
      } else {
        //点击时不存在该id，将id推入数组choose中
        this.choose.push(idx);
      }
      if (this.choose.length == this.data.length) {
        this.check_show = true;
      } else {
        this.check_show = false;
      }
      this.total();
    },

    //总价计算
    total() {
      let total = 0;
      // console.log(this.choose);
      for (let i = 0; i < this.choose.length; i++) {
        total +=
          this.data[this.choose[i]].price * this.data[this.choose[i]].qty;
      }
      this.totals = total;
    },

    // 单个商品删除
    del(idx) {
      if (this.choose.indexOf(idx) >= 0) {
        this.choose.splice(this.choose.indexOf(idx), 1);
        for (let j = 0; j < this.choose.length; j++) {
          if (this.choose[j] >= idx) {
            this.choose[j] -= 1;
          }
        }
      }
      this.data.splice(idx, 1); //裁剪data中id=idx的数据, 裁剪原数组改变
      this.total();1
      if(this.choose == ''){
        this.check_show = false;
      }
    },

    //单个商品数量加加
    add(idx) {
      this.data[idx].qty++;
      this.total();
    },

    //单个数量减减
    sub(idx) {
      if (this.data[idx].qty > 1) {
        this.data[idx].qty--;
      } else {
        this.data[idx].qty = 1;
      }
      this.total();
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.ga-cartprice {
  font-size: 0.4211rem;
  font-weight: 400;
}
.weui-panel__bd {
  margin-top: 0.5263rem;
}
.weui-tabbar__item {
  line-height: 1.3158rem;
  padding: 0;
}
.xiadan {
  width: 2.1053rem;
  font-size: 0.4211rem;
}
.weui-tabbar__label {
  font-size: 0.3684rem;
  line-height: 1.3158rem;
  text-align: center;
}
.sub,
.add,
.qty {
  display: inline-block;
  width: 0.6053rem;
  height: 0.6053rem;
  border: 0.0263rem solid #ccc;
  text-align: center;
  line-height: 0.6053rem;
  font-size: 0.4211rem;
}
.qty {
  width: 1.2105rem;
  border-left: none;
  border-right: none;
}
.del {
  display: block;
  width: 0.6316rem;
  height: 0.6316rem;
  border: 0.0263rem dashed #ccc;
  position: absolute;
  top: 0.3947rem;
  right: 0.3947rem;
  font-size: 0.5263rem;
  text-align: center;
  line-height: 0.6316rem;
}
</style>
