<style scoped>
.wind{margin: 0px auto;width: 1200px;padding: 10px 0px 85px 0px;}
.el-breadcrumb {margin: 0px 0px 30px 0px;}
.el-breadcrumb /deep/ .el-breadcrumb__inner{color: #27282C;font-size: 14px;}
.el-breadcrumb span{color: #00AAEA;}
.order_heard{
  color: #FF0000;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #E9E9E9;
  padding: 12px 0px;
}
.order_heard_a{color: #666666;font-size: 16px;margin: 15px 0px 30px 0px;}
.order_heard_a span{color: #00AAEA;}
.order_content{
  border: 1px solid #E9E9E9;
  background: white;
  padding: 16px 14px;
  text-align: left;
}
.order_content .el-row{margin-bottom: 26px;}
.order_content .el-button{
  position: relative;
  border-radius: 0px;
  margin-right: 10px;
  width: 158px;
  height: 66px;
}
.order_content .el-button div{display: none;}
.order_content .san_block{border-color: #00AAEA;}
.order_content .san_block div{display:block;}
.san{
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-width:10px;  
  border-style:solid;  
  border-color:transparent #00AAEA #00AAEA transparent; 
}
.san_g{
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: white;
  font-size: 12px;
}
.order_content .text1{color: #403B3A;font-size: 16px;}
.order_content .text2{color: #FF0000;font-size: 26px;font-weight: bold;}
.order_content .text3{color: #333333;font-size: 16px;font-weight: bold;}
.order_content .text4{color: #333333;font-size: 16px;margin-top: 21px;line-height: 40px;}
.order_content .text4 span{color: #FF0000;}
.order_content .text5{color: #00AAEA;text-align: center;}
.play_mess{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
}
.credit .text1{color: #333333;font-size: 16px;font-weight: bold;}
.credit .text2{color: #FF0000;font-size: 26px;font-weight: bold;}
.credit .text3{color: #403B3A;font-size: 16px;font-family: 'msyh';}
div /deep/ .el-dialog .el-dialog__header{
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #DDDDDD;
  padding:13px 0px;
}
div /deep/ .el-dialog .el-dialog__header .el-dialog__headerbtn{display: none;}
div /deep/ .el-dialog .el-dialog__body{padding: 10px 33px 60px 33px;}
.el-dialog .text_a{padding: 0px 30px;}
.el-dialog .text_b{text-align: left;line-height: 30px;}
.el-dialog .text1{color:#666666;font-size: 14px;font-weight: bold;}
.el-dialog .text2{text-align: left;margin-top: 20px;color: #666666;font-size: 14px;}
.plain{display: flex;justify-content: space-between;align-items: center;}
</style>
<template>
  <div style="background: #F9F9F9;">
    <div class="wind">
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>产品目录</el-breadcrumb-item>
        <el-breadcrumb-item>产品详情</el-breadcrumb-item>
        <el-breadcrumb-item><span>订单支付</span></el-breadcrumb-item>
      </el-breadcrumb> -->
      <div>
        <Paysuccess v-if="play_status==1"></Paysuccess>
        <Payfailed v-else-if="play_status==2"></Payfailed>
        <div class="order_content" v-else>
          <el-row type="flex" align="middle" justify="space-between">
            <el-col :span="14" class="plain">
              <el-button plain @click="san_show=1" :class="san_show==1?'san_block':''">
                <img src="@/assets/image/组 3380@2x.png" width="82" height="29">
                <div>
                  <div class="san"></div>
                  <i class="el-icon-check san_g"></i>
                </div>
              </el-button>
              <el-button plain @click="san_show=2" :class="san_show==2?'san_block':''">
                <img src="@/assets/image/组 3381@2x.png" width="99" height="27">
                <div v-if='san_show==2'>
                  <div class="san"></div>
                  <i class="el-icon-check san_g"></i>
                </div>
              </el-button>
              <el-button plain @click="san_show=3" :class="san_show==3?'san_block':''">
                <img src="@/assets/image/组 3384@2x.png" width="106" height="22">
                <div v-if='san_show==3'>
                  <div class="san"></div>
                  <i class="el-icon-check san_g"></i>
                </div>
              </el-button>
            </el-col>
            <el-col :span="5">
              <div>
                <span class="text1">实付款：</span>
                <span class="text2">￥{{newData.used_money}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" v-if="san_show==3">
            <el-col :span="14">
              <img src="@/assets/image/NoPath - 副本 (8)@2x.png" width="680" height="320">
            </el-col>
            <el-col :span="9">
              <div class="play_mess">
                <div>
                  <div class="text3">对公转账付款信息：</div>
                  <ul class="text4">
                    <li>收款人：<span>上海凯为化学科技有限公司</span></li>
                    <li>账号：<span>96210078801400000378</span></li>
                    <li>开户银行：<span>上海浦东发展银行股份有限公司唐镇支行</span></li>
                  </ul>
                </div>
                <div style="text-align:right;"><el-button plain style="width:auto;" @click="link()">联系客服</el-button></div>
              </div>
            </el-col>
          </el-row>
          <div class="text5">注：汇款时敬请在电汇凭证 / 支票的汇款用途栏或附言栏中填入您的订单号，线下付完款之后，请将付款凭证发给在线客服，以便及时发货。</div>
        </div>
      </div>
    </div>

    <el-dialog
      title="支付提示"
      :visible.sync="dialogVisible"
      width="430px">
      <div v-if="!is_problem" class="text_a">
        <div class="text1">请在新打开的支付界面完成支付</div>
        <div class="text2">
            <span>支付完成前，请勿关闭页面。</span><br>
            <span>支付完成后，请根据您的情况点击下面按钮。</span>
        </div>
      </div>
      <div v-else class="text_b">
        <div class="text1">请通过以下方式联系我们，立即为您解决支付所遇到的问题</div>
        <div class="text2">
            <span>联系电话：021-58461859</span><br>
            <span>官方邮箱：service@aivichem.com</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div v-if="!is_problem">
          <el-button type="primary" size="small" @click="fail_pay()">我已成功支付</el-button>
          <el-button size="small" @click="is_problem = true">支付遇到问题</el-button>
        </div>
        <el-button v-else size="small" @click="dialogVisible = false">返回</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Paysuccess from "./components/pay_success";
import Payfailed from "./components/pay_failed";
export default {
  name:'amount_order',
  components:{
    Paysuccess,
    Payfailed
  },
  data() {
    return {
      san_show:3,
      play_status:'',
      newData:{},
      orderData:{},
      dialogVisible:false,
      is_problem:false
    };
  },
  created() {
    this.$emit('foot_message',false)
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.newData = JSON.parse(localStorage.getItem('newData'))
    },
    se_order(){
      this.$router.push({
        path: '/personal_amount',
        name: 'personal_amount',
      })
    },
    link(){
      this.play_status = 2
      this.dialogVisible=true
    },
    fail_pay(){
      this.dialogVisible=false
      this.$router.push({
          path: "/order_pay",
          name: "order_pay"
      });
    },
    use(){
      this.$post('/creditPay').then(res=>{
          if (res && res.code == 200){
              this.$message.success(res.msg);
              this.$All.change()
              this.se_order()
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
  }
};
</script>
