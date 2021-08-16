<style scoped>
.banner {
  width: 100%;
  height: auto;
  /* background: url("../assets/image/图像48@2x.png") no-repeat center;
  background-size: 100% 100%; */
}
.content{
    position: relative;
    padding: 63px 0px 96px 0px;
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
.wind_text ul{
    list-style: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 76px;
}
.wind_text ul li{width: 143px;margin:0px 75px;cursor: pointer;}
.wind_text ul li a{text-decoration: none;}
.wind_text ul li:hover .tip{color: #00AAEA;}
.wind_text ul li:hover .tip_top{border-color: #00AAEA;}
.wind_text ul li:hover .boxT{ background: linear-gradient(180deg, #00AAEA 0%, #007EAE 100%);}
.box{
  display: flex;
  justify-content: center;
}
.boxF, .boxS, .boxT{
    width: 90px;
    height: 110px;
    overflow: hidden;
}
.boxF, .boxS{
    visibility: hidden;
}
.boxF{
    transform: rotate(120deg);
    float: left;
    -ms-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
}
.boxS{
    transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
}
.boxT{
    transform: rotate(-60deg);
    background: no-repeat 50% center;
    background-size: 125% auto;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    visibility: visible;
    background: #4E4D4E;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tip{color: #333333;}
.tip_top{
  font-size: 19px;
  padding: 13px 0px;
  margin-bottom: 28px;
  border-bottom: 2px solid #333333;
}
.tip_foot{font-size: 14px;}
.text1{
    color: #00AAEA;
    font-size: 32px;
}
.text2{
    color: #00AAEA;
    font-size: 13px;
}
.text3{margin: 37px 0px;line-height: 32px;}
.iframe{margin: 0px auto;}
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
        <div class="text1">联系我们</div>
        <div class="text2">CONTATC US</div>
        <ul>
            <li>
              <div class="box">
                <div class="boxF">
                    <div class="boxS">
                        <div class="boxT">
                          <img src="@/assets/image/组 3358@2x.png" width="59" height="60">
                        </div>
                    </div>
                </div>
              </div>
              <div class="tip">
                <div class="tip_top">客服电话</div>
                <div class="tip_foot">021-58461859  </div>
              </div>
            </li>
            <li>
              <!-- <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=MQMICQQJAgMIBQFxQEAfUl5c" style="text-decoration:none;"> -->
              <a href="mailto:service@aivichem.com" style="text-decoration:none;">
                <div class="box">
                <div class="boxF">
                    <div class="boxS">
                        <div class="boxT">
                          <img src="@/assets/image/组 3359@2x.png" width="59" height="60">
                        </div>
                    </div>
                </div>
              </div>
              <div class="tip">
                <div class="tip_top">邮箱</div>
                <div class="tip_foot">service@aivichem.com</div>
              </div>
              </a>
            </li>
            <li>
              <a href="tencent://message/?uin=2708421886&Site=&Menu=yes" >
              <div class="box">
                <div class="boxF">
                    <div class="boxS">
                        <div class="boxT">
                          <img src="@/assets/image/组 3420@2x.png" width="59" height="60">
                        </div>
                    </div>
                </div>
              </div>
              <div class="tip">
                <div class="tip_top">QQ</div>
                <div class="tip_foot">2708421886</div>
              </div>
              </a> 
              
            </li>
        </ul>
        <div class="text3">
            服务时间我们随时欢迎您的来电<br>
            人工客服时间：周一至周五9:00-18:00<br>
            发货时间为：周一至周五<br>
            非人工客服时间或法定节假日期间，您可发送邮件至邮箱：service@aivichem.com，<br>
            或者在网上申请账号下单，我们将在最短时间内与您确认订单并安排发货。   
        </div>
        <iframe src="static/map/index.html" scrolling="no" width="1218px" height="457px" class="iframe" frameborder="0"></iframe>
        <div>
          <span>总部地址: 上海市浦东新区秋月路26号1号楼216室</span>
          <span style="margin-left:44px;">邮编: 200437</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
