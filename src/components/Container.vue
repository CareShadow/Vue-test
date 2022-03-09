<template>
  <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
    <el-table-column prop="date" label="日期" width="140">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column align="right">
         <!-- 作用域插槽 -->
    <template slot="header" slot-scope="scope">
        <el-input
          size="mini"
          v-model="search"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,scope.column)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,scope.column)">Delete</el-button>
      </template>
    </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Container',
    data() {
      return {
        search:'',
        tableData:[
          { date:'2022-03-06', name:'李元浩', address:'虎大将军'},
          { date:'2022-03-06', name:'李元浩', address:'唐宁街10号的首相官邸'},
          { date:'2022-03-06', name:'李元浩', address:'虎大将军'},
          { date:'2022-03-06', name:'李元浩', address:'唐宁街10号的首相官邸'},
          { date:'2022-03-06', name:'李元浩', address:'虎大将军'},
          { date:'2022-03-06', name:'李元浩', address:'唐宁街10号的首相官邸'},
          { date:'2022-03-06', name:'李元浩', address:'虎大将军'},
          { date:'2022-03-06', name:'李元浩', address:'唐宁街10号的首相官邸'},
        ]
      }
    },
    methods:{
     handleEdit(row,column,$index){
        console.log(row,column,$index);
     },
     handleDelete(row,column,index){
       console.log(row,column,index);
     }
    },
}
</script>

<style lang="css">
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>