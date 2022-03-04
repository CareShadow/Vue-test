<template>
<div>
  <h1>当前求和为：{{sum}}</h1>
  <h3>当前求和为：{{bigSum}}</h3>
  <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>    
  </select>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <button @click="increaseOdd">当前和为奇数再加</button>
  <button @click="increaseWait">等一等再加</button>
</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
    },
    computed:{
        // 对象写法
        // ...mapState({sum:'sum'}),
        // ...mapGetters({bigSum:'bigSum'})
        // 数组写法 属性和getters,state相同名字
        ...mapState(['sum']),
        ...mapGetters(['bigSum'])

    },
    methods: {
        increase(){
            //当没有逻辑时可直接适用commit跳过dispatch
            this.$store.commit('JIA',this.n)
        },
        decrease(){
            this.$store.commit('JIAN',this.n)
        },
        increaseOdd(){
            this.$store.dispatch('jiaodd',this.n)
        },
        increaseWait(){
            this.$store.dispatch('jiawait',this.n)
        }
    },
}
</script>

<style>
  button{
      margin-left: 5px;
  }
</style>