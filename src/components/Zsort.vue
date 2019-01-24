<template>
  <div id="Zsort">
    <ZsortSofa/>
    <ZsortBed/>
    <ZsortCabinet/>
    <ZsortChair/>
    <ZsortStool/>
    <ZsortLamp/>
    <ZsortMendale/>
    <ZsortCutlery/>
    <ZsortBecorate/>
    <ZsortCosmo/>
    <ZsortTitanic/>
  </div>
</template>

<script>
//沙发Sofa
import ZsortSofa from "./ZsortSofa";
//床具Bed
import ZsortBed from "./ZsortBed";
//柜架Cabinet
import ZsortCabinet from "./ZsortCabinet";
//椅凳Chair
import ZsortChair from "./ZsortChair";
//桌几 Stool
import ZsortStool from "./ZsortStool";
//灯具Lamp
import ZsortLamp from "./ZsortLamp";
//家纺mendale
import ZsortMendale from "./ZsortMendale";
//餐具cutlery
import ZsortCutlery from "./ZsortCutlery";
// 装饰decorate
import ZsortBecorate from "./ZsortBecorate";
//COSMO
import ZsortCosmo from "./ZsortCosmo";
//装饰画Titanic
import ZsortTitanic from "./ZsortTitanic";

import '../style/sort.css'
export default {
  name: "app",
  components: {
    ZsortSofa,
    ZsortBed,
    ZsortCabinet,
    ZsortChair,
    ZsortStool,
    ZsortLamp,
    ZsortMendale,
    ZsortCutlery,
    ZsortBecorate,
    ZsortCosmo,
    ZsortTitanic
  }
};
</script>

<style>
</style>