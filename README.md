<div align="center">
  <h1>vue-directive-extend</h1>
  This project is used to extend more event listener for Vue.
</div>

### NPM
```NPM
npm install --save vue-directive-extend
```

### Usage
> In `main.js` files.

```javascript
import Vue from 'vue'
import App from './App.vue'
import vueDirectiveExtend from 'vue-directive-extend'

Vue.use(vueDirectiveExtend)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

> In `.vue` files.

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

### Event listener list

<escape>
  <table>
    <tr>
      <th>Listener</th>
      <th>description</th>
      <th>Modifiers</th>
      <th>Modifiers description</th>
    </tr>
    <tr>
      <td rowspan="2"><code>v-resize</code></td>
      <td rowspan="2">Use the element-resize-detector plug-in to listener element resize events.</td>
      <td><code>.lazy</code></td>
      <td>Lazy mode. Triggering resize too often will only work for the last time.</td>
    </tr>
    <tr>
      <td><code>.100</code></td>
      <td>After <code>.lazy</code>, set maximum time difference. If not set, then default is 100.</td>
    </tr>
    <tr>
      <td rowspan="2"><code>v-mousewheel</code></td>
      <td rowspan="2">Use the jquery-mousewheel plug-in to listener mouse wheel events.</td>
      <td><code>.stop</code></td>
      <td>Same as <code>e.stopPropagation()</code></td>
    </tr>
    <tr>
      <td><code>.prevent</code></td>
      <td>Same as <code>e.preventDefault()</code></td>
    </tr>
    <tr>
      <td><code>v-load</code></td>
      <td>Triggered when the element is inserted into the DOM.</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>v-unload</code></td>
      <td>Triggered when the element is removed from the DOM.</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </table>
</escape>
