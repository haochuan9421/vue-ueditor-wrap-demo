<template>
  <div class="hello">
    <button @click="showData">控制台查看绑定数据</button>
    <div class="preview" v-html="msg"></div>
    <!-- 通过巧妙的设计，你不需要担心一个页面中过多vue-ueditor-wrap组件会导致混乱，,或者重复引用JS(打开控制台瞄一眼)，每个组件都保证拥有一个独立的UEditor实例，你可以尝试把数字改成99(小伙伴们根据自己电脑自行斟酌)，但依然稳定可用 -->
    <vue-ueditor-wrap v-model="msg" :config="config" @ready="ready" v-for="item in 10" :key="item"></vue-ueditor-wrap>
  </div>
</template>

<script>
// 1、引入VueUeditorWrap组件
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
	name: 'HelloWorld',
	// 2、注册组件
	components: {
		VueUeditorWrap
	},
	data() {
		return {
			// 3、v-model绑定数据
			msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue2.x + UEditor + v-model双向绑定</h2>',
			// 4、根据项目需求自行配置，具体配置参见ueditor.config.js源码或 http://fex.baidu.com/ueditor/#start-start
			config: {
				// 你的UEditor资源存放的路径，相对于打包后的index.html
				UEDITOR_HOME_URL: './static/UEditor/',
				// 编辑器不自动被内容撑高 
				autoHeightEnabled: false,
				// 初始容器高度
				initialFrameHeight: 240,
				// 初始容器宽度
				initialFrameWidth: '100%'
			}
		}
	},
	methods: {
		// 5、 你可以在ready方法中拿到editorInstance实例，之后的所有API就和官方的实例一样了，Just Do What You Want! http://fex.baidu.com/ueditor/#api-common
		ready(editorInstance) {
			console.log(`你要的实例${editorInstance.key}在此:`, editorInstance);
		},
		// 6. 查看绑定的数据
		showData() {
			console.log(this.msg);
		}
	}
}
</script>

<style>
.preview{
  min-height: 150px;
}
</style>
