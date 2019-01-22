<template>
  <div id="app">
    <Znav/>
    <Zfound/>
    <ZnewGoods/>
  </div>
</template>

<script>
import Znav from "./components/Znav";
import Zfound from "./components/Zfound";
import ZnewGoods from "./components/ZnewGoods";

export default {
  name: "app",
  components: {
    Znav,
    Zfound,
    ZnewGoods
  }
};
</script>

<style>
</style>
