<template>
  <div class="hello">
    <div @click="showData" class="preview" v-html="msg"></div>
    <form ref="form" action="http://localhost:3000/ueditor" method="post">
      <vue-ueditor-wrap
        ref="ueditor"
        v-model="msg"
        :destroy="false"
        :config="config"
        @ready="ready"
        name="content"
      ></vue-ueditor-wrap>
      <input type="submit" value="通过input的submit提交" />
    </form>
    <button @click="submitHandler">通过js调用submit提交</button>
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
  data () {
    return {
      // 3、v-model绑定数据
      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      // 4、根据项目需求自行配置,具体配置参见ueditor.config.js源码或 http://fex.baidu.com/ueditor/#start-start
      config: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: 'http://api.demo.com/ueditor/upload',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: './static/UEditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false,
        // 自定义工具栏，需要额外选项可以参考ueditor.config.js
        toolbars: [[
          'fullscreen', 'source', '|',
          'bold', 'italic', 'underline', '|', 'fontsize', '|', 'kityformula', 'preview'
        ]]
      },
      editorInstance: null
    }
  },
  mounted () {
    this.$refs.form.onsubmit = function () {
      this.submitHandler()
      return false
    }
  },
  methods: {
    // 5、 你可以在ready方法中拿到editorInstance实例,之后的所有API就和官方的实例一样了,Just Do What You Want! http://fex.baidu.com/ueditor/#api-common
    ready (editorInstance) {
      console.log(`你要的实例${editorInstance.key}在此:`, editorInstance)
      this.editorInstance = editorInstance
    },
    // 6. 查看绑定的数据
    showData () {
      alert(this.msg)
      console.log(this.msg)
    },
    submitHandler () {
      this.editorInstance.getKfContent((content) => {
        this.$refs.form.submit()
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
