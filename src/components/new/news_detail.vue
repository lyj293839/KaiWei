<style scoped>
.wind{position: relative;background: #f6f6f6;}
.wind_a{
  width: 1103px;
  margin: 0px auto;
  padding-top: 50px;
  color: #fff;
  text-align: left;
  font-size: 35px;
  position:relative;
  z-index: 2;
}
.el-breadcrumb-item{cursor: pointer;}
.banner {
  width: 100%;
  height: 250px;
  background: url("../../assets/image/309169388@2x.png") no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
}
.el-breadcrumb{margin: 15px 0px;}
.el-tabs /deep/ .el-tabs__header{margin: 0px;}
.el-breadcrumb__item /deep/ .el-breadcrumb__inner{color: white !important;font-size: 16px;}
.el-breadcrumb__item /deep/ .el-icon-d-arrow-right{color: white !important;font-size: 16px;}
.new_list{
  background: white;
  font-size: 13px;
  height: 1000px;
  padding: 16px 19px;
  color: #27282C;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
}
.new_heard{
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #DDDDDD;
    padding-bottom: 13px;
}
.new_contant{
    width: 805px;
    margin: 0px auto;
    text-align: left;

}
.contant_title{font-size: 28px;}
.contant_text{font-size: 16px;}
</style>
<template>
  <div class="wind">
    <div class="banner">
      <img src="@/assets/image/309169388_@2x.png" width="100%" height="100%">
    </div>
    <div class="wind_a">
      <div class="title">{{data.type==2?'新闻资讯':'企业资讯'}}   NEWS</div>
      <el-breadcrumb separator-class="el-icon-d-arrow-right">
      </el-breadcrumb>
      <div class="new_list">
        <div class="new_heard">
            <span>{{data.title}}</span>
            <span>{{data.create_time}}</span>
        </div>
        <div class="new_contant">
            <!-- <div class="contant_title">丁二烯强周期的背后逻辑探讨</div> -->
            <div class="contant_text">
                <span v-html="data.content"></span>
            </div>
            <!-- <img src="@/assets/image/NoPath - 副本 (6)@2x.png" width="805" height="456"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news_detail",
  data() {
    return {
      data:{}
    };
  },
  created() {
    this.data =JSON.parse(localStorage.getItem('newDetail')) 
  },
  methods: {}
};
</script>
