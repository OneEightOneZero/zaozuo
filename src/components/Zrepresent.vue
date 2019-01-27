<template>
  <div id="behalf">
    <div class="page__hd">
      <h1 class="page__title">Z Signature 定义作品集</h1>
      <p class="page__desc">有人说造作是家居设计界的G20</p>
      <p class="page__desc">其实我们更关心如何从大师走到大众</p>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="weui-flex__item" v-for="(item, idx) in goods" :key="idx">
        <div class="placeholder">
          <div @click="tiaozhuan(item._id)">
            <img :src="item.imgurl">
            <h3 v-text="item.goodsname"></h3>
            <p v-text="item.price"></p>
            <p>{{`${item.color.length}色可选`}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    async goods0() {
      let shuju = await this.$axios.get(`${this.$store.state.ip}/goods`);
      this.goods = shuju.data;
    },
    tiaozhuan(id){
      this.$router.push({name:'details',  params:{id: id }})
    }
  },
  created() {
    this.goods0();
  }
};
</script>
<style scoped>
.page__hd {
  text-align: center;
}
.page__title {
  font-size: 0.4737rem;
}
.page__desc {
  font-size: 0.3158rem;
  color: #ccc;
  margin: 5px 0;
}
img {
  width: 3.9474rem;
  height: 3.9474rem;
}
.placeholder {
  text-align: center;
}
h3 {
  font-size: 0.3684rem;
  color: #313131;
}
p {
  font-size: 0.2632rem;
  color: #ccc;
}
.weui-flex__item {
  width: 3.9474rem;
  height: 4.6842rem;
  margin-left: 0.7895rem;
  display: inline-block;
  text-align: center;
}
</style>
