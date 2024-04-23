<template>
  <div class="regiter">
    <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="80px" class="demo-ruleForm">
      <el-form-item  label="用户账号" prop="userAccount">
        <el-input type="text" v-model="registerForm.userAccount" required clearable ></el-input>
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input type="text" v-model="registerForm.userName" required clearable ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="registerForm.passWord" autocomplete="off"  required show-password ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="registerForm.gender" placeholder="请选择性别" clearable>
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-input type="date" v-model="registerForm.birthday" required clearable></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input type="phone" v-model="registerForm.phone" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="registerForm.email" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="primary" @click="registerForm_buton('registerForm')">注册</el-button>
        <el-button  size="mini" @click="resetForm('ruleForm')">重置</el-button>
        <router-link to='/LoginBlog' style="margin-left: 10px">
          <el-button size="mini" plain type="primary">返回登陆</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
.demo-ruleForm{
  margin-right: 38%;
  margin-left: 38%;
}

</style>

<script>
import {userLogin, userRegister} from '@/http' ;

export default {
  data() {
    let validateUserAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"))
      }
      if (!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
        callback(new Error("账号必须为6-20位字母和数字组合"))
      } else {
        callback()
      }
    };
    let validatePassWord = (rule, value, callback) => {
      // let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~@#$%\*-\+=:,\\?\[\]\{}]).{6,20}$/ ;
      let reg = /^\d{8,12}$/ ;

      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if  ((!reg.test(value)) && value != "") {
          callback(new Error("请输入正确的密码（8-20）"));
        }
        callback();
      }
    };
    let validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名称'));
      } else if (value.length < 4) {
          callback(new Error("用户名称长度必须大于5"));
        } else {
          callback();
        }
    };
    let validatePhone = (rule, value, callback) => {
      const reg =/^[1][3-9][0-9]{9}$/;
      if(value==""||value==undefined||value==null){
        //callback(new Error('请输入手机号'));
        callback();
      }else {
        if ((!reg.test(value)) && value != "") {
          callback(new Error("请输入正确的电话号码"));
        } else {
          callback();
        }
      }
    };
    let validateEmail = (rule, value, callback) => {
      const reg =/^([a-zA-Z0-9]+[-_.]?)+@[a-zA-Z0-9]+.[a-z]+$/;
      if(value==""||value==undefined||value==null){
       // callback(new Error("请输入邮箱号码"));
        callback();
      }else{
        if (!reg.test(value)){
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
    };
    return {
      registerForm: {
        passWord: '',
        //checkPass: '',
        userAccount:'',
        userName:'',
        // validateGender,
        phone:'',
        email:'',
        gender:''
      },
      rules: {
        passWord: [
          { required:true,validator: validatePassWord, trigger: 'blur' }
        ],
        userAccount: [
          { required:true,validator: validateUserAccount, trigger: 'blur' }
        ]
        ,
        userName: [
          { required:true,validator: validateUserName, trigger: 'blur' }
        ]
        ,
        birthday: [
          { required:true, trigger: 'blur' }
        ]
        ,
        gender: [
          { required:true, trigger: 'blur' }
        ]
        ,
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ]
        ,
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    registerForm_buton(formName) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证通过，可以提交注册信息
          console.log('注册信息:', this.registerForm);

          userRegister(this.registerForm).then((res) => {

            // let code = 200 ? 'success' : 'warning' ;

            this.$message('注册成功了哟，欢迎加入！！！');
          }).catch((error) => {
            console.log('账号或密码有误，请重新登陆！')
          })

          // 这里可以提交注册信息到后端
        } else {
          // 表单验证不通过
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.regiter{
  margin-top: 80px;
}
</style>