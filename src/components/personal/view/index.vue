<style scoped>
/* .wind_a{padding: 16px 12px;text-align: left;color: #333333;} */
.wind_a ul li{margin-bottom: 50px;}
.heard_text{font-size: 15px;font-weight: bold;line-height: 20px;}
.heard_texta{border-bottom: 1px solid #DDDDDD;display: flex;justify-content: space-between;}
.heard_texta span{font-size: 11px;color: #00AAEA;cursor: pointer;}
.contant_one{
    padding: 0px 0px 0px 15px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
.contant_one_a{
    width: 420px;
    height: 137px;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
}
.contant_one_a .text1{
    display: flex;
    align-items: center;
    line-height: 20px;
}
.contant_one_a .text1 img{margin-right: 12px;}
.contant_one_a .text1 .txt1{font-size:12px;color:#666666;}
.contant_one_a .text2{font-size: 12px;cursor: pointer;}
.contant_one_a .text2 div{display: flex;justify-content: center;}
.contant_one_a ul{display: flex;justify-content:center;align-items: center;width: 100%;}
.contant_one_a ul li{color: #666;font-size: 12px;width: 33%;text-align: center;border-right: 1px solid #DDDDDD;margin: 0px;}
.contant_one_a ul li .text3{color: #333;font-size: 23px;font-weight: bold;line-height: 30px;}
.order_table .el-table{margin-top:20px;font-size: 12px;}
.order_table .el-table /deep/ thead{color: #333333;font-family:'msyh';}
.order_table .el-table /deep/ th{background: #F5F5F5;}
.host_foot ul{display: flex;flex-wrap: wrap;margin-top: 15px;}
.host_foot ul li{
    border: 1px solid #E9E9E9;
    text-align: center;
    font-size: 12px;
    width: 24%;
    padding-bottom: 20px;
    margin-bottom: 10px;
    margin-right: 5px;
    cursor: pointer;
}
</style>

<template>
  <div>
    <div>
        <ul>
            <li>
                <div class="heard_text">账户总览</div>
                <div class="contant_one">
                    <div class="contant_one_a">
                        <div class="text1">
                            <img :src="data.avatar" width="62px" height="62px">
                            <div>
                                <div class="heard_text">{{data.mobile}}</div>
                                <div class="txt1">邮箱：{{data.email}}</div>
                                <div class="txt1">手机：{{data.mobile}}</div>
                            </div>
                        </div>
                        <div class="text2" @click="toAccount()">
                            <div><img src="@/assets/image/路径 1427@2x.png" width="14px" height="15px"></div>
                            <span>资料修改</span>
                        </div>
                    </div>
                    <div class="contant_one_a">
                        <ul>
                            <li>
                                <div class="text3">{{data.intergral}}</div>
                                <div>我的积分</div>
                            </li>
                            <li>
                                <div class="text3">{{data.collection_num}}</div>
                                <div>我的收藏</div>
                            </li>
                            <li style="border-right:none;">
                                <div class="text3">{{data.browse_num}}</div>
                                <div>浏览历史</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div class="heard_text heard_texta">
                    近期订单
                    <span @click="toOrder()">查看全部</span>
                </div>
                <div class="order_table">
                    <el-table :data="orderData">
                        <el-table-column align="center" label='订单号'>
                            <template slot-scope="scope">
                                <div style="cursor: pointer;" @click="to_order(scope.row.order_sn)">{{scope.row.order_sn}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="下单日期">
                            <template slot-scope="scope">{{scope.row.create_time}}</template>
                        </el-table-column>
                        <el-table-column align="center" label="订单金额">
                            <template slot-scope="scope">{{scope.row.total_money}}</template>
                        </el-table-column>
                        <el-table-column align="center" label="收货人">
                            <template slot-scope="scope">{{scope.row.username}}</template>
                        </el-table-column>
                        <el-table-column align="center" label="状态">
                            <template slot-scope="scope">
                                <div style="color:#00AAEA;">
                                    <span v-if="scope.row.order_status==1">待付款</span>
                                    <span v-else-if="scope.row.order_status==2">待发货</span>
                                    <span v-else-if="scope.row.order_status==3">待收货</span>
                                    <span v-else-if="scope.row.order_status==4">已退货</span>
                                    <span v-else-if="scope.row.order_status==5">订单取消</span>
                                    <span v-else-if="scope.row.order_status==6">已完成</span>
                                    <span v-else-if="scope.row.order_status==7">退货中</span>
                                    <span v-else-if="scope.row.order_status==8">部分退货</span>
                                    <span v-else></span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="操作">
                            <template slot-scope="scope">
                                <div v-if="scope.row.order_status">
                                    <div v-if="scope.row.order_status==1"><el-button size="mini" class='text_button' @click="play_(scope.row)">立即付款</el-button></div>
                                    <div v-if="scope.row.order_status==1"><el-button size="mini" type="text" style="color:red;" @click="setOrder(1,scope.row.order_sn)">取消订单</el-button></div>
                                    <div v-if="scope.row.order_status==3"><el-button size="mini" type="primary" :loading="loading_take_delive" style="background:#00AAEA;" @click="setOrder(2,scope.row.order_sn)">确认收货</el-button></div>
                                    <div v-if="scope.row.order_status!==(1||2||5)">
                                    <!-- <el-popover
                                        placement="bottom"
                                        width="100"
                                        trigger="hover">
                                        <span style="font-size:12px;">
                                        【萧山万达】（0571-82976799） 的业务员 业务员陆家强（15025102364） 正在派件【95720为中通快递员外呼专属号码，请放心接听】
                                        </span>
                                        <div slot="reference"><el-button size="mini" type="text" @click="se_package()">查看物流</el-button></div>
                                    </el-popover> -->
                                    </div>
                                    <div v-if="scope.row.order_status!=1&&scope.row.order_status!=7&&scope.row.order_status!=5&&scope.row.order_status!=4">
                                        <el-button size="mini" type="warning" @click="apply_refund(item)">申请退货</el-button>
                                    </div>
                                    <!-- <div v-if="scope.row.order_status==7||scope.row.order_status==8"><el-button size="mini" type="text" @click="refundDetail(item)">退货详情</el-button></div> -->
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </li>
            <li>
                <div class="heard_text heard_texta">
                    浏览历史
                    <span @click="toHistory()">查看全部</span>
                </div>
                <div class="host_foot">
                    <ul>
                        <li v-for="item in historyData" @click="prod_detail(item)">
                            <img :src="item.img" width="100%" height="230"/>
                            <div>
                                <span v-if="item.prod_name!='N/A'&&item.prod_name">{{item.prod_name}}</span>
                                <span v-else>
                                <span v-if="item.prod_ename!='N/A'&&item.prod_ename">{{item.prod_ename}}</span>
                                <span v-else></span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal_center',
  data () {
    return {
        data:{},
        orderData:[],
        historyData:[],
        loading_take_delive:false,
    }
  },
  created () {
      this.fetchat()
  },
  methods: {
      fetchat(){
        this.$post('/memberInfo').then(res=>{
            if (res && res.code == 200){
                this.data = res.data
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
        this.$post('/orderList').then(res=>{
            if (res && res.code == 200){
                this.orderData = res.data.list
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
        this.$post('/prodBrowseHistory').then(res=>{
          if (res && res.code == 200){
              this.historyData = res.data
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
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
    to_order(order_sn){
        this.$router.push({
            path: '/order_pay',
            name: 'order_pay',
            query:{
            order_sn:order_sn
            }
        })
    },
    prod_detail(item){
        this.$All.historyProd(item)
        this.$router.push({
            path: "/prod_detail",
            name: "prod_detail",
            query: {
            cas_no: item.cas_no
            }
        });
    },
      toOrder(){
        this.$router.push({
            path: "/personal_order",
            name: "personal_order",
        });
      },
      toHistory(){
        this.$router.push({
            path: "/personal_history",
            name: "personal_history",
        });
      },
      toAccount(){
        this.$router.push({
            path: "/personal_account",
            name: "personal_account",
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
  }
}
</script>