<template>
  <div>
    <ul>
    <li v-for="message in messageList" :key="message.id">
        <!-- 第一种写法,利用v-bind来实现query传参 -->
        <!-- <router-link :to="`/home/message/details?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 第二种写法,对象写法 都要使用v-bind-->
         <!-- <router-link :to="{
            path:'/home/message/details',
            query:{
                id:message.id,
                title:message.title
            }
        }">{{message.title}}</router-link> -->

        <!--params 第一种写法  -->
        <!-- <router-link :to="`/home/message/details/id=${message.id}/title=${message.title}`">{{message.title}}</router-link> -->
        <!--params 第二种写法  -->
        <router-link :to="{
            //这里不能写完整路径 要写路由的名字
            name:'xiangqing',
            params:{
                id:message.id,
                title:message.title
            }
            }">{{message.title}}</router-link>
            <button @click="getPush(message.id,message.title)">push方式</button>
            <button @click="getReplace(message.id,message.title)">replace方式</button>
    </li>
    </ul>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
            }
        },
        methods:{
            getPush(id,title){
                this.$router.push({
                    name:'xiangqing',
                    params:{
                        id,
                        title
                    }
                })
            },
             getReplace(id,title){
                this.$router.replace({
                    name:'xiangqing',
                    params:{
                        id,
                        title
                    }
                })
            }
        }
    }
</script>

<style>
 button{
     margin-left: 5px;
 }
</style>