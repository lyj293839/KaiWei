<style scoped>
.order{color: #333;font-size: 12px;}
.heard{display: flex;justify-content: space-between;align-items: center;}
.heard .is_active{background: #00AAEA;color: white;}
.heard .foot{display: flex;justify-content: space-between;align-items: center;}
.order_heard{
  width: 100%;
  background: #F5F5F5;
  /* margin: 14px 0px; */
  border-collapse:collapse;
}
.order_heard td{text-align: center;padding: 5px 5px;}
.order_center{margin-top: 6px;}
.order_center .text1{
  line-height: 27px;
  padding:0px 20px;
  background: #F5F5F5;
  border: 1px solid #DDDDDD;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
}
.order_center .text1 span{cursor: pointer;}
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
.order_center td{text-align: center;padding: 5px 5px;}
.order_center .text2 img{margin-right: 5px;}
.order_center .text3{color: #FF0000;font-weight: bold;}
.order_center .text4{line-height: 30px;text-align: center;}
.order_center .text4 div{cursor: pointer;}
.order_center .text5 div{width: 80%;margin: 0px auto;text-align: left;padding: 2px 0px;}
.order_center .text_button{color: #00AAEA;border-color: #00AAEA;}

.order .el-pagination{text-align: right;}
.refund_detail /deep/ .el-dialog__header{text-align: center;background: #F5F5F5;padding: 10px 0px;}
.refund_detail /deep/ .el-dialog__body{padding: 10px 20px;line-height: 25px;}
.content .el-tabs{margin-top: 14px;}
</style>
<template>
  <div class="order">
    <div class="heard">
      <div v-if="order_goods=='orderList'">
        <el-button round size="mini" :class="queryList.order_status==0?'is_active':''" @click="queryList.order_status=0">全部</el-button>
        <el-button round size="mini" :class="queryList.order_status==1?'is_active':''" @click="queryList.order_status=1">待付款</el-button>
        <el-button round size="mini" :class="queryList.order_status==2?'is_active':''" @click="queryList.order_status=2">待发货</el-button>
        <el-button round size="mini" :class="queryList.order_status==3?'is_active':''" @click="queryList.order_status=3">待收货</el-button>
      </div>
      <div v-else>
        <el-button round size="mini" :class="queryList.order_status==0?'is_active':''" @click="queryList.order_status=0">全部</el-button>
        <el-button round size="mini" :class="queryList.order_status==1?'is_active':''" @click="queryList.order_status=1">待发货</el-button>
        <el-button round size="mini" :class="queryList.order_status==2?'is_active':''" @click="queryList.order_status=2">已取消</el-button>
        <el-button round size="mini" :class="queryList.order_status==3?'is_active':''" @click="queryList.order_status=3">已发货</el-button>
      </div>
      <div>
        <el-input v-model="queryList.order_sn" size="mini" style="width:300px;" placeholder="搜索订单号"></el-input>
        <el-button type="primary" size="mini" :loading="search_loading" @click="Search()">订单搜索</el-button>
      </div>
    </div>
    <div class="content">
      <el-tabs :value="order_goods" tab-position="top" @tab-click="handleClick">
        <el-tab-pane label="产品订单" name="orderList">
          <table class="order_heard" cellspacing="0">
            <tr>
              <td width='260'><div style="padding-left:20px;text-align:left;">订单号</div></td>
              <td width='80'>下单日期</td>
              <td width='100'>商品金额</td>
              <td width='100'>订单金额</td>
              <td width='150'>收货人</td>
              <td >状态</td>
              <td width='100'>操作</td>
            </tr>
          </table>
          <div class="order_center" v-for="item in data.list">
            <div class="text1" >
              <div style="cursor: pointer;" @click="order_detail(item)">订单号：{{item.order_sn}}</div> 
              <span @click="order_detail(item)">订单详情</span>
            </div>
            <table border="1" bordercolor='#DDDDDD' cellspacing="0" style='border-collapse:collapse;width:100%;'>
              <tr v-for="(i,index_i) in item.child_order">
                <td width='260'>
                  <div style="display:flex;align-items: center;">
                    <img :src="i.img" width="75" height="75">
                    <div style="text-align:left;word-break:break-all;margin-left:5px;">
                      <span>{{i.prod_name}}</span>
                      (订货以英文名为准)
                    </div>
                  </div>
                </td>
                <td width='80' :rowspan="item.child_order.length" v-if="index_i==0">{{item.create_time}}</td>
                <td width='100'>
                  ￥{{i.total_money}} x {{i.num}} <br>
                  <span v-if="i.return_status">
                    <el-button v-if="i.return_status==1" plain size="mini" @click="refundDetail(i.child_id)">退货中</el-button>
                    <el-button v-else-if="i.return_status==2" plain size="mini" @click="refundDetail(i.child_id)">已退货</el-button>
                    <!-- <span v-if="i.return_status==1" @click="refundDetail(i.child_id)">退货中</span>
                    <span v-else-if="i.return_status==2" @click="refundDetail(i.child_id)">已退货</span> -->
                    <span v-else></span>
                  </span>
                </td>
                <td width='100' class="text3" :rowspan="item.child_order.length" v-if="index_i==0">￥{{item.total_money}}</td>
                <td width='150' class="text5" :rowspan="item.child_order.length" v-if="index_i==0">
                  <div><span>{{item.username}}</span> <span>{{item.mobile}}</span></div>
                  <div>{{item.address}}</div>
                </td>
                <td class="text4" :rowspan="item.child_order.length" v-if="index_i==0">
                  <div style="color:#00AAEA;">
                    <span v-if="item.order_status==1">待付款</span>
                    <span v-else-if="item.order_status==2">待发货</span>
                    <span v-else-if="item.order_status==3">待收货</span>
                    <span v-else-if="item.order_status==4">
                      <span>已退货</span>
                    </span>
                    <span v-else-if="item.order_status==5">订单取消</span>
                    <span v-else-if="item.order_status==6">已完成</span>
                    <span v-else-if="item.order_status==7">退货中</span>
                    <span v-else-if="item.order_status==8">部分退货</span>
                    <span v-else></span>
                  </div>
                </td>
                <td width='100' class="text4" :rowspan="item.child_order.length" v-if="index_i==0">
                  <div v-if="item.order_status">
                    <div v-if="item.order_status==1"><el-button size="mini" class='text_button' @click="play_(item)">立即付款</el-button></div>
                    <div v-if="item.order_status==1"><el-button size="mini" type="text" style="color:red;" @click="setOrder(1,item.order_sn)">取消订单</el-button></div>
                    <div v-if="item.order_status==3"><el-button size="mini" type="primary" :loading="loading_take_delive" style="background:#00AAEA;" @click="setOrder(2,item.order_sn)">确认收货</el-button></div>
                    <!-- <div v-if="item.order_status!==(1||2||5)">
                      <el-popover
                        placement="bottom"
                        width="100"
                        trigger="hover">
                        <span style="font-size:12px;">
                          【萧山万达】（0571-82976799） 的业务员 业务员陆家强（15025102364） 正在派件【95720为中通快递员外呼专属号码，请放心接听】
                        </span>
                        <div slot="reference"><el-button size="mini" type="text" @click="se_package()">查看物流</el-button></div>
                      </el-popover>
                    </div> -->
                    <div v-if="item.order_status!=1&&item.order_status!=7&&item.order_status!=5&&item.order_status!=4">
                      <el-button size="mini" type="warning" @click="apply_refund(item)">申请退货</el-button>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="积分订单" name="integralOrderList">
          <table class="order_heard" cellspacing="0">
            <tr>
              <td width='260'><div style="padding-left:20px;text-align:left;">订单号</div></td>
              <td width='80'>下单日期</td>
              <td width='100'>所用积分</td>
              <td width='100'>联系人</td>
              <td width='150'>收货地址</td>
              <td >状态</td>
              <td width='100'>操作</td>
            </tr>
          </table>
          <div class="order_center" v-for="item in data.list">
            <div class="text1">
              订单号：{{item.order_sn}}
            </div>
            <table border="1" bordercolor='#DDDDDD' cellspacing="0" style='border-collapse:collapse;width:100%;'>
              <tr>
                <td width='260'>
                  <div style="display:flex;align-items: center;">
                    <img :src="item.img" width="75" height="75">
                    <div style="text-align:left;word-break:break-all;margin-left:5px;">
                      <span>{{item.goods_name}}</span>
                    </div>
                  </div>
                </td>
                <td width='80'>{{item.create_time}}</td>
                <td width='100'>
                  {{item.total_integral}}<br>
                </td>
                <td width='100'>{{item.contacts}}<br>{{item.mobile}}</td>
                <td width='150'>
                  {{item.address}}
                </td>
                <td>
                  <div style="color:#00AAEA;">
                    <span v-if="item.status==1">待发货</span>
                    <span v-else-if="item.status==2">已取消</span>
                    <span v-else-if="item.status==3">已发货</span>
                    <span v-else-if="item.status==4">已完成</span>
                    <span v-else></span>
                    <span></span>
                  </div>
                </td>
                <td width='100'>
                  <div v-if="item.status==1||item.status==3"><el-button size="mini" type="danger" @click="setIntegralOrder (1,item.order_sn)">取消</el-button></div>
                  <div v-else-if="item.status==3"><el-button size="mini" class='text_button'  @click="setIntegralOrder (2,item.order_sn)">确认</el-button></div>
                </td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>

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

      <el-dialog title="退货详情" class="refund_detail" :visible.sync="dialogRefund_detail" width="500px">
        <div style="color:#999999;">申请日期：{{detail_data.create_time}}</div>
        <div>申请事由：{{detail_data.member_remake}}</div>
        <div style="color:#999999;">处理日期：{{detail_data.handle_time}}</div>
        <div>处理结果：{{detail_data.status==0?'处理中':'已处理'}}</div>
        <div>退款金额：<span style="color:#00AAEA;">{{detail_data.return_money}}</span>元</div>
        <div>退款备注：{{detail_data.remark}}</div>
      </el-dialog>

        <el-pagination
              style="margin:20px 0px;"
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="$root.pageSize"
              layout="prev, pager, next"
              :total="data.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal_order',
  data () {
    return {
      queryList:{
        page:1,
        order_sn:'',
        order_status:0,
      },
      data:{},
      order_goods:'orderList',
      refundForm:{
        order_sn:'',
        child_id:[],
        remake:''
      },
      refundForm_list:[],
      detail_data:{},
      currentPage:1,
      dialogRefund:false,
      search_loading:false,
      loading_take_delive:false,
      dialogRefund_detail:false,
      arr:[{name:'1'},{name:'2'},{name:'3'},{name:'4'}]
    }
  },
  created () {
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/'+this.order_goods,this.queryList).then(res=>{
          if (res && res.code == 200){
            this.search_loading = false
            this.data = res.data
          }else{
            this.$message.error(res.msg);
            this.search_loading = false
          }
      }).catch(function(error) {
          console.log(error)
          this.search_loading = false
      });
    },
    handleClick(tab, event){
      this.order_goods = tab.name
      this.queryList.order_status = 0
      this.fetchat()
    },
    Search(){
      this.search_loading = true
      this.queryList.page = 1
      this.fetchat()
    },
    setIntegralOrder(type,order_sn){
      var obj = {
        type,
        order_sn
      }
      this.$confirm(type==1?'此操作将取消该订单, 是否继续?':'是否确认收货', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post('/setIntegralOrder',obj).then(res=>{
            if (res && res.code == 200){
              this.fetchat()
              this.$message.success(res.msg);
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
    },
    handleCurrentChange(page_current){
      this.queryList.page = this.currentPage = page_current;
      this.fetchat();
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
    refundDetail(id){
      this.$post('/returnInfo',{child_id:id}).then(res=>{
          if (res && res.code == 200){
            this.dialogRefund_detail = true
            this.detail_data = res.data.info
          }else{
            this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    se_package(){
      this.$router.push({
        path: '/order_package',
        name: 'order_package',
      })
    },
    order_detail(item){
      this.$router.push({
        path: '/order_pay',
        name: 'order_pay',
        query:{
          order_sn:item.order_sn
        }
      })
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
    }
  }
}
</script>
