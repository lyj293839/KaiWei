<template>
  <div id="app">
    <div class="top">
      <div class='top_a'>
        <div class="top_a_left">
          <img src="./assets/image/组 325@2x.png" style="width:16px;height:16px;margin:0px 10px;">
          <span>欢迎访问凯为化学！</span>
        </div>
        <ul>
          <li style="color:#00AAEA;border:0px;">
            <span v-if="!isLogin" @click="loginVisible = true">请登录</span>
            <el-dropdown v-else>
              <span class="el-dropdown-link" @click="toPersonal()">
                {{User.mobile}}
              </span>
              <el-dropdown-menu slot="dropdown" class="el_dropdown">
                <el-dropdown-item style="font-size:11px;">
                  <div @click="loginOut()">
                    退出账户
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li v-if="!isLogin" @click="registerVisible=true"><span>免费注册</span></li>
          <li @click="toPersonal()"><span>用户中心</span></li>
          <li @click="toCollect()"><span>我的收藏</span></li>
          <li @click="toShopping()"><span>购物车（<span style="color:red;">{{$root.shopping_num}}</span>）</span></li>
        </ul>
      </div>
    </div>

    <div class="left">
      <ul>
        <li @click="toContact()">
          <img src="@/assets/image/组 362@2x.png" width="30" height="30">
          <div>联系客服</div>
          <div class="und"></div>
        </li>
        <li @click="toShopping()">
          <el-badge :value="$root.shopping_num" class="item">
            <img src="@/assets/image/组 363@2x.png" width="30" height="30">
          </el-badge>
          <div>购物车</div>
          <div class="und"></div>
        </li>
        <li @click="toPersonal()">
          <img src="@/assets/image/组 364@2x.png" width="30" height="30">
          <div>个人中心</div>
          <div class="und"></div>
        </li>
        <li @click="toCollect()">
          <img src="@/assets/image/组 365@2x.png" width="30" height="30">
          <div>我的收藏</div>
          <div class="und"></div>
        </li>
        <li @click="feedbackVisible=true">
          <img src="@/assets/image/组 366@2x.png" width="30" height="30">
          <div>我要反馈</div>
          <div class="und"></div>
        </li>
        <li @click="goTop()">
          <img src="@/assets/image/组 367@2x.png" width="30" height="30">
          <div>返回顶部</div>
        </li>
      </ul>
    </div>



    <router-view @getMessage="showMsg" style="margin-top:35px;"></router-view>

    <el-dialog
      :visible.sync="loginVisible"
      width="715px"
      class="login"
      @close="closeLogin()"
      center>
      <Login ref="login" @closeLogin="closeLogin" @forget='forget' @to_resgister='to_resgister'></Login>
    </el-dialog>

    <el-dialog
      title="账号安全"
      :visible.sync="forgetVisible"
      class="forget"
      @close='forgetClose()'
      width="715px">
      <forgetPassword ref="forgetChild" @sureForget='sureForget'></forgetPassword>
    </el-dialog>

    <!-- <el-dialog
      title="账号安全"
      :visible.sync="againVisible"
      class="forget"
      @close='againClose()'
      width="715px">
      <div class="forget_a">
        <div class="text1">请输入您的密码</div>
        <div><el-input v-model="againForm.passworld" placeholder="请输入您的新密码" show-password></el-input></div>
        <div class="text2">
          <el-input v-model="againForm.passworldCheck" style="width:100%;" placeholder="请再次输入您的新密码" show-password></el-input>
        </div>
        <el-button class="text3" type="primary">完成</el-button>
      </div>
    </el-dialog> -->

    <el-dialog
      title="账号注册"
      :visible.sync="registerVisible"
      class="register"
      @close='registerClose()'
      width="40%">
      <Register ref="registerChild" @sureRegister='sureRegister'></Register>
    </el-dialog>

    <el-dialog
      title="意见与反馈"
      :visible.sync="feedbackVisible"
      class="feedback"
      @close='close_feed()'
      width="514px">
      <div>
        <h1>尊敬的用户您好，您的真实感受和建议对我们的改进十分重要，感谢您的反馈~</h1>
        <el-form label-position="top" label-width="80px" :model="formLabelAlign">
          <el-form-item label="建议内容" required>
            <el-input type="textarea" rows="5" size="small" placeholder="详细描述您的建议或者问题，我们会认真对待。" v-model="formLabelAlign.content"></el-input>
          </el-form-item>
          <el-row type="flex" justify="space-between">
            <el-col :span="11">
              <el-form-item label="您的称呼" required>
                <el-input size="small" v-model="formLabelAlign.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="您的联系方式" required>
                <el-input size="small" v-model="formLabelAlign.mobile"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div>
          <el-button size="small" plain @click="close_feed()">取消</el-button>
          <el-button size="small" type="primary" @click="save_feed()">确定</el-button>
        </div>
      </div>
    </el-dialog>
    

    
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode";
import Register from "@/components/heard_foot/resgister";
import forgetPassword from "@/components/heard_foot/forget_password";
import Login from "@/components/heard_foot/login";
export default {
  name: 'App',
  components:{
    Vcode,
    Register,
    forgetPassword,
    Login
  },
  data () {
    return {
      loginVisible:false,
      forgetVisible:false,
      // againVisible:false,
      registerVisible:false,
      isShow:false,
      feedbackVisible:false,
      form:{},
      againForm:{},
      isLogin:'',
      User:'',
      formLabelAlign:{
        name:'',
        content:'',
        mobile:''
      },
      radio:1,
      checked:true,
    }
  },
  created () {
    localStorage.setItem('historyProd',JSON.stringify([]))
    window.document.title = sessionStorage.getItem('title')?sessionStorage.getItem('title'):'凯为化学'
    this.$All.change()
    if(localStorage.getItem('token')){
      this.isLogin = true
      this.User = JSON.parse(localStorage.getItem('User'))
    }else{
      this.isLogin = false
    }
  },
  methods: {
    toContact(){
      this.$router.push({
        path: "/contact",
        name: "contact",
      });
    },
    toShopping(){
      this.$router.push({
        path: "/shopping",
        name: "shopping"
      });
    },
    toPersonal(){
      this.$router.push({
        path: "/personal",
        name: "personal"
      });
    },
    toCollect(){
      this.$router.push({
        path: "/personal_collect",
        name: "personal_collect"
      });
    },
    save_feed(){
      this.$post('/addOpinion',this.formLabelAlign).then(res=>{
          if (res && res.code == 200){
            this.$message.success(res.msg);
            this.feedbackVisible = false
          }else{
            this.$message.error(res.msg);
          }
      }).catch(function(error) {
          console.log(error)
      });
    },
    close_feed(){
      this.feedbackVisible = false
      this.formLabelAlign = {
        name:'',
        content:'',
        mobile:''
      }
    },
    showMsg (val) {
      this.loginVisible = val
    },
    goTop() {
      this.$All.goTop()
    },
    sureForget(val){
      this.forgetClose()
    },
    sureRegister(){
      this.registerClose()
    },
    forget(){
      this.loginVisible = false
      this.forgetVisible = true
    },
    to_resgister(){
      this.registerVisible = true
      this.loginVisible = false
    },
    forgetClose(){
      this.$refs.forgetChild.close()
      this.forgetVisible = false
    },
    registerClose(){
      this.$refs.registerChild.close()
      this.registerVisible = false
    },
    // againClose(){
    //   this.againForm = {}
    //   this.againVisible = false
    // },
    click_code(){
      this.isShow = true
    },
    // again(){
    //   this.forgetVisible = false
    //   this.againVisible = true
    // },
    closeLogin(){
      this.loginVisible = false
      this.$refs.login.resetForm();
      if(localStorage.getItem('token')){
        this.isLogin = true
        this.User = JSON.parse(localStorage.getItem('User'))
      }else{
        this.isLogin = false
      }
    },
    loginOut(){
      this.$confirm('确定退出系统?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info'
      }).then(() => {
        this.$post('/outLogin').then(res=>{
            if (res && res.code == 200){
              this.$store.commit('logout')
              this.$message({
                type: 'success',
                message: '退出成功!'
              })
              setTimeout(() => {
                location.reload() // 强制刷新
              }, 500)
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          offset:'50',
          message: '已取消退出'
        })
      })
    },
}}
</script>

<style scoped>
#app {
  font-family:'Microsoft YaHei','苹方';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app /deep/ .el-dialog__close{display: none;}
.vue-puzzle-vcode{z-index:9999;}
.top{
  width: 100%;
  height: 35px;
  background: #FFFFFF;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  position: fixed;
  top: 0px;
  z-index: 2000;
}
.top_a{
  width: 1200px;
  height: 35px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_a ul{
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-family:'msyh';
  font-weight: 400;
  line-height: 15px;
  color: #666666;
  opacity: 1;
}
.top_a ul li{
  cursor: pointer;
  padding: 0px 10px;
  border-left: 1px solid #707070;
}
.top_a ul li .el-dropdown-link{font-size: 11px;color: #00AAEA;}
/* .el-dropdown-menu{padding: 0px;} */
.el_dropdown{padding: 0px;font-size:11px;}
 .top_a .top_a_left{
  font-size: 11px;
  font-family: 'msyh';
  font-weight: 400;
  line-height: 15px;
  color: #00AAEA;
  opacity: 1;
  display: flex;
  align-items: center;
 }
 .left{
  position: fixed;
  width: 56px;
  /* left: 50%; */
  right: 0px;
  z-index: 999;
  border: 1px solid #00AAEA;
  top:50%;
  transform: translate(-10px, -50%);
  background: white;
  border-radius: 2px;
  padding: 0px 5px;
 }
 .left ul{
   list-style: none;
   padding: 0px;
   text-align: center;
   font-size: 9px;
   color: #27282C;
 }
 .left ul li{cursor: pointer;margin: 3px 0px;}
 .item {
  margin-top: 10px;
  margin-right: 0px;
}
 .und{
   height: 2px;
   margin-top: 6px;
   background: radial-gradient(circle, rgba(0, 170, 234, 0.45) 0%, rgba(0, 170, 234, 0) 100%);
 }
.login /deep/ .el-dialog__header{display: none;}
.login /deep/ .el-dialog__body{padding: 0px;}
.forget /deep/ .el-dialog__header{background: #00AAEA;}
.forget /deep/ .el-dialog__body{padding: 18px 0px 60px 0px;}
.forget /deep/ .el-dialog__title{color: white;font-size: 18px;}
.forget_a{width: 50%;margin: 0px auto;}
.forget_a .text1{font-size: 18px;color: #333;margin-bottom: 28px;}
.forget_a .text2{display: flex;justify-content: space-between;margin: 12px 0px 25px 0px;}
.forget_a .text2 .el-input{width: 58%;}
.forget_a .text2 .el-button{width: 40%;}
.forget_a .text3{width: 100%;}
.register /deep/ .el-dialog__header{background: #00AAEA;}
.register /deep/ .el-dialog__body{padding:18px 0px 60px 0px;}
.register /deep/ .el-dialog__title{color: white;font-size: 18px;}

.feedback h1{font-size: 14px;color: #333;font-weight: normal;}
.feedback /deep/ .el-dialog__header{border-bottom: 1px solid #DDDDDD;}
.feedback /deep/ .el-dialog__title{color: #333;font-size: 16px;font-weight: bold;}
.feedback /deep/ .el-dialog__body{padding:8px 12px 22px 12px;}
.feedback .el-form{text-align: left;}
.feedback /deep/ .el-form-item__label{color: #333;font-size: 12px;padding: 0px;line-height: 20px;}
.feedback /deep/ .el-form-item{margin-bottom: 0px;}
.feedback /deep/ .el-input__inner,.feedback /deep/ .el-textarea__inner{border-radius: 0px;}
.feedback .el-button{border-radius: 0px;width:128px;margin:0px 18px;margin-top: 35px;}
</style>
