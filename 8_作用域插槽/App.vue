<template>
    <div class="container">
      <Category>
			<template scope="scopeData">
				<!-- 生成的是ul列表 -->
				<ul>
					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
				</ul>
			</template>
		</Category>

    <Category>
      <!-- 结构赋值 -->
			<template slot-scope="{games}">
				<!-- 生成的是有序标题 -->
				<h4 v-for="g in games" :key="g">{{g}}</h4>
			</template>
		</Category>

		<Category>
			<template scope="scopeData">
				<!-- 生成的是h4标题 -->
				<ol>
					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
				</ol>
			</template>
		</Category>
    </div>
</template>

<script>
	//引入组件
  import Category from './components/Category.vue'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style>
 .container{
   display: flex;
   justify-content: space-around;
 }
</style>