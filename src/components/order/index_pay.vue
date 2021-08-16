<style scoped>
.wind{margin: 0px auto;width: 1200px;padding: 14px 0px 80px 0px;color: #27282C;}
.address{background: white;border: 1px solid #E9E9E9;margin-bottom: 10px;}
.address_a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F7F7F7;
    padding: 10px;
}
.address_a span{font-size: 14px;font-weight: bold;}
.address .el-col{margin-bottom: 10px;}
.address .el-collapse ul{
    display:flex;
    width:100%;
    align-items:center;
    justify-content: space-between;
    padding: 0px 20px 0px 12px;
}
.address .el-collapse ul li .el-button{color: #00AAEA;}
.el-collapse /deep/ .el-collapse-item__header{height: auto;line-height: normal;padding: 10px 10px;cursor:text;}
.el-collapse .el-col{display: flex;align-items: center;}
.el-collapse .el-row{width:100%;}
.el-collapse .el-row .el-input{width:80%;}
.el-collapse /deep/ .is-disabled .el-collapse-item__arrow{display: none;}
.el-collapse /deep/ .is-disabled{cursor:text;}
.el-table .message{
    display: flex;
    align-items: center;
}
.el-table img{margin-right: 20px;}
.el-table .num{color: #FF0000;font-weight: bold;}
.el-table /deep/ thead th{
    color: #666;
    background:#F7F7F7;
    font-size: 14px;
    font-weight: normal;
}
.address_b{
    text-align: right;
    padding: 24px 50px 24px 20px;
    border-bottom: 1px solid #E9E9E9;
    color: #666666;
    font-size: 14px;
    line-height: 30px;
}
.address_b .el-input{margin-bottom:5px;}
.address_b ul span{color: #00AAEA;}
.wind .el-dialog .el-form-item{text-align: left;}
</style>

<template>
<div style="background: #F9F9F9;">
    <div class="wind">
        <div class="address">
            <div class="address_a">
                <span>收货地址</span>
            </div>
            <el-collapse>
                <el-collapse-item name="1" disabled>
                    <template slot="title">
                        <el-row type="flex" align='center' >
                            <el-col :span="4"><el-radio v-model="radio" label="1" disabled>{{data.username}}</el-radio></el-col>
                            <el-col :span="4">{{data.mobile}}</el-col>
                            <el-col :span="14">{{data.address}}</el-col>
                        </el-row>
                    </template>
                </el-collapse-item>
                <!-- <el-collapse-item name="4" disabled>
                    <template slot="title">
                        <el-row type="flex" align='center'>
                            <el-col :span="4">
                                <el-radio v-model="radio" label="1" disabled>到付</el-radio>
                            </el-col>
                            <el-col :span="4" class="input_a">
                                <el-input v-model="input" placeholder="物流公司" disabled></el-input>
                            </el-col>
                            <el-col :span="14" class="input_a">
                                <el-input v-model="input" placeholder="物流账号" disabled></el-input>
                            </el-col>
                            <el-col :span="2">
                                <el-switch
                                    active-value="1"
                                    inactive-value="0"
                                    disabled
                                    inactive-color="#C2CFE0">
                                </el-switch>
                            </el-col>
                        </el-row>
                    </template>
                </el-collapse-item> -->
            </el-collapse>
        </div>
        <div class="address">
            <el-table :data="data.child_order">
                <el-table-column align="left" label="　　商品信息" width="400">
                    <template slot-scope="scope">
                        <div class="message">
                            <img :src="scope.row.prod_img"  width="76" height="76">
                            {{scope.row.prod_name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="Cas">
                    <template slot-scope="scope">{{scope.row.cas_no}}</template>
                </el-table-column>
                <el-table-column align="center" label="纯度">
                    <template slot-scope="scope">{{scope.row.purity}}</template>
                </el-table-column>
                <el-table-column align="center" label="规格">
                    <template slot-scope="scope">{{scope.row.specifications}}</template>
                </el-table-column>
                <el-table-column align="center" label="价格">
                    <template slot-scope="scope">¥{{scope.row.price}}</template>
                </el-table-column>
                <el-table-column align="center" label="数量">
                    <template slot-scope="scope">{{scope.row.num}}</template>
                </el-table-column>
                <el-table-column align="center" label="小计">
                    <template slot-scope="scope"><span class='num'>¥{{scope.row.total_money}}</span></template>
                </el-table-column>
            </el-table>
            <div class="address_b">
                <el-row type="flex" justify="space-between">
                    <el-col :span="14" >
                        <div style="text-align:left;">
                            <ul>
                                <li>订单编号：{{data.order_sn}}</li>
                                <li>订单时间：{{data.create_time}} </li>
                                <li>支付时间：{{data.pay_time?data.pay_time:'-'}}</li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="2">商品种类：<span>{{data.child_order.length}}</span>种</el-col>
                    <el-col :span="2">
                        <ul>
                            <li>商品总金额：</li>
                            <li>订单总额：</li>
                            <li>状态：</li>
                        </ul>
                    </el-col>
                    <el-col :span="2">
                        <ul>
                            <li>￥{{data.total_money}}</li>
                            <li>￥{{data.total_money}}</li>
                            <li>
                                <span v-if="data.order_status==1">待付款</span>
                                <span v-else-if="data.order_status==2">待发货</span>
                                <span v-else-if="data.order_status==3">待收货</span>
                                <span v-else-if="data.order_status==4">已退货</span>
                                <span v-else-if="data.order_status==5">订单取消</span>
                                <span v-else-if="data.order_status==6">已完成</span>
                                <span v-else-if="data.order_status==7">退货中</span>
                                <span v-else-if="data.order_status==8">部分退货</span>
                                <span v-else></span>
                            </li>
                            <li>
                                <div v-if="data.order_status">
                                    <div v-if="data.order_status==1"><el-button size="mini" class='text_button' @click="play_(data)">立即付款</el-button></div>
                                    <div v-if="data.order_status==1"><el-button size="mini" type="text" style="color:red;" @click="setOrder(1,data.order_sn)">取消订单</el-button></div>
                                    <div v-if="data.order_status==3"><el-button size="mini" type="primary" :loading="loading_take_delive" style="background:#00AAEA;" @click="setOrder(2,data.order_sn)">确认收货</el-button></div>
                                    <div v-if="data.order_status!=1&&data.order_status!=7&&data.order_status!=5&&data.order_status!=4">
                                        <el-button size="mini" type="warning" @click="apply_refund(data)">申请退货</el-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="address" v-if="data.invoice">
            <div class="address_a">
                <span>发票信息</span>
            </div>
            <el-collapse>
                <el-collapse-item name="1" disabled>
                    <template slot="title">
                        <el-row >
                            <el-col :span="3"><el-radio v-model="radio" label="1" disabled>{{data.invoice.type==1?'普通发票':'其他发票'}}</el-radio></el-col>
                            <el-col :span="4">{{data.invoice.duty_paragraph}}</el-col>
                            <el-col :span="4">{{data.invoice.mobile}}</el-col>
                            <el-col :span="4">{{data.invoice.address}}</el-col>
                            <el-col :span="4" v-if="data.invoice.open_bank">开户银行:{{data.invoice.open_bank}}</el-col>
                            <el-col :span="4" v-if="data.invoice.bank_no">银行账户：{{data.invoice.bank_no}}</el-col>
                            <el-col :span="4" v-if="data.invoice.company_mobile">企业电话：{{data.invoice.company_mobile}}</el-col>
                            <el-col :span="4" v-if="data.invoice.register_address">企业地址：{{data.invoice.register_address}}</el-col>
                        </el-row>
                    </template>
                </el-collapse-item>
            </el-collapse>
        </div>

        <el-dialog title="退货" :visible.sync="dialogRefund" width="500px">
            <el-form label-position='top'>
            <el-form-item label="退货产品:" required>
                <el-checkbox-group v-model="refundForm.child_id">
                <div v-for="item in refundForm_list">
                    <el-checkbox :label="item.child_id">
                    <span style="margin-right:20px;">{{item.cas_no}}</span>
                    <span>{{item.prod_name}}</span>
                    </el-checkbox>
                </div>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="退货理由:" required>
                <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入内容"
                v-model="refundForm.remake">
                </el-input>
            </el-form-item>
            <el-form-item style="text-align:right;">
                <el-button @click="dialogRefund=false" size="small">取 消</el-button>
                <el-button type="primary" size="small" @click="refund_sure()">确 定</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</div>
</template>

<script>
export default {
  name: "order_pay",
  data() {
    return {
        radio:'1',
        value:'',
        data:{},
        refundForm:{
        order_sn:'',
        child_id:[],
        remake:''
      },
      refundForm_list:[],
        loading_take_delive:false,
        dialogRefund:false,
    };
  },
  created() {
    this.fetchat()
  },
  methods: {
      fetchat(){
        var obj = {order_sn:this.$route.query.order_sn}
        this.$post('/orderInfo',obj).then(res=>{
            if (res && res.code == 200){
                this.data = res.data
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
      },
    apply_refund(item){
      this.refundForm_list = item.child_order
      this.refundForm={
        order_sn:item.order_sn,
        child_id:[],
        remake:''
      }
      this.dialogRefund = true
    },
    refund_sure(){
      this.$post('/returnOrder ',this.refundForm).then(res=>{
          if (res && res.code == 200){
            this.dialogRefund = false
            this.$message.success(res.msg);
            this.fetchat()
          }else{
            this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
      play_(item){
        var obj = {
            order_sn:item.order_sn,
            total_money:item.total_money
        }
        localStorage.setItem('generate_order',JSON.stringify(obj))
        this.$router.push({
            path: "/generate_order",
            name: "generate_order",
        });
    },
    setOrder(a,order_sn){
      var obj = {
        type:a,
        order_sn
      }
      if(a==1){
        this.$confirm('此操作将取消该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/setOrder',obj).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.fetchat()
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }else{
        this.$confirm('请确认是否收货, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info '
        }).then(() => {
          this.loading_take_delive = true
          this.$post('/setOrder',obj).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.loading_take_delive = false
                this.fetchat()
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
              this.loading_take_delive = false
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    },
      generate_order(){
          this.$router.push({
            path: "/generate_order",
            name: "generate_order"
        });
      }
  }
};
</script>