<template>
  <div>
    <!-- //尾部头部 -->
    <div class="container" id="container">
      <div class="page flex js_show">
        <!-- <div class="page__hd"></div> -->
        <div class="page__bd page__bd_spacing footerTop">
          <div class="weui-flex">
            <div class="weui-flex__item">
              <!-- <div class="placeholder">weui</div> -->
              <img class="placeholder footerLogo" src="../assets/1.png" alt>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item footerNav">
              <div class="footerNav">
                <div class="placeholder footerNav-item">了解造作</div>
                <div class="placeholder footerNav-item">加入造作</div>
                <div class="placeholder footerNav-item">商业合作</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部的下半部分 -->
    <div class="container footerBd" id="container">
      <!-- 下载APP -->
      <div class="page flex js_show lis">
        <div class="page__bd page__bd_spacing downbox">
          <div class="weui-flex down">
            <div class="weui-flex__item down_item downone">
              <div class="placeholder">
                <i class="iconfont icon-shouji01"></i>
              </div>
            </div>
          </div>
          <div class="weui-flex down">
            <div class="weui-flex__item down_item">
              <div class="placeholder down_app">下载造作App</div>
            </div>
          </div>
          <div class="weui-flex down">
            <div class="weui-flex__item down_item">
              <div class="placeholder down_app border_bd">全世界为你设计</div>
            </div>
          </div>
        </div>
      </div>
      <!-- //在线客服 -->
      <div class="page flex js_show lis">
        <div class="page__bd page__bd_spacing">
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div class="placeholder onLine">在线客服</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div class="placeholder phone">400-6636-926</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div class="placeholder min">(9:00~21:00)</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item evinebox">
              <div class="placeholder evine">造作全国实体店</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div
                class="placeholder bod"
              >Copyright © 2018 zaozuo.com 北京造化科技有限公司</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div class="placeholder bod">版权所有 京ICP备14049641号-1 增值电信业</div>
            </div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item down_item">
              <div class="placeholder bod finally">-全球设计师创作 家居品牌</div>
            </div>
          </div>
        </div>
      </div>
      <!-- ========= -->
    </div>
    <!-- =============== -->
  </div>
</template>
<script>
import "../../libs/footerIco/iconfont.css";
export default {};
</script>
<style scoped>
.footerTop {
  background: #000;
  text-align: center;
  position: relative;
  z-index: 3;
}
.footerLogo {
  margin: 8% 0;
  padding: 0 0.2632rem;
  height: 2.3em;
  line-height: 2.3em;
  text-align: center;
  color: #fff;
}
.footerNav {
  width: 80%;
  height: 0.7895rem;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 8%;
}
.footerNav-item {
  flex: 1;
  height: 0.7895rem;
  line-height: 0.7895rem;
  color: #fff;
  font-size: 0.4211rem;
  line-height: 0.7895rem;
  border: #fff 0.0263rem solid;
}
.footerBd {
  background: url(../assets/footerBd.jpg) no-repeat center;
  min-height: 5.2632rem;
  margin: 0;
}
.lis {
  display: flex;
  justify-content: center;
}
.downbox {
  width: 90%;
  height: 20%;
  border-bottom: rgba(255, 255, 255, 0.3) 0.0526rem solid;
}
.down_item {
  display: flex;
  justify-content: center;
}
.downone {
  margin-top: 2%;
}
.down_app {
  font-size: 0.3684rem;
  line-height: 0.5263rem;
  color: #fff;
}
.border_bd {
  margin-bottom: 8%;
}
.onLine {
  width: 2.8947rem;
  margin: 0 auto;
  margin: 24% 0 10% 0;
  background: #fff;
  color: #000;
  font-size: 0.4211rem;
  line-height: 0.7895rem;
  text-align: center;
}
.phone {
  font-size: 0.4211rem;
  color: #fff;
}
.min {
  font-size: 14px;
  color: #fff;
  margin-bottom: 15%;
}
.evinebox {
  display: flex;
  justify-content: center;
}
.evine {
  flex: 1;
  width: 8.1579rem;
  height: 0.8421rem;
  margin-bottom: 8%;
  line-height: 0.8421rem;
  text-align: center;
  font-size: 0.3684rem;
  background: #fff;
  color: #000;
  font-weight: 700;
}
.bod {
  font-size: 0.3158rem;
  line-height: 0.4211rem;
  color: #fff;
  margin: 0 auto;
}
.finally{
	margin-bottom: 15%;
}
</style>
