<template>
  <div>
    <div id="designer">
      <img
        class="img-bg"
        src="https://img.zaozuo.com/8b6f4182e8256b524c70d6b4a8660220?x-oss-process=image/format,jpg/interlace,1"
      >
      <dl class="des-dl">
        <dt>
          <img class="img-ph" src="https://img.zaozuo.com/4ea7540177b3b2619e4e4bbe545f72c8@!small">
        </dt>
        <dd>
          <p class="name">Sebastian Herkner</p>
          <p class="contry">Germany | Hessen</p>
        </dd>
        <dd
          class="intr"
        >生于1981年的德国设计师，毕业于奥芬巴赫艺术设计大学，2006年成立了个人设计工作室，受委托为ClassiCon、Gervasoni、Moroso、Rosenthal等一系列家居家具品牌设计产品。...</dd>
        <dd>
          <a class="more" href="#">了解更多></a>
        </dd>
      </dl>
    </div>
    <div id="dels">
      <dl>
        <dt>
          <h2>汲取中国古典美学的全实木温暖木作</h2>
          <p>造作花间实木小桌®，德国Sebastian Herkner在英国描画盛唐</p>
        </dt>
      </dl>
      <img
        class="img-dels"
        src="https://img.zaozuo.com/0174f5d772bdaad2b50089ba950e84bc?x-oss-process=image/format,jpg/interlace,1"
      >
    </div>
    <div id="combine">
      <h2>造作官方推荐组合</h2>
      <div>
        <div class="com-top">
          <h3>花间实木小桌高桌+矮桌</h3>
          <span>¥1425</span>
          <span>最高可省¥73</span>
          <div class="addcar">加入购物车</div>
        </div>
        <div class="item-comb">
          <div class="item1">
            <dl>
              <dt><img src="https://img.zaozuo.com/618045039a4001a6cc25f84823cf30b7@!small"></dt>
              <dd>高桌</dd>
              <dd><span>￥599</span>&times;<span>1</span></dd>
            </dl>
          </div>
          <div class="item2">
            <dl>
              <dt><img src="https://img.zaozuo.com/3d85b1c9a0e39b42aa01c3ad1a0784f4@!small"></dt>
              <dd>矮桌</dd>
              <dd><span>￥899</span>&times;<span>1</span></dd>
            </dl>
          </div>
        </div>
      </div>
      <a class="more-com" href="">查看更多优惠组合</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#designer {
  position: relative;
  margin-bottom: 30px;
}
.des-dl {
  position: absolute;
  left: 10%;
  top: 15%;
}
#designer .img-bg {
  width: 100%;
}
dl .img-ph {
  width: 100px;
  height: 100px;
}
.name,
.contry,
.intr,
.more {
  color: #fff;
}
.name {
  font-size: 30px;
  font-weight: 900;
}
.contry {
  font-size: 20px;
}
.intr {
  font-size: 14px;
}
.more {
  font-size: 14px;
}
.img-dels {
  width: 100%;
}
#dels {
  padding-top: 30px;
  border-top: 10px solid #f6f6f6;
}
#dels h2 {
  font-size: 20px;
}
#dels dl {
  text-align: center;
}
#dels p {
  color: #a0a0a0;
}
#combine {
  padding: 20px 20px;
  margin-bottom:100px;
}
#combine h2{
font-size: 20px;
text-align: center;
}
.com-top {
  padding: 10px 20px;
  background-color: #f6f6f6;
  position: relative;
}
.com-top .addcar{
    position: absolute;
    right: 20px;
    top:10px;
    height: 30px;
    width: 80px;
    background-color: #000;
    color:#fff;
    text-align: center;
    line-height: 30px;
}
.item1,.item2{
    display: inline-block;
    text-align: center;
}
#combine img{
    width:150px;
}
.more-com{
    display: block;
    width:150px;
    height: 30px;
    border-radius: 20px;
    border:1px solid #000;
    text-align: center;
    line-height: 30px;
    font-size:16px;
    margin:10px auto ;
    color:#000;
}
</style>