<template>
  <div>
    <Znav/>
    <Zswiper/>
    <Zrepresent/>
    <Zfound/>
    <ZnewGoods/>
  </div>
</template>
<script>
import Zswiper from "../components/Zswiper.vue";
import Zrepresent from "../components/Zrepresent.vue";
import Znav from "../components/Znav";
import Zfound from "../components/Zfound";
import ZnewGoods from "../components/ZnewGoods";

export default {
  components: {
    Zswiper,
    Zrepresent,
    Znav,
    Zfound,
    ZnewGoods
  }
};
</script>
<style scoped>
    
</style>