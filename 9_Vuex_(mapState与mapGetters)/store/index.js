//引入Vue核心库 创建Vuex一定要Vue.use(Vuex)
import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)

//准备action对象--响应组件中用户的动作
const actions ={
    //context上下文对象,value数据
    jiaodd(context,value){
        if(context.state.sum%2!=0){
            context.commit('JIA',value)
        }
    },
    jiawait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        },1000)
    }
}
//准备mutations对象--修改state中数据
const mutations = {
    JIA(state,value){
        console.log(state);
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    }
}
//准备state对象--存储具体数据
const state ={
    sum:0
}
//准备getter对象
const getters ={
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})