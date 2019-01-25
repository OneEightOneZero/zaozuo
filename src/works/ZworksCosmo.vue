<template>
  <div>
    <div class="list">
      <img class="tlimg" src="https://img.zaozuo.com/2a256abc11ff9ac739c3588022b277ec?x-oss-process=image/format,jpg/interlace,1">
    </div>
    <div class="goods">
      <div class="weui-flex">
        <div class="weui-flex__item sofaImg">
          <div class="placeholder sofaImg_item">
            <img
              src="https://img.zaozuo.com/3cf7e6cb38f94434937082ae0e5401a4?x-oss-process=image/format,jpg/interlace,1"
              alt
            >
            <ul class="sort-font">
              <li class="sort-weight">
                <a href>置物柜</a>
              </li>
            </ul>
          </div>
          <!-- =========== -->

          <!-- ========== -->
        </div>
      </div>
      <!-- ========= -->
    </div>
  </div>
</template>
<style scoped>
.list {
  display: flex;
}
.tlimg {
  width: 90%;
  max-height: 80px;
  margin: 9% auto 2%;
  border: 0 none;
  vertical-align: top;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.goods {
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sofaImg {
  width: 100%;
  margin: 10% 10%;
  display: flex;
  flex-wrap: wrap;
}
.sofaImg_item {
  flex: 2;
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sofaImg_item img {
  height: 70%;
  width: 100%;
  display: table-cell;
}
.sort-font {
  text-align: center;
}
.sort-weight {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #313131;
}
</style>
