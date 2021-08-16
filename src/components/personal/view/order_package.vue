<style scoped>
.el-breadcrumb{font-size: 12px;}
.package{color: #333333;font-size: 12px;}

.order_center{border: 1px solid #DDDDDD;margin: 10px 0px;}
.order_center .text1{line-height: 27px;padding-left: 20px;background: #F5F5F5;border-bottom: 1px solid #DDDDDD;}
.order_center ul{display: flex;justify-content: space-between;}
.order_center ul li{
  border-left: 1px solid #DDDDDD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.order_center .text_a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:3px 5px;
  word-break:break-all;
}
.order_center .text2{
  display: block;
  text-align: left;
  border: none;
}
.order_center .text2 img{margin-right: 5px;}
.order_center .text3{color: #FF0000;font-weight: bold;}
.order_center .text4{line-height: 30px;}
.order_center .text5 div{width: 80%;margin: 0px auto;text-align: left;padding: 2px 0px;}
.order_center .text_button{color: #00AAEA;border-color: #00AAEA;}

.package_heard{
    font-size: 14px;
    font-weight: bold;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDDDDD;
}
.package_heard span{margin-right: 40px;}
.package_heard .text1{color: #00AAEA;font-family: 'msyh';}
.package_list {margin-top: 30px;padding-left: 50px;}
.package_list .el-step{flex-basis:100px !important;}
</style>
<template>
  <div class="package">
    <el-breadcrumb separator-class='el-icon-minus' >
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>订单中心</el-breadcrumb-item>
        <el-breadcrumb-item>查看快递</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="order_center">
        <div class="text1">订单号：XD2990063060</div>
        <ul>
          <li class="text2" style="width:30%;">
            <div class="text_a">
              <img src="@/assets/image/组 3286@2x.png" width="75" height="75">
              <div>
                (3R,4R,5R)-5-((R)-1,2-Dihydroxyethyl)-
                3,4-dihydroxydihydrofuran-2(3H)-one(
                订货以英文名为准)
              </div>
            </div>
          </li>
          <li style="width:10%;">2002-05-06</li>
          <li style="width:10%;" class="text3">￥7500.00</li>
          <li style="width:20%;" class="text5">
            <div>周晨阳   15518004101</div>
            <div>江苏省南京市浦口区星火路星火E方11栋201</div>
          </li>
          <li style="width:12%;" class="text4">
            <div style="color:#00AAEA;">待付款</div>
            <div>订单详情</div>
          </li>
          <li style="width:12%;" class="text4">
            <div><el-button size="mini">查看物流</el-button></div>
          </li>
        </ul>
    </div>
    <div class="package_heard">
        <div>
            <span>物流公司：顺丰快递</span>
            <span>物流单号：SF181561616165165</span>
        </div>
        <div class="text1">自动收货：剩余8天14时12分</div>
    </div>
    <div class="package_list">
        <el-steps direction="vertical" :active="3">
            <el-step icon="el-icon-success">
                <template slot="description">
                    <div>【萧山万达】（0571-82976799） 的业务员 业务员陆家强（15025102364） 正在派件【95720为中通快递员外呼专属号码，请放心接听】</div>
                    <div>2020-12-19 17:46:29</div>
                </template>
            </el-step>
            <el-step icon="el-icon-success">
                <template slot="description">
                    <div>快件离开 【南京浦口区】 已发往 杭州中转部</div>
                    <div>2020-12-19 17:46:29</div>
                </template>
            </el-step>
            <el-step icon="el-icon-success">
                <template slot="description">
                    <div>【南京浦口区】（025-66825047） 的业务员 陆钊龙（15051802800） 已揽收</div>
                    <div>2020-12-19 17:46:29</div>
                </template>
            </el-step>
        </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order_package',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

