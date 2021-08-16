<style scoped>
.inner_dialog /deep/ .el-dialog__header{background: #00AAEA;text-align: center;}
.inner_dialog /deep/ .el-dialog__body{padding: 18px 20px 0px 20px;}
.inner_dialog /deep/ .el-dialog__title{color: white;font-size: 18px;}
.inner_dialog /deep/ .el-dialog__headerbtn{display: none;}
.forget_a{width: 50%;margin: 0px auto;}
.forget_a .text1{font-size: 18px;color: #333;margin-bottom: 28px;}
.forget_a .text2{display: flex;justify-content: space-between;margin: 12px 0px 12px 0px;}

.forget_a .text2 .el-input{width: 58%;}
.forget_a .text2 .el-button{width: 40%;}
.forget_a .text3{width: 100%;}
.inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
<template>
<div class="forget">
    <div class="forget_a">
        <div class="text1">找回密码</div>
        <div><el-input v-model="data.mobile" placeholder="请输入手机号"></el-input></div>
        <div class="text2">
          <el-input v-model="data.code" placeholder="请输入短信验证码"></el-input>
          <el-button type="primary" @click="!sendMsgDisabled?requireMsg():''">
            <span v-if="!sendMsgDisabled">获取验证码</span>
            <span v-if="sendMsgDisabled">{{codeTime+'秒后获取'}}</span>
          </el-button>
        </div>
        <div style="margin-bottom:25px;"><el-input v-model="data.password" placeholder="请输入您的新密码" show-password></el-input></div>
        <el-button class="text3" type="primary" @click="again()">完成</el-button>
    </div>
      <!-- <Vcode :show="isShow" @fail="onFail" @success="onSuccess"/> -->
    <el-dialog
        width="300px"
        :visible.sync="innerVisible"
        title="请输入验证码"
        @close='inner_close()'
        class="inner_dialog"
        append-to-body>
        <div class="inner">
          <el-input v-model="data.form" placeholder="请输入" style="width:150px;margin-right:10px;"></el-input>
          <img :src="data.img" @click="msg_again()" style="cursor: pointer;">
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" size="small" @click="sure_identify()">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>
<script>
// import Vcode from "vue-puzzle-vcode";
// import identify from "@/components/heard_foot/identify";
export default {
  data () {
    return {
      innerVisible:false,
      sendMsgDisabled:false,
      codeTime:59,
      data:{
        img:'',
        key:'',
        request_id:'',
        form:'',
        mobile:'',
        code:'',
        password:''
      },
    }
  },
  created () {
  },
  methods: {
    requireMsg(){
      if(this.$All.isPhone(this.data.mobile)){
        this.$post('/getCaptcha').then(res=>{
            if (res && res.code == 200){
              this.data.img = res.data.img
              this.data.key = res.data.key
              this.innerVisible = true
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
      }else{
        this.$message.error('请输入正确的手机号');
      }
    },
    sure_identify(){
      var obj = {
        type:2,
        mobile:this.data.mobile,
        captcha:this.data.form,
        key:this.data.key
      }
      this.$post('/sendMessage',obj).then(res=>{
            if (res && res.code == 200){
              this.$message.success(res.msg);
              this.data.request_id = res.data.request_id
              this.get_Verification()
              this.inner_close()
            }else{
              this.$message.error(res.msg);
              this.msg_again()
            }
      }).catch(function(error) {
          console.log(error)
      });
    },
    msg_again(){
      this.$post('/getCaptcha').then(res=>{
            if (res && res.code == 200){
              this.data.img = res.data.img
              this.data.key = res.data.key
              this.$forceUpdate()
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    },
    again(){
      this.$post('/forgetPassword',this.data).then(res=>{
            if (res && res.code == 200){
              this.$message.success(res.msg);
              this.$emit('sureForget',true)
            }else{
              this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    },
    close(){
      this.data={
        img:'',
        key:'',
        request_id:'',
        form:'',
        mobile:'',
        code:'',
        password:''
      }
    },
    get_Verification(){
        let me = this;
        me.sendMsgDisabled = true;
        let codeInterval = window.setInterval(function() {
            if ((me.codeTime--) <= 0) {
                me.codeTime = 59;
                me.sendMsgDisabled = false;
                window.clearInterval(codeInterval);
            }
        }, 1000);
    },
    inner_close(){
      this.innerVisible = false
      this.data.form = ''
      this.data.img = ''
      this.data.key = ''
    },
  }
}
</script>
