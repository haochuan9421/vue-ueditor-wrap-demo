<template>
  <div class="hello">
    <div @click="showData" class="preview" v-html="msg"></div>
    <!-- 你不需要担心一个页面中过多vue-ueditor-wrap组件会导致混乱,或者重复引用JS(打开控制台瞄一眼),每个组件都保证拥有一个独立的UEditor实例,你可以尝试把数字改成99(根据自己电脑自行斟酌),但依然稳定可用 -->
    <vue-ueditor-wrap ref="ueditor" v-model="msg" :destroy="false" :config="config" @ready="ready" v-for="item in 2" :key="item" :init="myInit"></vue-ueditor-wrap>
  </div>
</template>

<script>
// 1、引入VueUeditorWrap组件
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
// const VueUeditorWrap = require('../lib/vue-ueditor-wrap.min.js') // CommonJS
export default {
  name: 'HelloWorld',
  // 2、注册组件
  components: {
    VueUeditorWrap
  },
  data () {
    return {
      // 3、v-model绑定数据
      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      // 4、根据项目需求自行配置,具体配置参见ueditor.config.js源码或 http://fex.baidu.com/ueditor/#start-start
      config: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件存放的根目录，如果你使用的是 vue-cli 3.x，设置为'/UEditor/'
        UEDITOR_HOME_URL: '/static/UEditor/'
        // 配合最新编译的资源文件，你可以实现添加自定义Request Headers,详情https://github.com/HaoChuan9421/ueditor/commits/dev-1.4.3.3
        // headers: {
        //   access_token: '37e7c9e3fda54cca94b8c88a4b5ddbf3'
        // }
      }
    }
  },
  mounted () {
    console.log('%c注意：本Demo提供的serverUrl是为了方便小伙伴们体验图片文件等上传功能。\n请勿在生产环境使用此serverUrl！！！', 'background:#f33;color:#fff')
  },
  methods: {
    // 5、 你可以在ready方法中拿到editorInstance实例,所有API和官方的实例是一样了。http://fex.baidu.com/ueditor/#api-common
    ready (editorInstance) {
      console.log(`实例${editorInstance.key}已经初始化:`, editorInstance)
    },
    // 6. 查看绑定的数据
    showData () {
      alert(this.msg)
      console.log(this.msg)
    },
    // 7. 结合init方法,自定义按钮
    myInit () {
      this.$refs.ueditor.forEach((vm) => {
        vm.registerButton({
          name: 'test',
          icon: './static/test-button.png',
          tip: 'this is a test tip',
          handler: (editor, name) => {
            editor.execCommand('inserthtml', `<span>text inserted by test button</span>`)
          }
        })
        vm.registerButton({
          name: 'center',
          icon: './static/center.png',
          tip: '表格居中',
          handler: (editor, name) => {
            var tables = editor.document.querySelectorAll('table')
            if (tables.length) {
              tables.forEach((table) => {
                table.style.margin = '0 auto'
              })
            } else {
              editor.trigger('showmessage', {
                content: '没有表格',
                timeout: 2000
              })
            }
          }
        })
      })
    }
  }
}
</script>

<style>
.preview{
  min-height: 150px;
}
</style>
