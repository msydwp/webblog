<template>
  <div class="lg">
    <h3>Personal blog</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="账号" prop="accountNumber">
        <el-input type="name" v-model="ruleForm.userAccount" required clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"  show-password required clearable ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
        <router-link to='/RegiestBlog' style="margin-left: 10px">
          <el-button size="mini" plain type="primary">注册</el-button>
        </router-link>
        <router-link to='/HomeBlog' style="margin-left: 10px">
          <el-button size="mini" plain type="primary">Home</el-button>
        </router-link>
        <router-link to='/PhotoQuiz' style="margin-left: 10px">
          <el-button size="mini" plain type="primary">拍摄小答</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.demo-ruleForm{
  margin-right: 40%;
  margin-left: 40%;
}

</style>

<script>
import { userLogin } from '@/http' ;
import CryptoJS from 'crypto-js';

export default {
  data() {
    let checkAccountNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"))
      }
      if (!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
        callback(new Error("账号必须为6-20位字母和数字组合"))
      } else {
        callback()
      }

    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        passWord: '',
        userAccount: ''
      },
      rules: {
        passWord: [
           {  required:true, trigger: 'blur' }
        ],
        userAccount: [
          {  required:true,validator: checkAccountNumber, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let _this = this ;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert(JSON.stringify(this.ruleForm));
          // const encryptedPassword = CryptoJS.MD5(this.formData.password).toString();  //密码对称加密
          userLogin(this.ruleForm).then((res) => {

            let type = res.code === 200 ? 'success' : 'warning' ;
            _this.$message({
              message: res.message,
              type:type
            });

            // this.$refs[formName].resetFields();

            if(res.code === 200){
              this.$cookies.set("token",res.data.token,'1d')
              sessionStorage.setItem("user",JSON.stringify(res.data));
              _this.$router.push("/HomeBlog");
            }

          }).catch((error) => {
            console.log('账号或密码有误，请重新登陆！')
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },mounted () {
      document.body.style.backgroundImage = ''
    }
  }
}
</script>

<style scoped>
.lg{
  /*border:red 1px solid;*/
  margin-top: 100px;
}
h3{
  text-align: center;
  margin-left: 50px;
  color: #595757;
}
</style>