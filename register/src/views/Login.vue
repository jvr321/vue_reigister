<template>
  <div id="register">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
       <h3>
         <i class="el-icon-star-off"></i>
         vuex</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginForm('ruleForm2')">登录</el-button>
        <el-button @click="registerForm('ruleForm2')">注册</el-button>
      </el-form-item>
    </el-form>   
  </div>
</template>

<script>

 import {mapMutations} from 'vuex' 
 export default {
    data() {
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',   
          username: ''
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: { 
      
      ...mapMutations(['saveLoginName']),
      loginForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                    
                      this.$axios.post('/api/login', {
                        username:this.ruleForm2.username,
                        pass:this.ruleForm2.pass,
                        checkPass:this.ruleForm2.checkPass
                      }).then(response=>{
                        let {data:{err}} = response
                        if(err){// 后台返回1 你还没登录
                          this.$message.error('你还没注册或者密码不一致');
                          return
                        }
                         this.$message({
                          message: '恭喜你，登录成功',
                          type: 'success'
                        }); 
                        //修改仓库中的state数据 ：必须通过commit触发mutations选项对应的函数，在函数内部修改仓库中的state数据
                        // this.$store.commit('saveLoginName', this.ruleForm2.username)  
                        this.saveLoginName(this.ruleForm2.username)  
                        
                        //登录成功跳转到/admin                   
                        this.$router.push({path:'/admin'})
                      })


                    // this.$jsonp('http://localhost:3001/login',{//参数 （注意：会默认传入callback）
                    //   name:'参数11',
                    //   age:'参数22'
                    // }).then(res=>{//成功
                    //     console.log(res)
                    // }).catch(err=>{//失败
                    //   console.log(err)
                    // })         
       

                      // let scriptEle =   document.createElement('script')
                      // scriptEle.src = 'http://localhost:3001/login?callback=loginRes'
                      // document.body.appendChild(scriptEle)



                      // this.$axios.post('http://localhost:3001/login', {
                      //     username:this.ruleForm2.username,
                      //     pass:this.ruleForm2.pass,
                      //     checkPass:this.checkPass
                      // })
                
          } else {
                      console.log('error submit!!');
                      return false;
                    }
                  });
                },



      registerForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid){
                    this.$axios.post('/api/register', {
                        username:this.ruleForm2.username,
                        pass:this.ruleForm2.pass,
                        checkPass:this.ruleForm2.checkPass
                    }).then(user=>{
                        if(user.data.err===1){//该用户已存在
                            this.$message.error('该用户已存在');
                            return
                        }else if(user.data.err===2){
                            this.$message.error('两次密码不一致');
                            return
                        }
                         this.$message({
                            message: '恭喜你，注册成功',
                            type: 'success'
                        });

                    })
            
          }
        })
      }
    }
  }
</script>
<style>
#register{
  width: 400px;
  border: 1px solid #000;
  margin: auto;
  padding: 20px;
}

h3{
  text-align: center;
}
</style>
