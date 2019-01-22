<template>
  <div id="ZnewGoods">
    <article class="index-content clearfixed">
      <div class="index-module-title bg" id="3">
        <h2>Z Runway 新品发布台</h2>
        <div class="top-line">
          <p>入手大牌设计师正品，不必溢价</p>
          <p class="last">从设计到制造直线到家</p>
        </div>
      </div>
    </article>
    <div class="prefectgoods-container clearfixed ga-wrapper">
      <div v-for="(item,idx) in data" :key="idx" class="index-float-two newindex clearfixed">
        <a href="#">
          <img alt="item.name" :src="item.links" style="visibility: visible; display: inline;">
        </a>
        <div class="clearfixed">
          <a href="#">
            <h3 class="box-sub-name" v-text="item.name">半月湾沙发</h3>
          </a>
          <p class="box-sub-price">
            <i class="es-font qijia">￥{{item.price}}</i>
          </p>
        </div>
        <ul class="box-sub-tag-ct">
          <li class="available box-sub-tag">{{item.color_type}}色可选</li>
        </ul>
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
          guid: 300508,
          name: "半月湾沙发",
          color_type: 3,
          price: 3499,
          links:
            "https://img.zaozuo.com/dc11a6d228773e50bf17594162850043@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300504,
          name: "青山斗柜",
          color_type: 2,
          price: 2999,
          links:
            "https://img.zaozuo.com/156dcd81d234ca8db93ce14c61dc14f9@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300503,
          name: "青山衣帽架",
          color_type: 2,
          price: 299,
          links:
            "https://img.zaozuo.com/8903a208e76b28419094151371b8096c@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300502,
          name: "青山储物格",
          color_type: 3,
          price: 399,
          links:
            "https://img.zaozuo.com/4ce34a02e551ce12753f91e7a5eb90dc@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300507,
          name: "雁翎沙发",
          color_type: 3,
          price: 2999,
          links:
            "https://img.zaozuo.com/784aa8f1b566c961a4896329252a0ce4@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300317,
          name: "松明床",
          color_type: 2,
          price: 5599,
          links:
            "https://img.zaozuo.com/bc41f2ea8da5878cd0634ed26c4fe371@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300365,
          name: "原野柔纤地毯",
          color_type: 2,
          price: 169,
          links:
            "https://img.zaozuo.com/e4e581920590bbe97c26f9696cb6e9be@!small?x-oss-process=image/format,jpg/interlace,1"
        },
        {
          guid: 300365,
          name: "樱花羊羔毛围巾",
          color_type: 2,
          price: 198,
          links:
            "https://img.zaozuo.com/792625aa514330323e3952cea06d3cbf@!small?x-oss-process=image/format,jpg/interlace,1"
        }
      ]
    };
  }
};
</script>

<style scope>
.index-content {
  padding: 0 0.75rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.index-module-title.bg {
  padding-bottom: 0.3125rem;
  padding: 0 0 0.625rem;
  text-align: center;
}
.index-module-title > h2 {
  display: table;
  margin: 0 auto;
  font-size: 0.4737rem;
}
.index-module-title > .top-line {
  display: inline-block;
  margin: 0.2rem auto;
}
.index-module-title p {
  display: table;
  -webkit-text-size-adjust: none;
  font-size: 0.3158rem;
  margin: 0 auto;
  color: #a0a0a0;
}
.index-module-title p.last {
  margin: 0 auto;
  padding: 0;
}
.prefectgoods-container {
  width: 100%;
  padding-bottom: 0.0263rem;
}
.index-float-two {
  width: 3.9474rem;
  height: 4.6842rem;
  margin-left: 0.7895rem;
  float: left;
  text-align: center;
}
.index-float-two > a > img {
  width: 70%;
  opacity: 0.95;
  visibility: hidden;
}
.box-sub-name {
  font-size: 0.3684rem;
}
.box-sub-price {
  font-size: 0.3684rem;
}
.box-sub-tag-ct {
  font-size: 0.3684rem;
}
</style>