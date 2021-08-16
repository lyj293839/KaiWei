<style scoped>
.foot{
    width: 100%;
    /* height: 380px; */
    background: white;
    position: relative;
    z-index: 10;
}
.foot_a{
    width: 1200px;
    margin: 0px auto;
    padding: 47px 0px;
}
.foot_a ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
}
.foot_a ul li{
    display: flex;
    align-items: center;
    text-align: left;
    /* font-size: 12px; */
    line-height: 25px;
    /* color: #666666; */
}
.foot_a .text1{
    font-size: 14px;
    color: #333333;
    line-height: 19px;
    margin-bottom: 10px;
}
.foot_a img{margin-right: 10px;}
.foot_title{
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    font-size: 14px;
    margin: 30px 0px 30px 0px;
    font-weight: bold;
}
.foot_title li,.foot_text li{width: 20%;}
.foot_text{
    color: #666666;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    padding: 0px;
    align-items: flex-start !important;
} 
.foot_text span{cursor: pointer;}
.end_text a{
    color: #333333;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
}
.dialog /deep/ .el-dialog__header{padding: 0px;}
.dialog /deep/ .el-dialog__body{padding-top: 10px;}
.foot_img{
    width: 1200px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #D1D1D1;
}
.foot_menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px !important;
    border-bottom: 1px solid #D1D1D1;
    color: #333333;
    font-size: 14px;
}
.foot_menu li{
    height: 30px;
    line-height: 30px;
    padding: 0px 12px;
    border-radius: 30px;
    cursor: pointer;
    border: 1px solid white;
}
.foot_menu li:hover{
    border-color: #00AAEA;
    color: #00AAEA;
}
</style>
<template>
<div>
    <div class="foot" v-if="foot_show">
        <div class="foot_a">
            <!-- <ul>
                <li>
                    <img src="../../assets/image/56@2x.png" width="64" height="64">
                    <div>
                        <div class="text1">品质保障</div>
                        <div>品质护航  轻松购物</div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/image/58@2x.png" width="64" height="64">
                    <div>
                        <div class="text1">优质服务</div>
                        <div>售后无忧</div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/image/59@2x.png" width="64" height="64">
                    <div>
                        <div class="text1">快速发货</div>
                        <div>效率为先</div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/image/57@2x.png" width="64" height="64">
                    <div>
                        <div class="text1">技术支持</div>
                        <div>专业经验  贴心服务</div>
                    </div>
                </li>
            </ul> -->
            <ul class="foot_menu">
                <li @click="to_menu('home')">产品目录</li>
                <li @click="to_menu('Menu')">全部商品</li>
                <li @click="to_menu('market')">积分商城</li>
                <li @click="to_menu('contact')">联系我们</li>
                <li @click="to_menu('understand')">走进凯为</li>
                <li @click="to_menu('news')">实时资讯</li>
            </ul>
            <ul class="foot_title">
                <li>新手入门</li>
                <li>售后服务</li>
                <li>关于我们</li>
                <li style="width:18%;">参考资料</li>
                <li style="width:22%;">联系方式</li>
            </ul>
            <ul class="foot_text">
                <li>
                    <el-row>
                        <el-col :span="24"><span>购物流程</span></el-col>
                        <el-col :span="24"><span>大包装询价</span></el-col>
                        <el-col :span="24"><span>如何检索</span></el-col>
                        <el-col :span="24"><span>销售条款</span></el-col>
                        <el-col :span="24"><span>付款流程</span></el-col>
                        <el-col :span="24"><span>索取发票</span></el-col>
                    </el-row>
                </li>
                <li>
                    <el-row>
                        <el-col :span="24"><span @click="dialog('delivery')">配送说明</span></el-col>
                        <el-col :span="24"><span>商品验货</span></el-col>
                        <el-col :span="24"><span>退换货申明</span></el-col>
                    </el-row>
                </li>
                <li>
                    <el-row>
                        <el-col :span="24"><span @click="router('/understand')">公司简介</span></el-col>
                        <el-col :span="24"><span @click="router('/recruit')">人才招聘</span></el-col>
                        <el-col :span="24"><span @click="router('/contact')">联系我们</span></el-col>
                        <el-col :span="24"><span @click="router('/news')">新闻中心</span></el-col>
                    </el-row>
                </li>
                <li style="width:18%;">
                    <el-row>
                        <el-col :span="24"><span @click="router('/search')">质检证书COA</span></el-col>
                        <el-col :span="24"><span @click="router('/search')">MSDS搜索</span></el-col>
                        <el-col :span="24"><span>RS风险术语</span></el-col>
                        <el-col :span="24"><span>GHS危险说明</span></el-col>
                    </el-row>
                </li>
                <li style="width:22%;">
                    <el-row>
                        <el-col :span="24">热线：02185461859</el-col>
                        <el-col :span="24">地址：上海市浦东新区秋月路26号1号楼216室</el-col>
                        <el-col :span="24">邮箱：service@aivichem.com</el-col>
                        <el-col :span="24">QQ：34367460</el-col>
                    </el-row>
                </li>
            </ul>
        </div>
    </div>
    <div class="foot_img">
        <img src="../../assets/image/新logo@2x.png" width="94" height="28" style="margin:28px 0px 21px 0px;">
        <div class="end_text">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">Copyright© 上海凯为化学技术有限公司 版权所有 2018-2030  沪ICP备19034309号-1</a> 
        </div>
    </div>
    

    <el-dialog class="dialog" :visible.sync="dialog_" width="500px">
        <delivery v-if="is_delivery"></delivery>
    </el-dialog>
</div>
  
</template>
<script>
import delivery from "./foot_file/delivery";
export default {
components:{
    delivery
},
  data () {
    return {
      dialog_:false,
      is_delivery:false
    }
  },
  props: ['foot_show'],
  created () {
  },
  methods: {
      router(a){
        this.$router.push({
            path: a,
        });
      },
      to_menu(a){
        this.$router.push({
            path:'/'+a,
            name:a
        });
      },
      dialog(a){
        this.dialog_=true
        if(a=='delivery'){
            this.is_delivery = true
        }
      }
  }
}
</script>
