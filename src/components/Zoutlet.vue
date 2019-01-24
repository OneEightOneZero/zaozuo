<template>
  <div class="container" id="container">
    <div class="page flex js_show">
      <div class="page__hd">
        <h1 class="page__title">Z Stores 全国实体门店</h1>
      </div>
      <div class="page__bd page__bd_spacing">
        <!-- ============ -->
          <div class="weui-flex">
            <div class="weui-flex__item designImg">
              <img
                class="placeholder"
                src="https://img.zaozuo.com/93b4f189baaff5617fb6eff5d93557f4?x-oss-process=image/format,jpg/interlace,1"
              >
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder series">成都西宸天街店 | 龙湖西宸天街2F-17</div>
            </div>
          </div>
         
        <!-- ================ -->
    
        <!-- 独立的，点击查看全部房间套装 -->
        <div class="page__bd page__bd_spacing">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <div class="placeholder lookOver">查看全国13家分店</div>
            </div>
          </div>
        </div>
        <!-- ============== -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.page__title {
  text-align: center;
  font-size: 0.5263rem;
  font-weight: 900;
}

.designImg img {
  width: 100%;
  height: 100%;
}
.series {
  color: #313131;
  margin-left: 5%;
  font-weight: 400;
  font-size: 0.3684rem;
  line-height: 1.0526rem;
}

.lookOver {
  width: 90%;
  height: 55%;
  margin: 10px auto 1.0526rem;
  background: #000;
  font-size: 0.4737rem;
  color: #fff;
  line-height: 1.5789rem;
  text-align: center;
  letter-spacing: 0.1053rem;
  display: block;
}

</style>
