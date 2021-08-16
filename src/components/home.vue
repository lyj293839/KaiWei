<style scoped>
.wind {
  width: 1200px;
  margin: 0px auto;
}
.wind ul {
  list-style: none;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
  color: #333333;
}
.wind ul li:hover {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #00aaea;
}
.heard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  color: #00aaea;
}
.banner {
  width: 100%;
  height:auto;
  /* background: url("../assets/image/banner@2x.png") no-repeat center;
  background-size: 100% 100%; */
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
.hot_list li {
  width: 230px;
  height: 370px;
  background: #ffffff;
  margin-top: 5px;
  border: 1px solid #e9e9e9;
  margin-right: 4px;
  cursor: pointer;
}
.hot_list_name{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 217px;
  margin: 0px auto;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
}
/* .hot_list_name div{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
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
.point_list li {
  width: 230px;
  height: 314px;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  font-size: 12px;
  line-height: 16px;
  margin-right: 4px;
  margin-top: 5px;
  cursor: pointer;
}
.point_price {
  color: #d70000;
  font-size: 16px;
  line-height: 21px;
  margin-top: 20px;
}
.news_list .el-col {
  text-align: left;
  padding-left: 11px;
  color: #27282c;
  margin-bottom: 60px;
}
.news_cont .el-col {
  margin: 0px;
}
.news_cont .news_cont_text1 {
  font-size: 12px;
  line-height: 16px;
}
.news_cont .news_cont_text2 {
  font-size: 17px;
  line-height: 22px;
  margin: 5px 0px 8px 0px;
}
.news_cont .news_cont_text3 {
  font-size: 13px;
  line-height: 17px;
  color: #666666;
}
.news_cont .news_cont_text4 {
  font-size: 13px;
  line-height: 17px;
  color: #00aaea;
  margin-top: 16px;
  cursor: pointer;
}
</style>
<template>
  <div>
    <div class="banner">
      <img src="@/assets/image/banner@2x.png" width="100%" style="min-height:297px;">
    </div>
    <div class="wind">
      <div class="hot_title">
        <img src="@/assets/image/组 329@2x.png" width="17" height="24" />
        <img src="@/assets/image/热销单品@2x.png" width="100" height="35" />
      </div>
      <ul class="hot_list">
        <li v-for="item in hotList" @click="prod_click(item)">
          <img :src="item.img" width="100%" height="230"/>
          <div class="hot_list_name">
            <!-- <div v-if="item.prod_name&&item.prod_name!='N/A'">{{item.prod_name}}</div>
            <div v-if="item.prod_ename&&item.prod_ename!='N/A'">{{item.prod_ename}}</div> -->
            <span v-if="item.prod_name!='N/A'&&item.prod_name">{{item.prod_name}}</span>
            <span v-else>
              <span v-if="item.prod_ename!='N/A'&&item.prod_ename">{{item.prod_ename}}</span>
              <span v-else></span>
            </span>
          </div>
          <div class="hot_list_price">{{item.price}}</div>
          <el-row>
            <!-- <el-col :span="14">编号：{{item.prod_no}}</el-col>
            <el-col :span="10">编号：{{item.mdl_no}}</el-col>
            <el-col :span="14">CAS No.：{{item.cas_no}}</el-col>
            <el-col :span="10">重量：</el-col> -->
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
      <div v-if="!hotList.length" style="display:flex;justify-content: center;">
        <img src="@/assets/image/none.png" width="260" height="260"/>
      </div>
      <div class="hot_title">
        <img src="@/assets/image/组 3414@2x.png" width="26" height="26" />
        <img src="@/assets/image/积分兑换@2x.png" width="100" height="35" />
        <span>小积分，大作用，积分即可兑换响应实物，积分兑换可随货物一起物流派送</span>
      </div>
      <ul class="point_list">
        <li v-for="item in integral_goods" @click="toPoint(item)">
          <img :src="item.img" width="100%" height="230" />
          <span>{{item.goods_name}}</span>
          <div class="point_price">所需积分：{{item.integral}}</div>
        </li>
      </ul>
      <div v-if="!integral_goods.length" style="display:flex;justify-content: center;">
        <img src="@/assets/image/none.png" width="260" height="260" />
      </div>
      <div class="hot_title">
        <img src="../assets/image/组 3415@2x.png" width="28" height="28" />
        <img src="../assets/image/新闻资讯@2x.png" width="100" height="35" />
        <span>最新行业资讯报告，一线企业动态信息，给您在事业上的信息渠道</span>
      </div>
      <el-row class="news_list">
        <el-col :span="12" v-for="item in news">
          <el-row class="news_cont">
            <el-col :span="10">
              <img :src="item.img" width="231" height="136" />
            </el-col>
            <el-col :span="12">
              <div class="news_cont_text1">{{item.create_time}}</div>
              <div class="news_cont_text2">{{item.title}}</div>
              <div class="news_cont_text3">{{item.introduction}}</div>
              <div class="news_cont_text4" @click="toNew(item)">
                查看详情
                <i class="el-icon-arrow-right"></i>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div v-if="!news.length" style="display:flex;justify-content: center;">
        <img src="@/assets/image/none.png" width="260" height="260" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data() {
    return {
      banner:[],
      hotList:[],
      integral_goods:[],
      news:[]
    };
  },
  created() {
    this.$emit('Menu',1)
    this.fetchat()
  },
  methods: {
    fetchat(){
      this.$post('/home', '').then(res=>{
        if (res && res.code == 200){
          this.banner = res.data.banner
          this.hotList = res.data.hot_product
          this.integral_goods = res.data.integral_goods
          this.news = res.data.news
        }else{
          this.$message.error(res.msg);
        }
      }).catch(function(error) {
        console.log(error)
      });
    },
    home() {
      this.$router.push({
        path: "/",
        name: "index"
      });
    },
    prod_click(item){
      this.$All.historyProd(item)
      this.$router.push({
        path: "/prod_detail",
        name: "prod_detail",
        query: {
          cas_no: item.cas_no
        }
      });
    },
    toPoint(item){
      localStorage.setItem('goods_detail',JSON.stringify(item))
      this.$router.push({
        path: '/goods_detail',
        name: 'goods_detail',
      })
    },
    toNew(item){
      var obj = {
        content:item.content,
        title:item.title,
        create_time:item.create_time,
        type:1
      }
      localStorage.setItem('newDetail',JSON.stringify(obj))
      this.$router.push({
        path: "/news_detail",
        name: "news_detail",
      });
    }
  }
};
</script>
