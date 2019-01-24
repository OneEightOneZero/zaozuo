<template>
  <div class="container" id="Zdisplay" >
    <div class="page flex js_show">
      <div class="page__hd">
        <h1 class="page__title">精选自10万+生活家晒单/证言造作美学</h1>
      </div>
      <div class="page__bd page__bd_spacing">
        <!-- ============ -->
        <div class="weui-flex designImg">
          <div class="weui-flex__item designImg_item">
            <img
              class="placeholder"
              src="https://img.zaozuo.com/8a2e94cf4fb9fce10a1089754708f0d2@!small"
            >
             <img
              class="placeholder"
              src="https://img.zaozuo.com/8a2e94cf4fb9fce10a1089754708f0d2@!small"
            >
             <img
              class="placeholder"
              src="https://img.zaozuo.com/8a2e94cf4fb9fce10a1089754708f0d2@!small"
            >
             <img
              class="placeholder"
              src="https://img.zaozuo.com/8a2e94cf4fb9fce10a1089754708f0d2@!small"
            >
          </div>
        </div>

        <!-- ================ -->
        <!-- 独立的，点击查看更多晒单 -->
        <div class="page__bd page__bd_spacing">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder lookOver">查看更多晒单</div>
            </div>
          </div>
        </div>
        <!-- ============== -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 10%;
  border-top: 0.3947rem solid #f6f6f6;
}
.page__title {
  text-align: center;
  font-size: 0.3947rem;
  font-weight: 900;
}
.page__desc {
  color: #a0a0a0;
  text-align: center;
  font-size: 0.3684rem;
  line-height: 0.3684rem;
  margin: -0.2632rem 0 0.5263rem 0;
}

.designImg {
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.designImg_item {
  display: flex;
   flex-wrap: wrap;
}
.designImg img {
  flex: 1;
  width: 33%;
  height: 47%;
}
.designImg img:nth-of-type(odd){
  padding-left: 4%;
}
.designImg img:nth-of-type(even){
  padding-left: 4%;
  padding-right: 4%;
}
.series {
  color: #313131;
  margin-left: 5%;
  font-weight: 700;
  font-size: 0.4211rem;
  line-height: 1.0526rem;
}
.privilege {
  margin-left: 5%;
  color: #a0a0a0;
  font-weight: 400;
  font-size: 0.3684rem;
  margin-bottom: 10%;
}
.lookOver {
  width: 90%;
  height: 55%;
  margin: 0.2632rem auto 1.0526rem;
  background: #000;
  font-size: 0.4737rem;
  color: #fff;
  line-height: 1.5789rem;
  text-align: center;
  letter-spacing: 0.1053rem;
  display: block;
}
</style>
