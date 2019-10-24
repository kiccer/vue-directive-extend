<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="toggle.helloWorld = !toggle.helloWorld">
    <HelloWorld v-if="toggle.helloWorld" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      toggle: {
        helloWorld: true
      }
    }
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
  margin-top: 60px;
  height: 1000px;
}
</style>
