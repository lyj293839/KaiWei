<style scoped>
.wind {
  width: 1200px;
  margin: 0px auto;
  padding: 12px 0px 38px 0px;
  color: #27282c;
  font-size: 14px;
  text-align: left;
}
.heard {
  margin: 22px 0px 16px 0px;
  font-size: 16px;
  color: #666666;
}
.heard .text1 {
  color: #27282c;
  font-size: 28px;
  font-weight: bold;
}
.ul_a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  height: 46px;
  /* line-height: 46px; */
  padding: 0px 20px;
  font-size: 16px;
}
.ul_a li div{width: 90px;}
.ul_a li {
  margin-right: 40px;
  word-wrap: break-word;
  word-break:break-all;
  display: flex;
  color: #27282C;
  align-items: center;
}
.message_a {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.message_a .el-table {
  width: 940px;
  min-height: 230px;
  margin-left: 10px;
}
.message_a .el-table /deep/ .el-table__empty-text {
  line-height: normal;
  margin-top: 18px;
  color: #333333;
}
.message_a .el-table /deep/ thead {
  color: #27282c;
  font-family: "myshbd";
}
.message_a .el-table /deep/ th {
  background: #f8f8f8;
}
.message_a .el-table .el-button {
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.message_a_foot {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.message_a_foot .button_a {
  display: flex;
  align-items: center;
}
.message_a_foot .button_a .el-button{margin: 0px 10px;}
.message_a_foot .button_a div {
  width: 87px;
  height: 29px;
  background: #ffffff;
  border: 1px solid #00aaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  color: #00aaea;
  cursor: pointer;
  font-size: 11px;
}
.el_tab /deep/ .el-tabs--border-card {
  -webkit-box-shadow:none;
  box-shadow:none;
}
.el_tab .el-tabs /deep/ .el-tabs__header {
  background: #f2f2f2;
}
.el_tab .el-tabs /deep/ .el-tabs__content {
  padding: 36px 68px;
  font-size: 15px;
}
.el_tab .el-tabs /deep/ .el-tabs__item {
  font-size: 15px;
  color: #27282c;
}
.el_tab .el-tabs /deep/ .el-tabs__item:hover {
  color: #27282c;
}
.table_a {
  width: 100%;
  line-height: 46px;
}
.table_a th {
  background: #e9e9e9;
  font-weight: normal;
  text-align: center;
  width: 120px;
}
.table_a td {
  padding-left: 47px;
  font-size: 16px;
}
.table_a tr {
  border-bottom: #c6c6c6;
}
.hot_title {
  display: flex;
  align-items: center;
  margin: 12px 0px;
}
.hot_title span {
  font-size: 16px;
  line-height: 21px;
  margin-left: 8px;
  color: #27282c;
}
.hot_title img {
  margin-right: 5px;
}
.hot_list {
  list-style: none;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  color: #333333;
}
/* .hot_list li:hover {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #00aaea;
} */
.hot_list li {
  width: 232px;
  height: 356px;
  background: #ffffff;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  cursor: pointer;
  text-align: center;
  margin-right: 3px;
}
.hot_list_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 217px;
  margin: 0px auto;
  font-size: 12px;
  line-height: 16px;
}
.hot_list_price {
  width: 217px;
  font-size: 16px;
  line-height: 21px;
  color: #d70000;
  text-align: left;
  margin: 0px auto;
  margin-top: 28px;
  margin-bottom: 6px;
}
.hot_list .el-row {
  border-top: 1px solid #e9e9e9;
}
.hot_list .el-row .el-col {
  font-size: 9px;
  line-height: 23px;
  text-align: left;
  padding:0px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #666;
}
.txt_left{
  padding-right: 45px;
  border-right: 1px solid #E9E9E9;
}
.txt_heart{
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.txt_msds{
  display: flex;
  align-items: center;
  color: #00AAEA;
  font-size: 14px;
  margin-top: 13px;
  cursor: pointer;
}
.txt_tip{color: #27282c;font-size: 12px;}
.txt_look{color: #00AAEA;font-size: 12px;cursor: pointer;}
.hot_list_inqu{
  color: #D71900;
  border: 1px solid #d71900;
  cursor: pointer;
  display: inline-block;
  margin: 26px 0px 5px 6px;
  font-size: 11px;
  padding: 3px 8px;
}
</style>
<template>
  <div class="wind">
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品目录</el-breadcrumb-item>
      <el-breadcrumb-item>糖类化合物</el-breadcrumb-item>
      <el-breadcrumb-item>糖类化合物</el-breadcrumb-item>
      <el-breadcrumb-item>#N/A</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div>
      <div class="heard">
        <span class="text1">{{data.prod_name}}</span>
        <br />
        <span>{{data.prod_ename}}(订货以英文名为准)</span>
      </div>
      <ul class="ul_a">
        <li>
          <div>产品编号：</div>
          {{data.prod_no}}
        </li>
        <li>
          <div>CAS No.：</div>
          {{data.cas_no}}
        </li>
        <li>
          <div>MDL No.：</div>
          {{data.mdl_no}}
        </li>
        <li>
          <div>分子式：</div>
          {{data.molecular_formula}}
        </li>
        <li>
          <div>分子量：</div>
          {{data.molecular_weight}}
        </li>
      </ul>
      <div class="message_a">
        <img :src="data.img" width="230" height="230" />
        <el-table :data="data.attribute" @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column align="center" label='规格'>
            <template slot-scope="scope">{{scope.row.specifications}}</template>
          </el-table-column>
          <el-table-column align="center" label="纯度">
            <template slot-scope="scope">{{scope.row.purity}}</template>
          </el-table-column>
          <el-table-column align="center" label="时效">
            <template slot-scope="scope">{{scope.row.inventory}}</template>
          </el-table-column>
          <el-table-column align="center" label="目录价">
            <template slot-scope="scope">{{scope.row.price}}</template>
          </el-table-column>
          <el-table-column align="center" label="数量">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.num" :min="1" :max="10" size="small"></el-input-number>
            </template>
          </el-table-column>
          <template slot="empty">
            <img src="@/assets/image/页面-1@2x.png" width="177" height="125" />
            <div>暂无牌价信息，您可以发送询价，我们会尽快给你回复。</div>
          </template>
        </el-table>
      </div>
      <div class="message_a_foot">
        <img :src="data.img" width="54" height="54" />
        <div class="button_a">
          <el-button size="small" type="primary" @click="inquiry(data)" style="margin-right:440px;">大包装询价</el-button>
          <div @click="addCollection(data.prod_id)">
            <img src="@/assets/image/组 3416@2x.png" width="21" height="21" />加入收藏
          </div>
          <div @click="download(data.cas_no)">
            <img src="@/assets/image/组 3417@2x.png" width="21" height="21" />下载MSDS
          </div>
          <el-button type="primary" size="small" @click="shopping()">加入购物车</el-button>
          <el-button type="primary" size="small" @click="order()">立即购买</el-button>
        </div>
      </div>
      <div class="el_tab">
        <el-tabs type="border-card">
          <el-tab-pane label="产品信息">
            <table
              border="1"
              class="table_a"
              bordercolor="#E9E9E9"
              style="border-collapse: collapse;"
            >
              <tr v-if="data.prod_ename&&data.prod_ename!='N/A'">
                <th>英文名称</th>
                <td>{{data.prod_ename}}</td>
              </tr>
              <tr v-if="data.prod_name&&data.prod_name!='N/A'">
                <th>中文名称</th>
                <td>{{data.prod_name}}</td>
              </tr>
              <tr>
                <th>CAS号</th>
                <td>{{data.cas_no}}</td>
              </tr>
              <tr>
                <th>分子式</th>
                <td>{{data.molecular_formula}}</td>
              </tr>
              <tr>
                <th>分子量</th>
                <td>{{data.molecular_weight}}</td>
              </tr>
              <tr>
                <th>MDL</th>
                <td>{{data.mdl_no}}</td>
              </tr>
              <tr>
                <th>沸点</th>
                <td>{{data.boiling_point}}</td>
              </tr>
              <tr>
                <th>熔点</th>
                <td>{{data.melting_point}}</td>
              </tr>
              <tr>
                <th>外观</th>
                <td>{{data.characters}}</td>
              </tr>
              <tr>
                <th>储存条件</th>
                <td>{{data.storage_conditions}}</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="安全信息">
            <table
              border="1"
              class="table_a"
              bordercolor="#E9E9E9"
              style="border-collapse: collapse;"
            >
              <tr>
                <th>标识符号</th>
                <td>{{data.ldentifier}}</td>
              </tr>
              <tr>
                <th>化学稳定性</th>
                <td>{{data.chemical_stability}}</td>
              </tr>
              <tr>
                <th>安全说明</th>
                <td>{{data.safety_instructions}}</td>
              </tr>
              <tr>
                <th>危险品分类</th>
                <td>{{data.danger_type}}</td>
              </tr>
              <tr>
                <th>危险类别码</th>
                <td>{{data.danger_no}}</td>
              </tr>
              <tr>
                <th>UN代码</th>
                <td>{{data.un_no}}</td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="相关文档">
            <el-row :gutter="40">
              <el-col :span="8">
                <div class="txt_left">
                  <div class="txt_heart">质检报告（COA）文件</div>
                  <el-form label-position="top" label-width="100px" :model="formLabelAlign">
                    <el-form-item label="产品编号（Item Number）">
                      <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="批号（Lot Number）">
                      <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary">查询并下载</el-button>
                    </el-form-item>
                    <el-form-item>
                      <span class="txt_tip">标签上如何找到货号和批号？</span><br>
                      <span class="txt_look">查看示例</span>
                    </el-form-item>
                  </el-form>
                </div>
              </el-col>
              <el-col :span="10">
                <div>
                  <div class="txt_heart">化学品安全说明书MSDS</div>
                  <div class="txt_msds" @click="download(data.cas_no)"><img src="@/assets/image/组 3417@2x.png" width="21" height="21" />下载MSDS</div>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div>
        <div class="hot_title">
          <img src="@/assets/image/组 3643@2x.png" width="117" height="35" />
        </div>
        <ul class="hot_list">
          <li v-for="item in History_prod" @click="prod_detail(item)">
            <img :src="item.img" width="230" height="230" />
            <div class="hot_list_name">
              <span v-if="item.prod_name!='N/A'&&item.prod_name">{{item.prod_name}}</span>
              <span v-else>
                <span v-if="item.prod_ename!='N/A'&&item.prod_ename">{{item.prod_ename}}</span>
                <span v-else></span>
              </span>
            </div>
            <div style="text-align:left;">
              <div v-if="item.is_inquiry==1" class="hot_list_price">¥{{item.price}}</div>
              <div v-else class="hot_list_inqu" @click.stop="toInquiry(item)">
                点击询价
              </div>
            </div>
            <el-row>
              <el-col :span="14">
                <el-tooltip class="item" effect="dark" :disabled="!item.prod_no" :content="item.prod_no" placement="top">
                  <span>产品编号：{{item.prod_no}}</span>
                </el-tooltip>
              </el-col>
              <el-col :span="10">
                <el-tooltip class="item" effect="dark" :disabled="!item.mdl_no" :content="item.mdl_no" placement="top">
                  <span>编号：{{item.mdl_no}}</span>
                </el-tooltip>
              </el-col>
              <el-col :span="24">CAS No.：{{item.cas_no}}</el-col>
            </el-row>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "prod_detail",
  data() {
    return {
      data:{attribute:[]},
      multipleSelection:[],
      formLabelAlign:{},
      History_prod:[],
      isLogin:false,
    };
  },
  created() {
    this.fetchat()
    this.$All.title_change({title:this.$route.query.cas_no})
    if(localStorage.getItem('token')){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
  },
  methods: {
    fetchat(){
      if(this.$route.query.cas_no){
        var cas = {
          cas_no:this.$route.query.cas_no
        }
        this.$post('/productInfo', cas).then(res=>{
          if (res && res.code == 200){
            if(res.data.attribute&&res.data.attribute.length){
              res.data.attribute.forEach(i=>{i.num = 1})
            }
            this.data = res.data
            this.History_prod = JSON.parse(localStorage.getItem('historyProd'))
          }else{
            this.$message.error(res.msg);
          }
        }).catch(function(error) {console.log(error)});
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    download(cas){
      axios({
          method: 'get',
          withCredentials:false,
          url: 'http://180.96.11.28:8008/api/sds/sdspdf/Angene/110615-25-3',
          responseType: 'arraybuffer'
      }).then(response => {
          this.$All.forceFileDownload(response.data,cas+'.pdf')
      }).catch(() => console.log('error occured'))
    },
    prod_detail(item) {
      var arr = JSON.parse(localStorage.getItem('historyProd'))
      if(JSON.stringify(arr).indexOf(JSON.stringify(item))==-1){
           arr.push(item);
           if(arr.length>10){
             arr.splice(1,1)
           }
      }
      localStorage.setItem('historyProd',JSON.stringify(arr))
      this.$router.push({
        path: "/prod_detail",
        name: "prod_detail",
        query: {
          cas_no: item.cas_no
        }
      });
      this.fetchat()
    },
    addCollection(prod_id){
      var obj = {prod_id}
      if(this.isLogin){
        this.$post('/addCollection', obj).then(res=>{
          if (res && res.code == 200){
            this.$message.success(res.msg);
          }else{
            this.$message.error(res.msg);
          }
        }).catch(function(error) {console.log(error)});
      }else{
        this.$parent.$parent.$emit('getMessage', true);
      }
    },
    toInquiry(item){
      let name = ''
      if(item.prod_name!='N/A'&&item.prod_name){
        name = item.prod_name
      }else{
        if(item.prod_ename!='N/A'&&item.prod_ename){
          name = item.prod_ename
        }else{
          name = ''
        }
      }
      this.$router.push({
        path: "/inquiry",
        name: "inquiry",
        query: {
          prod_name:name,
          cas_no:item.cas_no
        }
      });
    },
    inquiry(item){
      let name = ''
      if(item.prod_name!='N/A'&&item.prod_name){
        name = item.prod_name
      }else{
        if(item.prod_ename!='N/A'&&item.prod_ename){
          name = item.prod_ename
        }else{
          name = ''
        }
      }
      this.$router.push({
        path: "/inquiry",
        name: "inquiry",
        query: {
          prod_name:name,
          cas_no:item.cas_no
        }
      });
    },
    order(){
      if(this.isLogin){
        if(this.multipleSelection.length>0){
          var obj = {
            prod_id:this.data.prod_id,
            attribute_info:this.multipleSelection
          }
          var list = JSON.stringify(obj)
          localStorage.setItem('shopping_play',list)
          this.$post('/addCart', obj).then(res=>{
            if (res && res.code == 200){
              this.$All.change()
              this.$root.shopping_num = res.data.cart_num
              this.$router.push({
                path: "/shopping",
                name: "shopping",
                query:{
                  from:true
                }
              });
            }else{
              this.$message.error(res.msg);
            }
          }).catch(function(error) {console.log(error)});
        }else{
          this.$message.error('请选择需要添加的产品规格');
        }
      }else{
        this.$parent.$parent.$emit('getMessage', true);
      }
    },
    shopping(){
      if(this.isLogin){
        if(this.multipleSelection.length>0){
          var obj = {
            prod_id:this.data.prod_id,
            attribute_info:this.multipleSelection
          }
          var list = JSON.stringify(obj)
          localStorage.setItem('shopping_play',list)
          this.$post('/addCart', obj).then(res=>{
            if (res && res.code == 200){
              this.$message.success(res.msg);
              this.$root.shopping_num = res.data.cart_num
              this.$All.change()
            }else{
              this.$message.error(res.msg);
            }
          }).catch(function(error) {console.log(error)});
        }else{
          this.$message.error('请选择需要添加的产品规格');
        }
      }else{
        this.$parent.$parent.$emit('getMessage', true);
      }
    },
  }
};
</script>
