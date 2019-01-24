<template>
  <div>
    <Znav/>
    <Zswiper/>
    <Zrepresent/>
    <Zfound/>
    <ZnewGoods/>
    <Zsort/>
    <Zdesign/>
    <Zdisplay/>
    <Zoutlet/>
    <Zfooter/>
  </div>
</template>

<script>
// 导航
import Znav from "../components/Znav";

//轮播图
import Zswiper from "../components/Zswiper.vue";

//定义作品集
import Zrepresent from "../components/Zrepresent.vue";

//发现
import Zfound from "../components/Zfound";

//新品区
import ZnewGoods from "../components/ZnewGoods";

//分类
import Zsort from "../components/Zsort";
import Zdesign from "../components/Zdesign";

//晒单
import Zdisplay from "../components/Zdisplay";
import Zoutlet from "../components/Zoutlet";
import Zfooter from "../components/Zfooter";

export default {
  components: {
    Zswiper,
    Zrepresent,
    Znav,
    Zfound,
    ZnewGoods,
    Zsort,
    Zdesign,
    Zdisplay,
    Zoutlet,
    Zfooter
  }
};
</script>

<style scoped>
</style>
