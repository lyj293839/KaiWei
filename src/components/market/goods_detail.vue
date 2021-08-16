<style scoped>
.wind{
    width: 1200px;
    margin: 0px auto;
    padding: 10px 0px;
    color: #27282C;
    font-size: 14px;
}
.goods{
  display: flex;
  align-items: center;
  margin: 10px 0px;
}
.goods_detail{
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-left: 13px;
}
.goods_detail .text1{
  font-size: 22px;
  font-weight: bold;
}
.goods_detail .tip{
  width: 335px;
  text-align: left;
  background: #F9F9F9;
  padding: 15px;
  line-height: 19px;
}
.goods_detail .tip span{color:#ff0000;}
.goods_detail .button{
  width: 140px;
  height: 40px;
  background: #00AAEA;
  border-radius: 2px;
  color: white;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
.icon{
  text-align: left;
}
.icon .title_a{font-size: 18px;padding: 14px 0px;}
.icon .title_b{font-weight: bold;}
.icon .contant{
  background: #F9F9F9;
  padding: 24px 32px;
}
.icon .contant span{
  margin:15px 0px;
}
.icon ul li{
  margin-top: 15px;
  color: #666666;
}
.wind /deep/ .el-dialog .el-dialog__header{padding: 0px;}
.wind /deep/ .el-dialog .el-dialog__body{
  padding: 10px 25px 30px 25px;
  text-align: left;
  color: #333;
  font-size: 14px;
}
.header-title{
  border-bottom: 1px solid #ddd;
  padding: 14px 0px;
  font-weight: bold;
}
.el-dialog .text1{
  display: flex;
  justify-content: space-between;
}
.el-dialog .text2{color: #666666;margin-top: 26px;}
.el-dialog .el-radio{color: #333333;font-size: 14px;margin-top: 20px;}
.el-dialog .el-radio span{margin-right: 10px;}
.el-dialog .dialog-footer{}
.el-dialog .button_t{
  width: 326px;
  height: 41px;
  background: #00AAEA;
  color: white;
  text-align: center;
  line-height: 41px;
  border-radius: 2px;
  cursor: pointer;
  margin: 0px auto;
}
</style>
<template>
  <div class="wind">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/market' }">积分商城</el-breadcrumb-item>
        <el-breadcrumb-item>{{data.goods_name}}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="goods">
      <img :src="data.img" width="268" height="268">
      <div class="goods_detail">
        <div class="text1">{{data.goods_name}}</div>
        <div class="tip">
          <div>所属积分：<span>{{data.integral}}</span></div>
          <div>注意事项：兑换成功后，请联系客服核实</div>
        </div>
        <div>我的积分：
          <span v-if="isLogin">{{newData.intergral}}</span>
          <span v-else>-</span>
        </div>
        <div class="button" @click="click_goods()">申请兑换</div>
      </div>
    </div>
    <ul class="icon">
      <li>
        <div class="title_a">兑换说明</div>
        <div class="contant">
          <div class="title_b">积分获取及兑换商品规则</div>
          <ul>
            <li>我的积分：在商城购物付款完成并且经工作人员确认后，按比例获取积分，我的积分包含可用积分。</li>
            <li>兑换流程：当可用积分足够时即可申请兑换，工作人员将在3个工作日内与你联系并确定发货时间。</li>
            <li>特殊说明：如发生订单金额调整，所获得积分也将进行调整；详细的积分变化情况积分账户中心 > 我的积分 查看。</li>
          </ul>
        </div>
      </li>
      <li>
        <div class="title_a">产品详情</div>
      </li>
    </ul>

    <el-dialog
      :visible.sync="dialogVisible"
      width="430px"
    >
      <div slot="title" class="header-title">
           <div style="">申请兑换</div>
       </div>
      <div>
        <div class="text1">
          <span>{{data.goods_name}}</span>
          <span>{{data.integral}}积分</span>
        </div>
        <div class="text2">选择收获地址</div>
        <el-radio-group v-model="radio">
          <div v-for="item in addressList">
            <el-radio  :label="item.address_id">
              <span>{{item.username}}</span>
              <span>{{item.mobile}}</span> 
              <div>{{item.province_name}}{{item.city_name}}{{item.area_name}}{{item.address}}</div>
            </el-radio>
          </div>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="button_t" @click="save_goods()">提交</div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "goods_detail",
  data() {
    return {
      dialogVisible:false,
      radio:'',
      isLogin:false,
      data:{},
      newData:{},
      addressList:[]
    };
  },
  created() {
    this.fetchat()
    this.isLogin = localStorage.getItem('token')?true:false
    var obj = JSON.parse(localStorage.getItem('goods_detail'))
    this.$All.title_change({title:obj.goods_name})
  },
  methods: {
    fetchat(){
      if(localStorage.getItem('goods_detail')){
        this.data = JSON.parse(localStorage.getItem('goods_detail'))
      }
      this.$post('/newData').then(res=>{
          if (res && res.code == 200){
            this.newData = res.data
          }else{
            this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    click_goods(){
      this.$post('/addressList').then(res=>{
          if (res && res.code == 200){
              this.addressList = res.data.list
              this.radio = ''
              this.dialogVisible = true
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    save_goods(){
      var obj = {
        address_id:this.radio,
        good_id:this.data.goods_id
      }
      this.$post('/createIntegralOrder',obj).then(res=>{
          if (res && res.code == 200){
            this.$message.success(res.msg);
            this.dialogVisible = false
            this.fetchat()
          }else{
            this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    }
  }
};
</script>
