<!--  -->
<template>
  <div class="admin">
<el-container style="height: 500px; border: 1px solid #eee">

  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu 
    :default-openeds="['1', '2']"
    background-color="#545c64"
    text-color='#fff'
    active-text-color="#ffd04b"
    router>
      <el-menu-item class="title" index="/">
        <template slot="title"><i class="el-icon-location-information"></i>vuex练习</template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="/userlist">用户列表</el-menu-item>
          <el-menu-item index="/olderuser">大龄用户</el-menu-item>
          <el-menu-item index="/younguser">年轻用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
         
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{$store.state.loginName}}</span>
    </el-header>
    
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <el-main>
            <router-view></router-view>
        </el-main>
    
    </el-card>
    
  </el-container>
</el-container>   
  </div>
</template>



<script>
  export default {
    created(){console.log('admin')}
  };
</script>

<style scope>
.title{
    font-size: 20px;
    background-color: #333!important; 
}
  .el-header {
    background-color: #B3C0D1;
    line-height: 60px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>