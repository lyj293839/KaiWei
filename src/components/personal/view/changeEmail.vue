<style scoped>
.email{color: #333;}
.email_right{background: #C5F0FC;font-size: 13px;padding: 0px 13px 110px 13px;margin-top: 40px;}
.email_right .text1{font-weight: bold;font-size: 15px;line-height: 40px;}
.email .el-button{width: 326px;}
.email /deep/ .el-form-item {margin: 0px;}
.email /deep/ .el-form-item .el-form-item__label{padding: 0px;}
.email /deep/ .el-form-item .el-input__inner{border-radius: 0px;}
.email /deep/ .el-form-item .el-input__prefix{line-height: 4px;}
.email /deep/ .el-form-item .el-input__clear{font-size: 20px;}
.img{
    background: url('../../../assets/image/路1440@2x.png') no-repeat center;
    background-size: 18px 14px;
}
.img_b{
    background: url('../../../assets/image/路1442@2x.png') no-repeat center;
    background-size: 16px 18px;
}
.email /deep/ .el-form-item .el-input__icon .el-button{width: auto;color: #00AAEA;margin: 0px 5px;}
.email /deep/ .el-form-item .el-input__icon .el-divider--vertical{margin: 0px;background: #707070;}
</style>

<template>
  <div class="email">
      <el-row type="flex" justify="space-between">
          <el-col :span="10">
            <el-form label-position="top" label-width="100px" :model="formLabelAlign">
                <el-form-item label="当前邮箱">
                    <el-input v-model="formLabelAlign.name">
                        <div class="img el-input__icon" slot="prefix"></div>
                    </el-input>
                </el-form-item>
                <el-form-item label="输入新邮箱" required>
                    <el-input v-model="formLabelAlign.region">
                        <div class="img el-input__icon" slot="prefix"></div>
                    </el-input>
                </el-form-item>
                <el-form-item label="请输入验证码" required>
                    <el-input v-model="formLabelAlign.type">
                        <div class="img_b el-input__icon" slot="prefix"></div>
                        <span class="el-input__icon" slot="suffix">
                            <el-divider direction="vertical"></el-divider>
                            <el-button type="text">获取验证码</el-button>
                        </span>
                    </el-input>
                </el-form-item>
            </el-form>
          </el-col>
          <el-col :span='10'>
              <div class="email_right">
                <div class="text1">凯为提醒您~</div>
                <div>
                    请勿把您的个人密码透露给其他人哦，您的密码是您唯
                    一的凭证，如您忘记旧密码可联系客服提供下单记录或
                    其他证据举证，人工重置密码哦！
                </div>
            </div>
          </el-col>
      </el-row>
      <div style="text-align:center;margin-top:86px;"><el-button type="primary">更新资料</el-button></div>
  </div>
</template>

<script>
export default {
  name: 'personal_changeEmail',
  data () {
    return {
        formLabelAlign:{}
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
