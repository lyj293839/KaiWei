<style scoped>
.wind_a{
  width: 1200px;
  margin: 0px auto;
}
.heard{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
  color: #00AAEA;
}
ul /deep/ .popper__arrow{display: none;}
.el-popper{margin-top: 10px;}
.heard_search .el-input{width:359px;margin-right: 19px;}
.heard_search span{font-size: 11px;cursor: pointer;color: #00AAEA;}
.heard_search /deep/ .el-input__inner{border: 1px solid #00AAEA;border-radius: 0px;}
.heard_search /deep/ .el-input-group__append{color: white;border: 1px solid #00AAEA;background: #00AAEA;border-radius: 0px;}
.heard_search /deep/ .el-input__icon{color:#00AAEA}
.heard_search /deep/ .el-input__inner::-webkit-input-placeholder{color:#00AAEA;opacity: 0.5;}
.heard_search /deep/ .el-input__inner::-moz-placeholder{color:#00AAEA;}
.heard_search /deep/ .el-input__inner:-moz-placeholder{color:#00AAEA;}
.heard_search /deep/ .el-input__inner:-ms-input-placeholder{color:#00AAEA;}
.shopping_button{
  width: 78px;
  height: 31px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  border: 1px solid #00AAEA;
  font-size: 11px;
  cursor: pointer;
  color: #00AAEA;
}
</style>
<template>
  <div class="wind_a">
    <div class="heard">
      <div>
        <router-link to="/home">
          <img src="../../assets/image/新logo@2x.png" width='172px' height='51px'>
        </router-link>
      </div>
      <div class="heard_search">
        <el-input placeholder="请输入CAS、产品号或MDL" v-model="input" size='small' prefix-icon="el-icon-search" style="width:500px;">
          <el-button slot="append" @click="Search_prod()">搜索</el-button>
        </el-input>
        <span @click="search()">结构式搜索 <i class="el-icon-d-arrow-right"></i></span>
      </div>
      <div class="shopping_button" @click="toShopping()">
        <img src="../../assets/image/组 327@2x.png" width="13px" height='13px'>
        <span>购物车</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input:''
    }
  },
  created () {
    // this.input = localStorage.getItem('keyword')
  },
  methods: {
    home(){
      this.$router.push({
          path: "/",
          name: "index",
      });
    },
    toShopping(){
      this.$router.push({
          path: "/shopping",
          name: "shopping",
      });
    },
    Search_prod(){
      // let num = this.input.split(',').length -1;
      // let num_en = this.input.split('，').length -1;
      // if(Number(num) +Number(num_en) >9){
      //   this.$message.error('一次最多搜索10个CAS、产品号或者MDL');
      // }else{
      //   // 
      //   this.$router.push({
      //       path: "/Menu",
      //       name: "Menu",
      //       query:{
      //         keyword:this.input
      //       }
      //   });
      // }
      this.$router.push({
          path: "/Menu",
          name: "Menu",
          query:{
            keyword:this.input
          }
      });
    },
    search(){
      this.$router.push({
          path: "/search",
          name: "search",
      });
    }
  }
}
</script>
