<template>
  <div id="app">
    <ul class="nav">
      <router-link :to="{path: '/'}" tag="li">主页</router-link>
      <router-link :to="{path: '/Empty'}" tag="li">空白页</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.nav {
  list-style: none;
  text-align: center;
}

.nav li {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 100px;
  text-align: center;
  border: 1px solid #cccccc;
  box-shadow: 0 0 10px #eeeeee;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ffffff;
}

.nav li:hover,li.router-link-active {
  background-color: #3eaf7c;
  border: 1px solid #3eaf7c;
  color: #ffffff;
  box-shadow: 0 0 20px #eeeeee;
}
</style>
