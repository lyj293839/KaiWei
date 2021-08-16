<style scoped>
.login_a{
   width: 100%;
   height: auto;
   background: url('../../assets/image/组3413@2x.png') no-repeat center;
   background-size: 100% 100%;
 }
 .login_b{padding: 20px 30px;}
 .login_b span,font{cursor: pointer;}
 .login_b .text1{color: #15254E;font-size: 20px;font-weight: bold;}
 .login_b .text1 span{color: #666666;font-size: 12px;font-family: 'msyh';letter-spacing: 5px;}
 .login_b .text2{color: #999999;font-size: 12px;display: flex;justify-content: space-between;align-items: center;}
 .login_b .text3{color: #999999;font-size: 12px;}
 .login_b .el-form{margin:30px 0px;}
 .login_b .el-form .el-button{margin-top: 20px;width: 125px;}
 .login_b .text2 .el-checkbox{color: #999999;font-size: 12px;display: flex;align-items: center;}
 .login_b /deep/ .el-form-item__label{color: #999999;font-size: 12px;padding: 0px;}
 .login_b /deep/ .el-form-item{margin-bottom: 10px;}
</style>
<template>
<div class="login_a">
        <el-row type="flex" justify="end">
          <el-col :span="12"></el-col>
          <el-col :span="12">
            <div class="login_b">
              <div class="text1">
                <div>Hello！</div>
                <span>欢迎您<font color='#00AAEA'>登录</font>凯为化学！</span>
              </div>
              <el-form label-position="top" :rules="rules" ref="ruleForm" label-width="80px" :model="formLabelAlign">
                <el-form-item label="账号" prop="mobile">
                  <el-input v-model="formLabelAlign.mobile"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input v-model="formLabelAlign.password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="text2">
                      <div></div>
                    <span @click="forget()">忘记密码？</span>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
              <div class="text3">还没有账号 <font color='#00AAEA' @click="to_resgister()">立即注册</font></div>
            </div>
          </el-col>
        </el-row>
      </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      formLabelAlign:{
        mobile:'',
        password:''
      },
      rules: {
        mobile:[
          {required: true, message: "用户名不能为空", trigger: 'blur'}
        ],
        password:[
          {required: true, message: "密码不能为空", trigger: 'blur'},
        ]
      }
    }
  },
  created () {
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$post('/login', this.formLabelAlign).then(res=>{
              if (res && res.code == 200){
                localStorage.setItem('token',JSON.stringify(res.data.userToken))
                localStorage.setItem('User',JSON.stringify(this.formLabelAlign))
                this.$store.commit("login", res.data.userToken);
                this.$message({
                    message:'登录成功',
                    offset:'50',
                    type:'success'
                })
                this.$emit('closeLogin')
                // var toPath = localStorage.getItem('toRouter')
                // if(toPath){
                //   this.$router.push({
                //     path: '/'+toPath,
                //     name: toPath
                //   })
                // }
                this.memberInfo()
                this.$All.change()
                // setTimeout(() => {
                //   location.reload() // 强制刷新
                // }, 500)
              }else{
                this.$message.error(res.msg);
                this.$root.isLogin = false
              }
            }).catch(function(error) {console.log(error)});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    memberInfo(){
      this.$post('/memberInfo').then(res=>{
            if (res && res.code == 200){
              localStorage.setItem('memberInfo',JSON.stringify(res.data))
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields();
    },
    forget(){
      this.$emit('forget')
    },
    to_resgister(){
      this.$emit('to_resgister')
    }
  }
}
</script>
