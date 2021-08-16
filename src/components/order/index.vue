<style scoped>
.wind{margin: 0px auto;width: 1200px;padding: 14px 0px 80px 0px;color: #27282C;}
.address{background: white;border: 1px solid #E9E9E9;margin-bottom: 10px;}
.address .el-radio-group .el-table /deep/ thead th{display: none;}
.address .el-radio-group{width: 100%;}
.address .el-radio-group .el-radio{margin-right: 30px;}
.address_a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F7F7F7;
    padding: 10px;
}
.address_a span{font-size: 14px;font-weight: bold;}
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
.address_c{padding: 24px 50px 24px 20px;}
.address_c .text1{color: #666666;font-weight: bold;font-size: 14px;}
.address_c .text2{color: #FF0000;font-weight: bold;font-size: 16px;}
.address_c .el-button{background: #E90026;}
div /deep/ .el-dialog .el-dialog__header{
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #DDDDDD;
    padding: 14px 0px;
}
div /deep/ .el-dialog .el-dialog__close{display: none;}
div /deep/ .el-dialog .el-dialog__body{padding: 20px 50px;}
</style>

<template>
<div style="background: #F9F9F9;">
    <div class="wind">
        <div class="address">
            <div class="address_a">
                <span>收货地址</span>
                <el-button type="primary" size="mini" plain @click="Add_delivery()">添加收货地址</el-button>
            </div>
            <!-- <el-collapse>
                <el-collapse-item name="1">
                    <template slot="title">
                        <el-row type="flex" align='center' >
                            <el-col :span="4"><el-radio v-model="radio"></el-radio>周晨阳</el-col>
                            <el-col :span="4">15518004101</el-col>
                            <el-col :span="14">中国北京市东城区东城大道东城大道东城大道东城大道东城大道东城大道东城大道东</el-col>
                            <el-col :span="2">
                                <el-button type="text" @click.stop="doThis()">编辑</el-button>
                                <el-button type="text" @click.stop="doThis()">删除</el-button>
                            </el-col>
                        </el-row>
                    </template>
                    <el-radio-group v-model="radio" @change="radio_change()">
                        <div>
                            <el-radio :label="3">
                                <span>周晨阳</span>
                                <span>15518004101</span>
                                <span>中国北京市东城区东城大道东城大道东城大道东城大道东城大道东城大道东城大道东</span>
                            </el-radio>
                        </div>
                        <div>
                            <el-radio :label="3">
                                <span>周晨阳</span>
                                <span>15518004101</span>
                                <span>中国北京市东城区东城大道东城大道东城大道东城大道东城大道东城大道东城大道东</span>
                            </el-radio>
                        </div>
                    </el-radio-group>
                </el-collapse-item>
                <el-collapse-item name="2">
                    <template slot="title">
                        <el-row type="flex" align='center'>
                            <el-col :span="8"><el-radio v-model="radio" label="1">南京市三二一科技</el-radio></el-col>
                            <el-col :span="14">NANJSANERYI87678236491793631293271</el-col>
                            <el-col :span="2">
                                <el-button type="text" @click.stop="doThis()">编辑</el-button>
                                <el-button type="text" @click.stop="doThis()">删除</el-button>
                            </el-col>
                        </el-row>
                    </template>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                </el-collapse-item>
                <el-collapse-item name="3">
                    <template slot="title">
                        <el-row type="flex" align='center'>
                            <el-col :span="4"><el-radio v-model="radio" label="1">周晨阳</el-radio></el-col>
                            <el-col :span="4">15518004101</el-col>
                            <el-col :span="14">中国北京市东城区东城大道东城大道东城大道东城大道东城大道东城大道东城大道东</el-col>
                            <el-col :span="2">
                                <el-button type="text" @click.stop="doThis()">编辑</el-button>
                                <el-button type="text" @click.stop="doThis()">删除</el-button>
                            </el-col>
                        </el-row>
                    </template>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                </el-collapse-item>
                <el-collapse-item name="4" disabled>
                    <template slot="title">
                        <el-row type="flex" align='center'>
                            <el-col :span="4">
                                <el-radio v-model="radio" label="1" :disabled="el_switch==0">到付</el-radio>
                            </el-col>
                            <el-col :span="4" class="input_a">
                                <el-input v-model="input" placeholder="物流公司" :disabled="el_switch==0"></el-input>
                            </el-col>
                            <el-col :span="14" class="input_a">
                                <el-input v-model="input" placeholder="物流账号" :disabled="el_switch==0"></el-input>
                            </el-col>
                            <el-col :span="2">
                                <el-switch
                                    v-model="el_switch"
                                    active-value="1"
                                    inactive-value="0"
                                    inactive-color="#C2CFE0">
                                </el-switch>
                            </el-col>
                        </el-row>
                    </template>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                </el-collapse-item>
            </el-collapse> -->
            <el-radio-group v-model="radio_delivery">
                <el-table :data="tableData_delivery">
                    <el-table-column align="center" width='100'>
                        <template slot-scope="scope">
                            <el-radio :label="scope.row.address_id">{{scope.row.username}}</el-radio>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="200">
                        <template slot-scope="scope">
                            <span>{{scope.row.mobile}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" >
                        <template slot-scope="scope">
                            <span>
                                {{scope.row.province_name}}-
                                {{scope.row.city_name}}-
                                {{scope.row.area_name}}-
                                {{scope.row.address}}
                            </span>
                            <el-tag  size="small">{{scope.row.label==1?'公司':'家'}}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="Edit_delivey(scope.row)">编辑</el-button>
                            <el-button type="text" @click.stop="del_delivery(scope.row.address_id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-radio-group>
        </div>
        <div class="address">
            <el-table :data="prodList">
                <el-table-column align="left" label="　　商品信息" width="400">
                    <template slot-scope="scope">
                        <div class="message">
                            <img :src="scope.row.img"  width="76" height="76">
                            {{scope.row.prod_ename}}
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
                    <template slot-scope="scope">{{scope.row.price}}</template>
                </el-table-column>
                <el-table-column align="center" label="小计">
                    <template slot-scope="scope">
                        <span class='num'>
                        {{(Number(scope.row.price)*Number(scope.row.num)).toFixed(2)}}
                        </span></template>
                </el-table-column>
            </el-table>
            <div class="address_b">
                <el-row type="flex" justify="space-between">
                    <el-col :span="14" >
                        <!-- <div v-if="el_switch==1">
                            <el-input v-model="input" placeholder="P.O.Number（选填，您可以填写您公司的采购单号）"></el-input>
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="订单备注（选填）"
                                v-model="textarea">
                            </el-input>
                        </div> -->
                    </el-col>
                    <el-col :span="2">商品种类：<span>{{this.prodList.length}}</span>种</el-col>
                    <el-col :span="2">
                        <ul>
                            <li>商品总金额：</li>
                            <li>订单总额：</li>
                        </ul>
                    </el-col>
                    <el-col :span="2">
                        <ul>
                            <li>￥{{total_money}}</li>
                            <li>￥{{total_money}}</li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
            <div class="address_c">
                <el-row type="flex" justify="space-between" align="middle">
                    <el-col :span="12"></el-col>
                    <el-col :span='2'>
                        <el-switch v-model="value" active-text="开发票" @change="change_value()"></el-switch>
                    </el-col>
                    <el-col :span="2"><div class="text1">应付金额：</div></el-col>
                    <el-col :span="2"><div class="text2">￥{{total_money}}</div></el-col>
                    <el-col :span="2">
                        <div>
                            <el-button type="danger" @click="generate_order()">提交订单</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="address" v-if="value">
            <div class="address_a">
                <span>发票信息</span>
                <el-button type="primary" size="mini" plain @click="Add_bill()">添加发票信息</el-button>
            </div>
            <el-radio-group v-model="radio_bill">
                <el-table :data="tableData_bill">
                    <el-table-column align="center" width='100'>
                        <template slot-scope="scope">
                            <el-radio :label="scope.row.id">{{scope.row.type==1?'普通发票':'其他发票'}}</el-radio>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="250">
                        <template slot-scope="scope">
                            <span>{{scope.row.mobile}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" >
                        <template slot-scope="scope">
                            <span>
                                {{scope.row.province_name}}-
                                {{scope.row.city_name}}-
                                {{scope.row.area_name}}-
                                {{scope.row.address}}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="100">
                        <template slot-scope="scope">
                            <el-button type="text" @click.stop="Edit_bill(scope.row)">编辑</el-button>
                            <el-button type="text" @click.stop="del_bill(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-radio-group>
        </div>
    </div>
    <el-dialog
        title="收货地址"
        class="dialog"
        :visible.sync="delivery_Visible"
        @close='close_delivery()'
        width="812px">
        <Delivery ref="childDelivery"></Delivery>
    </el-dialog>
    <el-dialog
        title="发票信息"
        class="dialog"
        :visible.sync="bill_Visible"
        @close='close_bill()'
        width="812px">
        <Bill ref="childBill"></Bill>
    </el-dialog>
</div>
</template>

<script>
import Delivery from "../personal/view/commponents/add_delivery";
import Bill from "../personal/view/commponents/add_bill";
export default {
  name: "order",
  components:{
    Bill,
    Delivery
  },
  data() {
    return {
        prodList:[],
        radio_bill:'',
        radio_delivery:'',
        tableData_delivery:[],
        tableData_bill:[],
        total_money:'',
        value:false,
        bill_Visible:false,
        delivery_Visible:false,
    };
  },
  created() {
    this.$emit('foot_message',false)
    this.fetchat()
  },
  methods: {
      fetchat(){
        this.prodList = JSON.parse(localStorage.getItem('shop_payList'))
        this.prodList.forEach(i=>{
            this.total_money=(Number(this.total_money)+Number((Number(i.price)*Number(i.num)))).toFixed(2)
        })
        this.$post('/addressList').then(res=>{
            if (res && res.code == 200){
                this.tableData_delivery = res.data.list
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
        this.$post('/invoiceList').then(res=>{
          if (res && res.code == 200){
              this.tableData_bill = res.data.list
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
      },
      Add_delivery(){
        this.delivery_Visible = true
        this.$refs.childDelivery.Add()
      },
      Add_bill(){
        this.bill_Visible = true
        this.$refs.childBill.Add()
      },
      Edit_delivey(item){
        this.delivery_Visible = true
        setTimeout(()=>{
            this.$refs.childDelivery.Edit(item)
        },200)
      },
      Edit_bill(item){
        this.bill_Visible = true
        setTimeout(()=>{
          this.$refs.childBill.Edit(item)
        },200)
      },
      save_delivery(){
        this.delivery_Visible = false
        this.$post('/addressList').then(res=>{
            if (res && res.code == 200){
                this.tableData_delivery = res.data.list
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
      },
      save_bill(){
        this.bill_Visible = false
        this.$post('/invoiceList ').then(res=>{
          if (res && res.code == 200){
              this.tableData_bill = res.data.list
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
      },
      del_delivery(id){
        this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/delAddress',{address_id:id}).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.$post('/addressList').then(res=>{
                    if (res && res.code == 200){
                        this.tableData_delivery = res.data.list
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(function(error) {
                    console.log(error)
                });
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      del_bill(id){
        this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$post('/delInvoice',{id}).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.$post('/invoiceList').then(res=>{
                    if (res && res.code == 200){
                        this.tableData_bill = res.data.list
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(function(error) {
                    console.log(error)
                });
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      close_delivery(){
        this.delivery_Visible = false
      },
      close_bill(){
        this.$refs.childBill.resetForm()
        this.bill_Visible = false
      },
      generate_order(){
        var obj = {
            cart_list:this.prodList,
            address_id:this.radio_delivery,
            invoice_id:this.radio_bill
        }
        this.$post('/createOrder',obj).then(res=>{
          if (res && res.code == 200){
              this.$message.success(res.msg);
              this.$post('/newData').then(i=>{
                    if (i && i.code == 200){
                    var a = JSON.stringify(i.data)
                    localStorage.setItem('newData',a)
                    localStorage.setItem('shopNum',i.data.cart_num)
                    this.$root.shopping_num = i.data.cart_num
                    }else{
                    this.$message.error(i.msg);
                    }
                }).catch(function(error) {
                    console.log(error)
                });
            var obj = {
                order_sn:res.data.order_sn,
                total_money:this.total_money
            }
            localStorage.setItem('generate_order',JSON.stringify(obj))
              this.$router.push({
                    path: "/generate_order",
                    name: "generate_order",
                    params:{
                        order_sn:res.data.order_sn,
                        total_money:this.total_money
                    },
                });
          }else{
              this.$message.error(res.msg);
          }
        }).catch(function(error) {
            console.log(error)
        });
      },
      change_value(){
          if(this.value){
              this.radio_bill = this.radio_bill
          }else{
              this.radio_bill = ''
          }
      }
  }
};
</script>