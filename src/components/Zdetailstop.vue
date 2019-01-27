<template>
  <div class="page__bd page__bd_spacing">
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="placeholder">
          <img :src="res.imgurl" alt>
        </div>
      </div>
    </div>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="placeholder">
          <p class="goodsname" v-text="res.goodsname"></p>
        </div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">
          <p class="collect">
            <i></i>已收藏
          </p>
        </div>
      </div>
    </div>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="placeholder">
          <p class="Engoodsname">Bloom Side Table</p>
        </div>
      </div>
    </div>
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="placeholder">
          <p class="price" v-text="res.price"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: ''
    }
  }, 

  methods: {
    async shuju() {
      let idx = this.$route.params.id;
      let data = await this.$axios.get(`${this.$store.state.ip}/details`, {
        params: {
          'id': idx
        }
      });
      this.res = data.data[0];
    }
  },
  created() {
    this.shuju();
  }
};
</script>
<style scoped>
img {
  height: 210px;
  width: 100%;
}
.goodsname {
  text-align: left;
  font-size: 16px;
  padding-left: 20px;
}
.goodsname {
  text-align: left;
  font-size: 16px;
}
.collect {
  text-align: right;
  font-size: 14px;
  padding-right: 20px;
  padding-top: 4px;
}
.Engoodsname,
.price {
  font-size: 14px;
  padding-left: 20px;
  margin: 3px 0;
}
</style>