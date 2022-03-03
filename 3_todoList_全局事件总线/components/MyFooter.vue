<template>
  <div class="todo-footer" v-if="isAll">
	  <label>
	  <input type="checkbox" v-model="eq"/>
	  </label>
	  <span>
	  <span>已完成{{footerScreen()}}</span> / 全部{{isAll}}
	  </span>
	  <button class="btn btn-danger" @click="footerdelete">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todoList'],
    data() {
      return {
        flag:'false',
      }
    },
    methods:{
      footerScreen(){
             let num = 0
              this.todoList.forEach((element)=>{
                   if(element.flag) num++   
              })
              return num
      },
      footerdelete(){
        this.$emit('deleteItem')
      }
    },
    computed:{
      isAll(){
        return this.todoList.length
      },
      eq:{
        get(){
            return this.isAll===this.footerScreen()
          },
        set(value){
          this.$emit('appChangeAll',value)
        }
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>