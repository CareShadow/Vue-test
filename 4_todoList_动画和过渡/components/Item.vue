<template>
    <transition name="todo" :appear="true">
        <li>
          <label>
        <input type="checkbox" :checked="todo.flag" @change="todoChange(todo.id)"/>
        <span v-show="!todo.isEdit" >{{todo.title}}</span>
        <input type="text" ref="inputTitle" v-show="todo.isEdit" :value="todo.title" @blur="loseFocus(todo,$event)">
      </label>
        <button class="btn btn-danger" @click="itemdelete(todo.id)">删除</button>  
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="itemupdate(todo)">编辑</button>  
      </li>  
    </transition>  
</template>

<script>
export default {
    name:'Item',
    props:['todo'],
    methods:{
        todoChange(id){
            // this.changeCheched(id)
            this.$bus.$emit('changeCheched',id)
        },
        itemdelete(id){
          // this.deleteOne(id)
            this.$bus.$emit('deleteOne',id)
        },
        //点击编辑，输入框出现，添加isEdit属性
        itemupdate(todo){
          //判断是否由该属性
            if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true
          }else{
            // console.log('@')
            this.$set(todo,'isEdit',true)
          }
          //输入框直接获取焦点 模板解析好执行
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
        },
        //失去焦点，修改title
        loseFocus(todo,e){
          todo.isEdit = false
				  if(!e.target.value.trim()) return alert('输入不能为空！')
				  this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
	background-color: #ddd;
}
	
li:hover button{
	display: block;
}
  /* 标签显示的动画 */
 .todo-enter-active{
		animation: atguigu 0.5s linear;
	}
  /* 标签消失的动画 */
	.todo-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>