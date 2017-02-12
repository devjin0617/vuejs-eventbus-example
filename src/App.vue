<template>
  <div id="app">
    <h2>Vuejs EventBus Example</h2> <a href="https://github.com/devjin0617/vuejs-eventbus-example" target="_blank">Github Repository</a>
    <SenderApp />
    <ReceiverApp />
  </div>
</template>

<script>
import SenderApp from './components/SenderApp.vue'
import ReceiverApp from './components/ReceiverApp.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    SenderApp,
    ReceiverApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;
  max-width:600px;
  padding:10px;
}

div {
  margin: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}

.el-alert {
  margin:10px;
}
</style>

<style scoped>
#app {
  margin-top: 60px;
}
</style>