<style scoped>
.inner_dialog /deep/ .el-dialog__header{background: #00AAEA;text-align: center;}
.inner_dialog /deep/ .el-dialog__body{padding: 18px 20px 0px 20px;}
.inner_dialog /deep/ .el-dialog__title{color: white;font-size: 18px;}
.inner_dialog /deep/ .el-dialog__headerbtn{display: none;}
.inner_dialog .font_app div{margin-bottom: 10px;}
.inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.register_a{width:60%;margin: 0px auto;text-align: left;}
.register_a /deep/ .el-form-item__label{color: #999999;font-size: 12px;padding: 0px;
line-height: 25px;}
.register_a /deep/ .el-form-item{margin-bottom: 20px;}
.register_a .item{text-align: center;}
.register_a .item .el-button{width: 50%;}
.register_a .phone /deep/ .el-select .el-input__inner{
  background: white;
  border-color:#DCDFE6;
  border: 1px solid #DCDFE6;
  /* border-left:0px; 
  border-right:0px; */
  /* border-top: 1px;
  border-bottom: 1px; */
  border-radius: 0px;
}
.register_a .phone /deep/ .is-focus .el-input__inner{border: 1px solid #DCDFE6;}
.register_a .phone /deep/ .el-input__inner:hover{background: white;border: 1px solid #DCDFE6;}
.radio /deep/ .el-form-item__error{
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<template>
  <div class="register_a">
        <el-form label-position="top" label-width="80px" ref="Form" :model="formLabelAlign" :rules="rules">
          <el-form-item label="您的姓名" prop='true_name'>
            <el-input v-model="formLabelAlign.true_name"></el-input>
          </el-form-item>
          <el-form-item label="您的手机号" class="phone" prop='mobile'>
            <!-- <el-input placeholder="请输入内容" v-model="formLabelAlign.mobile">
              <el-select v-model="select" slot="prepend" placeholder="" style="width:110px;">
                <el-option label="中国大陆" value="1"></el-option>
                <el-option label="中国大陆" value="2"></el-option>
                <el-option label="中国大陆" value="3"></el-option>
              </el-select>
            </el-input> -->
            <el-input v-model="formLabelAlign.mobile"></el-input>
          </el-form-item>
          <el-form-item label="您的密码" prop="password">
            <el-input v-model="formLabelAlign.password" show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="请确认您的密码" prop="passwordCheck">
            <el-input v-model="formLabelAlign.passwordCheck" show-password autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="您的验证码" prop="code">
            <el-input placeholder="请输入内容" v-model="formLabelAlign.code">
              <el-button slot="append" type="primary" @click="!sendMsgDisabled?requireMsg():''">
                 <span v-if="!sendMsgDisabled">获取验证码</span>
                  <span v-if="sendMsgDisabled">{{codeTime+'秒后获取'}}</span>
              </el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="请输入您的公司名称" prop="company">
            <el-input v-model="formLabelAlign.company"></el-input>
          </el-form-item>
          <el-form-item label="请输入您的邮箱" prop="email">
            <el-input v-model="formLabelAlign.email"></el-input>
          </el-form-item>
          <el-form-item class="item radio" prop="radio">
            <el-checkbox v-model="formLabelAlign.radio">我同意</el-checkbox>
            <font color='#00AAEA' style="cursor: pointer;" @click="appVisible=true">[凯为服务协议]</font>
          </el-form-item>
          <el-form-item class="item">
            <el-button type="primary" @click="resgister_('Form')">立即注册</el-button>
          </el-form-item>
        </el-form>

        <el-dialog
            width="300px"
            :visible.sync="innerVisible"
            title="请输入验证码"
            @close='inner_close()'
            class="inner_dialog"
            append-to-body>
            <div class="inner">
              <el-input v-model="msg.form" placeholder="请输入" style="width:150px;margin-right:10px;"></el-input>
              <img :src="msg.img" @click="msg_again()" style="cursor: pointer;">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" size="small" :loading="loading_message" @click="sure_identify()">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
            width="800px"
            :visible.sync="appVisible"
            title="凯为服务协议"
            class="inner_dialog"
            append-to-body>
            <div class="font_app">
              <div>尊敬的客户，在您使用本网站采购时，您须遵守本网站的以下销售条款（其中在本条款中，“您”指您个人、产品使用的雇主或其他实体）。</div>
              <div>1. —— 所有销售行为都应在获得买方同意的基础上遵守本条款的详细规定。任何经过修改过的条款不对卖方产生约束力，除非该条款获得书面同意并且由卖方主管或其他授权代表签字。</div>
              <div>2.—— 根据本条款签订的订单，只有在获得买卖双方就具体变更及因此对价格与交货期产生的影响达成书面意见并签字后方可变更或修订。买方不得取消订单，除非获得卖方明确的书面同意。在这种情况下，卖方将告知买方取消订单需承担的所有费用，而买方同意支付所有这些费用。相关费用包括但不限于：仓储费、运费、生产非标准产品的成本、采购不可退货材料的成本、供应商向卖方收取的订单取消费用、以及其他买方在卖方允许情况下取消订单导致的任何费用。卖方独立会计师对费用的确认对双方而言是最终决定性的。</div>
              <div>
                3. 交货、索赔、延期 —— 除非另有约定，所有订单都是基于FCA卖方货交承运人（指定地点）。如果运费与装卸手续费已出报价或发票，它们应该包括实际运费之外的费用。将货物在卖方装运点递交给承运人即完成了向买方的交货过程，而且买方将承担运输过程中所有的损失或损坏。每种产品的发货方法在卖方的商品目录中已经标出。但是，卖方保留根据具体情况决定最终发货方式的权利。卖方保留分期发货的权利，对所有分期发货的货物卖方单独出具发票，买方在发票到期时付款，不涉及到其后交货的货物。任何一期货物的延迟交货不会免去买方接受剩余货物的责任。
                买方在收到任何到货后应立即进行检查并以书面形式向卖方就短缺、货物缺陷、损坏等情况进行申诉，并应妥善保管货物等待卖方的书面处理意见。如果买方在收货五天内未能告知卖方，这些货物将被最终认为符合本销售条款内容并被买方不可撤回地接受。
                卖方对因任何超出卖方合理控制之外的因素导致的制造、交货延误或失败造成的损失、损害或处罚不承担责任。这些因素包括但不限于：不成功的反应，买方行为，禁运或其他政府行为，影响卖方商业活动的法规或要求，火灾，爆炸，意外，盗窃，故意破坏，暴动，战争，罢工或其他因劳动力造成的困难，闪电、水灾、风暴或其他天灾，交通延误或无法以目前的价格获得必要的劳动力、燃料、材料、用品或电力供给。
              </div>
              <div>4. 货物分配 —— 如果卖方出于任何原因无法按照买方订单中的数量提供货物，卖方可以根据他认为公平、可行的方式向买方或所有买方分配可用物资，而不承担任何可能造成的后果或承担任何责任。</div>
              <div>
                5.付款 —— 除非另有约定，账期通常为开具发票后30天。如果买方的经济状况导致卖方产生不安全感，卖方可以根据合同金额的最终可回收性，全权决定在不通知买方的情况下延迟或推迟交货；卖方可自行决定将账期改为在所有剩余货物发货前预付部分或全部费用。
                如买方在支付货款时违约，卖方可以自行决定，在不损害卖方合法补偿的前提下，延迟交货、取消合同或者出售原应供应给买方的货品以将此作为货款，而不抵销或减少原合同金额。买方同意支付应付货款的余额。买方同意支付所有因买方违约造成的成本费用，包括但不限于，合理的律师代理费、会记费用和其他相关费用。
              </div>
              <div>
                6.税收和其他费用 —— 任何使用税、销售税、特许权税、关税、检验或测试费，或其他政府在买方和卖方交易中征收的税收、费用都应由买方在报价或所开发票之外支付。如果卖方被要求支付任何税收、费用，买方应该为卖方报销费用；或者，为了避免支付以上费用，买方应该在提交订单时向卖方提供免税证明或其他收取以上等费用的政府部门能够接受的文件。
              </div>
              <div>
                7. 定价 —— 价格以您当地的凯为公司规定的币种而定，不排除变化的可能。如果您在下订单前需要了解当前的价格信息，请致电联系。下订单时，请参考我们的报价或我们的报价单/形式发票号码。如果您通过电话下订单，我们会即时确认我们的当前价格。
              </div>
              <div>
                8. 价格变化 —— 订单确认后，即使产品价格发生名义上的上涨，我们也不会耽误发货时间。我们将根据订单所确认的价格出具发票。
              </div>
              <div>
                9. 保证 —— 卖方保证其产品符合提供给买方的商品目录、分析数据或其他文字资料中的描述。这个保证是排他性的，除此之外，卖方不做任何其他明示的或暗示的保证，包括任何满足特定目的的、有关适销性或合适性的隐含保证。
                卖方可全权确定所作的与销售有关的保证在以下情况中不再有效：买方对商品有任何方式的使用失误，或者未能按照工业保准和操作使用商品，或者未能按照卖方提供的说明使用商品（如果卖方提供的话）。
                对于那些经卖方确认有缺陷或不符合标准的商品，卖方承担的唯一责任，买方的唯一补救方案是由卖方决定买方在根据卖方的指令进行退货的同时，在不再另外收费或不退还货款的基础上替换这些产品。
                卖方在任何情况下对产品使用失误造成的附带损害、间接损害或其他特殊损害不承担责任，即使卖方被告知出现如下可能的损害，包括但不限于：未能使用之损失、工作进展损失、停机时间、利润损失、未能实现采购成本节省、买方品损失或买方对于第三方的责任、由于劳动力或其他费用造成的损失、产品导致的损害或损失包括人身伤害或财物损害，除非导致这些人身伤害或财物损害的原因在于卖方的职责缺失。
                所有这些索赔都应在收到货后一年内提出。
              </div>
              <div>
                10. 遵守法律规范 —— 卖方保证在其了解的最大范围内确保其产品生产遵循公平劳动标准法案修订版、职业安全和健康标准法案，以及其他颁发的法规、政策、法令中的相关要求。
                买方对产品的使用——卖方的产品主要用作实验室研究目的，除非在产品标签上、卖方的产品目录或其他向买方提供的文字资料中明确说明，买方产品不可用作其他用途，包括但不限于：体外诊断、食品、药物、医疗器械或人类、动物化妆品或其他商业用途。
                买方应了解卖方未对这些产品用于食品、药物、医疗器械、化妆品或其他商业用途等方面的安全性、有效性进行测试，除非在卖方提供给买方的文字资料中明确列出。
                买方向卖方明确表述并保证买方会按照专业人士的指导并严格遵守已经颁发和将要颁发的法律规范合理地对从卖方采购的产品和/或用卖方产品生产出的物品进行测试、使用、制造和市场推广。买方进一步向卖方保证不会在联邦食物、药品和化妆品法案意义范围内对所有用卖方产品生产的物品进行搀假和伪冒，而且这些物品根据法案第404，505，512条不属于不宜进行州际交易的产品。
                买方需要认识到，由于卖方产品在没有特别说明的情况下只用于研究目的，它们可能不在毒物控制法案清单上。买方应承担确保对购自卖方的产品在获得毒物控制法案许可的前提下使用的责任。
                买方有责任证实使用购自卖方的产品的危险性，并进行必要的研究加以确认。同时，买方有责任向其顾客和所有相关人员（如运货人等）警告使用或处理这些产品的危险性。买方须同意遵守由卖方提供的产品使用方面的规定，并避免任何不当使用。
                如果买方对购自卖方的产品需进行重新包装、重新贴标签或作为其他产品的原材料或组分使用，买方应验证卖方对产品的检测。除非另有约定，买方购自卖方的产品不可用于食品、药物、医疗器械或化妆品。
              </div>
              <div>
                11. 买方的声明和保证 —— 买方同意赔偿并免除任何由买方及其管理人员、代理人、雇员、继任者或受让人，买方的客户，最终使用人，任何其他相关人员（如运货人等）或其他第三方因使用卖方产品或买方未能就本条款所述义务尽责对卖方及其雇员、代理人、继任者、管理人员和受让者所直接或间接提出的关于卖方的职责缺失、未守承诺、严重过失、合同或基于其他任何法律理论的诉讼、损失、主张、要求、债条、费用（包括律师与会计费用）的责任。
                卖方对这些信息或事故报告的调查不构成卖方对此类事故负责的假设买方应该在收到商品15天内以书面形式向卖方告知任何与卖方产品相关的人身伤害或财物损害等意外事件或事故，而且买方应该与卖方全力合作调查以确定此类意外事件的原因并向卖方提供买方或他人提供给买方的所有声明、报告和检测结果。向卖方提供这些信息以及卖方对这些信息或事故报告的调查不构成卖方对此类事故负责的假设。
              </div>
              <div>
                12. 专利免责声明——卖方不保证所有产品的使用或销售不会侵犯专利法规或其他有关产品本身、与其他产品联合使用中、任何操作过程中的专利权。
              </div>
              <div>
                13. 退换货 —— 除非获得卖方的准许而且严格遵守卖方有关退货运输的指令，货物不可被退回以减账/退款。
              </div>
              <div>
                14. 技术支持 —— 在买方要求的情况下，卖方可决定向其提供与卖方产品相关的技术支持和信息。卖方不对任何由卖方或卖方人员提供的技术支持或信息做任何性质的、明示或暗示的保证，包括任何隐含的特定目的的适销性或合适性的保证。卖方提供的任何关于产品使用、选择、应用或适用性的建议都不可被作为明示的保证，除非由卖方主管或其他授权代表签字出示的书面资料中特别列出。
              </div>
              <div>
                15. 其他 —— 卖方未能严格遵守此条款中的款项或未能行使相关权利不会导致卖方放弃遵守这些款项和行使这些权利的权利。该条款中所有的权利和补救方案都是积累性的，而且是对卖方根据法律或权益享有的权利和补救方案基础的补充。任何因买方违约导致的弃权行为都应以书面形式出示而且不能作为其他违约行为或随后发生的同一违约行为的弃权声明。
                如果本协议中的任何条款被证明无效、违法或无法施行，其他条款的有效性、合法性和可施行性不受影响。每段的标题仅为便利而使用，不构成条款的有效部分且不影响对条款的解释。该协议对各方及它们各自的继承人、代表个人、继任者和受让人有约束和法律效力并由他们执行。
              </div>
              <div>
                16. 适用法律——任何关于该条款和其中任何款项的合法性、解释、应用或执行的争议，以及其与法律原则有冲突的地方都受法律管制。该条款涉及到的各方须同意他们之间产生的各项导致任何一方开始诉讼行为的争议都应在法院或法庭中进行审判
              </div>
            </div>
            <div slot="footer" style="text-align:center;">
                <el-button type="primary" size="small" @click="appVisible=false">确 定</el-button>
            </div>
        </el-dialog>
      </div>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.formLabelAlign.passwordCheck !== '') {
          this.$refs.Form.validateField('passwordCheck');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formLabelAlign.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var radioCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请确认凯为服务协议'));
      } else {
        callback();
      }
    };
    var mobileCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('电话不能为空'));
      } else {
        if(this.$All.isPhone(value)){
            callback();
        }else{
            callback(new Error('电话格式不对'));
        }
      }
    };
    var emailCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error('邮箱不能为空'));
      } else {
        if(this.$All.isEmail(value)){
            callback();
        }else{
            callback(new Error('邮箱格式不对'));
        }
      }
    };
    return {
      formLabelAlign:{
        true_name:'',
        mobile:'',
        password:'',
        passwordCheck:'',
        code:'',
        company:'',
        email:'',
        radio:false,
        request_id:''
      },
      msg:{
        form:'',
        key:'',
        img:''
      },
      sendMsgDisabled:false,
      innerVisible:false,
      loading_message:false,
      appVisible:false,
      codeTime:59,
      rules:{
        true_name:[
          {required: true, message: "用户名不能为空", trigger: 'blur'}
        ],
        mobile:[
          {required: true, validator: mobileCheck, trigger: 'blur'},
        ],
        password:[
          { required: true,validator: validatePass, trigger: 'blur'},
        ],
        passwordCheck:[
          { required: true,validator: validatePass2, trigger: 'blur'},
        ],
        code:[
          {required: true, message: "请输入验证码", trigger: 'blur'},
        ],
        company:[
          {required: true, message: "公司名称不能为空", trigger: 'blur'},
        ],
        email:[
          {required: true,validator: emailCheck, trigger: 'blur'},
        ],
        radio:[
          {required: true,validator: radioCheck, trigger: 'blur'},
        ],
      }
    }
  },
  created () {
  },
  methods: {
    resgister_(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          this.$post('/register',this.formLabelAlign).then(res=>{
              if (res && res.code == 200){
                this.$message.success(res.msg);
                this.$emit('sureRegister')
              }else{
                this.$message.error(res.msg);
              }
          }).catch(function(error) {
              console.log(error)
          });
        }else{
          console.log('error submit!!');
          return false;
        }
      })
    },
    requireMsg(){
      if(this.$All.isPhone(this.formLabelAlign.mobile)){
        this.$post('/getCaptcha').then(res=>{
            if (res && res.code == 200){
              this.msg.img = res.data.img
              this.msg.key = res.data.key
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
    msg_again(){
      this.$post('/getCaptcha').then(res=>{
            if (res && res.code == 200){
              this.msg.img = res.data.img
              this.msg.key = res.data.key
            }else{
                this.$message.error(res.msg);
            }
        }).catch(function(error) {
            console.log(error)
        });
    },
    inner_close(){
      this.innerVisible = false
      this.msg.form = ''
      this.msg.img = ''
      this.msg.key = ''
    },
    sure_identify(){
      var obj = {
        type:1,
        mobile:this.formLabelAlign.mobile,
        captcha:this.msg.form,
        key:this.msg.key
      }
      this.loading_message = true
      this.$post('/sendMessage',obj).then(res=>{
            if (res && res.code == 200){
              this.formLabelAlign.request_id = res.data.request_id
              this.get_Verification()
              this.inner_close()
              this.loading_message = false
            }else{
              this.$message.error(res.msg);
              this.msg_again()
              this.loading_message = false
            }
      }).catch(function(error) {
          console.log(error)
          this.loading_message = false
      });
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
    close(){
      this.$refs['Form'].resetFields();
      // this.formLabelAlign={
      //   true_name:'',
      //   mobile:'',
      //   password:'',
      //   passwordCheck:'',
      //   code:'',
      //   company:'',
      //   email:'',
      //   radio:false,
      //   request_id:''
      // }
      this.msg={
        form:'',
        key:'',
        img:''
      }
    }
  }
}
</script>
