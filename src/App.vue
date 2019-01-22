<template>
  <div id="app">
    <Zswiper/>
    <Zrepresent/>
  </div>
</template>

<script>
import Zswiper from "./components/Zswiper.vue";
import Zrepresent from "./components/Zrepresent.vue";

export default {
  name: "app",
  components: {
    Zswiper,
    Zrepresent
  }
};
</script>

<style>
</style>
