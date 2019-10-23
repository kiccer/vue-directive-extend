<div align="center">
  <h1>vue-directive-extend</h1>
  This project is used to extend more event listener for Vue.
</div>

### NPM
```NPM
npm install --save vue-directive-extend
```

### Using
```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import vueDirectiveExtend from 'vue-directive-extend'

Vue.use(vueDirectiveExtend)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

In `.vue` files.
```vue
<template lang="html">
  <div class="demoVue">
    <div class="test" v-resize="onResize" v-mousewheel="onMousewheel"></div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    onResize () {
      console.log('onResize')
    },
    onMousewheel (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

```
