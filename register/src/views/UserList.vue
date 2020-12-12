<template>
  <div class="userlist">
     
        <el-table :data="tableData" stripe   height="300" >
            <el-table-column prop="_id" label="用户id" >
            </el-table-column>
            <el-table-column prop="username" label="用户名">
            </el-table-column>
            <el-table-column prop="pass" label="密码">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
        </el-table>
    
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data () {
    return {
        tableData:[]
    }
  },
  created(){
    //触发actions选项中对应的函数
    //this.$store.dispatch('getUserList')
      this.getUserList().then(()=>{
        // this.tableData = this.$store.state.userList
         this.tableData = this.userList
        console.log(this.userList)
        
      })
  },
  methods:{
    ...mapActions(['getUserList'])
  },
  computed:{
    ...mapState(['userList'])
  }
}
</script>

<style  scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
    