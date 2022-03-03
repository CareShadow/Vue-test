<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="title"/>&nbsp;<button @click="searchUser">Search</button>
      </div>
    </section>
</template>

<script>
 import axios from 'axios'
  export default {
      name:'Search',
      data() {
        return {
          title:'',
        }
      },
      methods: {
        searchUser(){
          //点一次 isFrist:false,isLoad:true,errMsg:'',data:[]
          this.$bus.$emit('updateListData',{ isFirst:false,isLoad:true,errMsg:'',users:[]})
          axios.get(`https://api.github.com/search/users?q=${this.title}`).then(
          response => {
						console.log('请求成功了')
						//请求成功后更新List的数据
						this.$bus.$emit('updateListData',{ isFirst:false,isLoad:false,errMsg:'',users:response.data.items})
					},
					error => {
						//请求后更新List的数据
					  this.$bus.$emit('updateListData',{ isFirst:false,isLoad:false,errMsg:'接口异常',users:[]})
					}
          )
        }
      },
  }
</script>

<style>

</style>