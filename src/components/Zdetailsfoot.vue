<template>
  <div id="footer">
    <div class="weui-flex">
      <div class="weui-flex__item">
        <div class="placeholder"><i></i>客服</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder"><i></i>购物车</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">立即购买</div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 20;
    background-color: #fff;
}
.weui-flex{
    height: 50px;
}
.weui-flex__item {
  text-align: center;
  line-height: 50px;
}
.weui-flex :nth-child(1) {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 15%;
}
.weui-flex :nth-child(2) {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 15%;
}
.weui-flex :nth-child(3) {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 35%;
  font-size: 14px;
}
.weui-flex :nth-child(4) {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 35%;
  font-size: 14px;
  color:#fff;
  background-color: #000;
}

</style>