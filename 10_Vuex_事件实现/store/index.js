//引入Vue核心库 创建Vuex一定要Vue.use(Vuex)
import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)

//准备action对象--响应组件中用户的动作
const actions ={}
//准备mutations对象--修改state中数据
const mutations = {}
//准备state对象--存储具体数据
const state ={}
export default new Vuex.Store({
    actions,
    mutations,
    state
})