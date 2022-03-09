<template>
  <el-container style="border: 1px solid #eee;">
      <el-header style="font-size: 12px;width：100%">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :divided="true">查看</el-dropdown-item>
            <el-dropdown-item :divided="true">新增</el-dropdown-item>
            <el-dropdown-item :divided="true">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
    <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" v-if="navigation.find((currentValue)=>{return currentValue==='/user/account'})" route="/user/account">账号管理</el-menu-item>
            <el-menu-item index="1-2" v-if="navigation.find((currentValue)=>{return currentValue==='/user/role'})" route="/user/role">角色管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
         <router-view></router-view>
      </el-main>
</el-container>

</el-container>
</template>

<script>
import axios from 'axios'
	export default {
		name:'App',
    data() {
      return {
        // 用户管理：账号管理，  数据管理
        navigation:[],
      }
    },
    methods:{

    },
    mounted(){
      //请求后端接口 获取导航路径
    axios({
        method:'post',
        url:'http://127.0.0.1:8081/login',
        data:{
          username:'admin',
          password:'admin',
        }
      }).then(
      response => {
        // console.log(response.data);
        // console.log(this);
        this.navigation = response.data
      },
      error =>{

      }
    )
    }
	}
</script>