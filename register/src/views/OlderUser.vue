<template>
  <div class="olderlist">
     
        <el-table :data="this.olderUser" stripe >
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
import {mapState, mapGetters} from 'vuex'
export default {
  computed:{
    olderlist(){//小于25就是年轻用户
      return this.userList.filter(user=>user.age>=25)
    },
    ...mapState(['userList']),
    ...mapGetters(['olderUser'])
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
    