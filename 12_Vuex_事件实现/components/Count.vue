<template>
<div>
  <h1>当前求和为：{{sum}}</h1>
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
export default {
    name:'Count',
    data() {
        return {
            sum:0,
            n:1,
        }
    },
    methods: {
        increase(){
            this.sum+=this.n
        },
        decrease(){
            this.sum-=this.n
        },
        increaseOdd(){
            if(this.sum%2!=0){
                this.sum+=this.n
            }
        },
        increaseWait(){
            setTimeout(() => {
                this.sum+=this.n
            },1000)
        }
    },
}
</script>

<style>
  button{
      margin-left: 5px;
  }
</style>