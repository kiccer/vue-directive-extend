import Vue from 'vue'
import App from './App.vue'
import vueDirectiveExtend from 'public/js/vue-directive-extend'

Vue.use(vueDirectiveExtend)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
