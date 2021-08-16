<style scoped>
.banner {
  width: 100%;
  height: auto;
  /* background: url("../../assets/image/图像48@2x.png") no-repeat center;
  background-size: 100% 100%; */
}
.content{
    position: relative;
    padding: 63px 0px 96px 0px;
    /* width: 1200px;
    margin: 0px auto; */
}
.image_left{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
}
.image_right{
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: -1;
}
.wind_text {
  width: 1200px;
  margin: 0px auto;
  color: #333333;
  font-size: 14px;
  z-index: 2;
}
.text1{
    color: #00AAEA;
    font-size: 32px;
}
.text2{
    color: #00AAEA;
    font-size: 13px;
}
.text3{margin-top: 83px;line-height: 32px;}
</style>
<template>
  <div>
    <div class="banner">
      <img src="@/assets/image/图像48@2x.png" width="100%" height="100%">
    </div>
    <div class='content'>
      <img src="@/assets/image/108093514@2x.png" width="685" height="401" class="image_left">
      <img src="@/assets/image/9a6412990270c644a53e61e5efa4b240c139f2b24d4ef-Ce9viy@2x.png" width="422" height="422" class="image_right">
      <div class="wind_text">
        <div class="text1">关于我们</div>
        <div class="text2">ABOUT US</div>
        <div class="text3">
          上海凯为化学科技有限公司2019年8月凯为化学成立，严谨务实，质量第一，服务至上是我们的发展的理念。<br>
          公司总部位于上海张江高科技园区秋月路，研发中心位于苏州市吴江区，主要业务为医药中间体的研发和销售，化学试剂销售服务，目前已累积了1万余种产品品类。我们的团队将用丰富的从业经验来实践我们的理念，为客户奉送最可靠的服务，为化学和医药行业助力。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "understand",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
