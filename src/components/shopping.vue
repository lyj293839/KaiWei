<style scoped>
.wind{width: 1200px;margin: 0px auto;color: #27282C;text-align: left;}
.title{font-size: 20px;padding: 14px 11px;}
.contant{background: white;}
.el-table /deep/ .DisabledSelection .cell .el-checkbox__inner{margin-left: -30px;position:relative;}
.el-table /deep/ .DisabledSelection .cell:before{
    content:"全选";
    position:absolute;
    right:11px;
}
.el-table /deep/ .cell{color: #27282C;font-size: 15px;font-weight: normal;}
.el-table .num{color: #FF0000;font-weight: bold;}
.el-table .el-input-number{width: 100px;}
.el-table img{margin-right: 20px;}
.el-table .message{
    display: flex;
    align-items: center;
}
.el-table /deep/ .el-table__empty-text img{margin: 44px 0px;}
.shopping_float{width: 100%;background: white;}
.float_a{width: 1200px;margin: 0px auto;text-align: right;padding: 18px 16px;}
.float_a div{font-size: 21px;color: #FF0000;}
.float_a ul{
    display: flex;
    align-items:flex-end;
    justify-content: flex-end;
    font-size: 13px;
    margin-top: 18px;
}
.float_a ul li{margin-left: 20px;}
.float_a ul li span{font-size: 16px;color: #00AAEA;margin: 0px 2px;}
.float_a ul li .el-button{background: #E90026;width: 138px;}
</style>
<template>
<div style="background: #F9F9F9;">
    <div class="wind">
        <div class="title">购物车</div>
        <div class="contant">
            <el-table :data="data.list" @selection-change='shopping_select' ref="multipleTable">
                <el-table-column
                    　　label-class-name="DisabledSelection"
                    　　width="70px"
                    　　type="selection"
                    　　align="center">
                </el-table-column>
                <el-table-column align="left" label='商品信息' width="400">
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
                <el-table-column align="center" label="下单价">
                    <template slot-scope="scope">{{scope.row.price}}</template>
                </el-table-column>
                <el-table-column align="center" label="数量" width="110">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.num" :min="1" :max="10" size="mini" @change="num_change()"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="总价">
                    <template slot-scope="scope">
                        <span class='num'>
                        {{(Number(scope.row.price)*Number(scope.row.num)).toFixed(2)}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作" width="80">
                    <template slot-scope="scope">
                        <el-button type="text" @click="del_shopping(scope.row.cart_id)">删除</el-button>
                    </template>
                </el-table-column>
                <template slot="empty">
                    <img src="@/assets/image/组 3619@2x.png" width="249" height="187" />
                </template>
            </el-table>
        </div>
    </div>
    <div class="shopping_float">
        <div class="float_a">
            <div>总金额：￥{{total_money}}</div>
            <ul>
                <li>已选择<span>{{select.num}}</span>件商品</li>
                <li>商品总价：￥{{select.total_money}}</li>
                <li><el-button type="danger" @click="order()">结算</el-button></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "shopping",
  data() {
    return {
        data:{},
        total_money:'',
        multipleSelection:[],
        select:{
            total_money:0,
            num:0
        }
    };
  },
  created() {
    this.$emit('foot_message',false)
    this.fetchat()
  },
  watch: {
      $route(to,from){
          console.log(from)
      }
  },
  methods: {
    fetchat(){
      this.$post('/cardList').then(res=>{
          if (res && res.code == 200){
              this.total_money = 0
              var list = JSON.parse(localStorage.getItem('shopping_play'))
              var arr = []
                res.data.list.forEach(i=>{
                    this.total_money=(Number(this.total_money)+Number((Number(i.price)*Number(i.num)))).toFixed(2)
                    if(list&&i.prod_id==list.prod_id&&this.$route.query.from){
                        list.attribute_info.forEach(j=>{
                            if(i.specifications==j.specifications&&i.purity==j.purity&&i.price==j.price&&i.inventory==j.inventory){
                                arr.push(i)
                            }
                        })
                    }
                })
                this.toggleSelection(arr)
              this.data = res.data
          }else{
              this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    toggleSelection(rows) {
        this.$nextTick(()=>{
            rows.forEach(row=>{
                this.$refs.multipleTable.toggleRowSelection(row);
            })
        })
      },
    del_shopping(cart_id){
        this.$confirm('是否将此类产品移出购物车?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            var obj = {cart_id}    
            this.$post('/delCart',obj).then(res=>{
                if (res && res.code == 200){
                    this.$message.success(res.msg);
                    this.$All.change()
                    this.$root.shopping_num = res.data.cart_num
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
            message: '已取消删除'
            });          
        });
    },
    num_change(){
        this.total_money = 0
        this.data.list.forEach(i=>{
            this.total_money=(Number(this.total_money)+Number((Number(i.price)*Number(i.num)))).toFixed(2)
        })
        this.shopping_select(this.multipleSelection)
    },
    shopping_select(val){
        this.select.num = val.length
        this.select.total_money = 0
        val.forEach(i=>{
            this.select.total_money=(Number(this.select.total_money)+Number((Number(i.price)*Number(i.num)))).toFixed(2)
        })
        this.multipleSelection = val
    },
    order(){
        if(this.multipleSelection.length>0){
            var list = JSON.stringify(this.multipleSelection)
            localStorage.setItem('shop_payList',list)
            this.$router.push({
                path: "/order",
                name: "order"
            });
        }else{
            this.$message.error('请选择需要结算的产品规格');
        }
        
    }
  }
};
</script>