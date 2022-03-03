<template>
	<div>
	<div class="todo-container">
		<div class="todo-wrap">
		  <MyHeader @addItem="addItem"/>
			<List :todoList="todoList"/>
			<MyFooter :todoList="todoList" @appChangeAll="appChangeAll" @deleteItem="deleteItem"/>
		</div>
	</div>
	</div>
</template>

<script>
	//引入组件
	import MyHeader from './components/MyHeader.vue'
	import List from './components/List.vue'
	import MyFooter from './components/MyFooter.vue'
	export default {
		name:'App',
		components:{
			MyHeader,
			List,
			MyFooter
    },
    data() {
            return {
               //从本地存储中取出数据
               todoList:JSON.parse(localStorage.getItem('todos'))||[]
            }
        },
        methods:{
            changeCheched(id){
                this.todoList.forEach(element => {
                    if(element.id===id){
                        element.flag = !element.flag
                    }
                });
            },
            addItem(obj){
              this.todoList.unshift(obj)
            },
            appChangeAll(done){
               this.todoList.forEach((element)=>{
                 element.flag = done
               })
            },
            //删除已完成任务
            deleteItem(){
              this.todoList = this.todoList.filter(todo => {return todo.flag!=true})
            },
            //删除目标id的数据
            deleteOne(id){
              this.todoList = this.todoList.filter(todo => {return todo.id!=id})
            },
            updateTodo(id,title){
              this.todoList.forEach((element)=>{
                if(element.id===id) element.title = title
              })
            }
        },
        watch:{
          todoList:{
            deep:true,
            handler(value){
              localStorage.setItem('todos',JSON.stringify(value))
            }
          }
        },
        //给Item绑定事件
        mounted() {
           this.$bus.$on('deleteOne',this.deleteOne)
           this.$bus.$on('changeCheched',this.changeCheched)
           this.$bus.$on('updateTodo',this.updateTodo)
        },
        beforeDestroy() {
          this.$bus.$off('deleteOne')
          this.$bus.$off('changeCheched')
          this.$bus.$off('updateTodo')
        },

	}
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(47, 102, 124);
  margin: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>