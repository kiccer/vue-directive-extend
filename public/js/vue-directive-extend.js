import vueDirectiveResize from './vue-directive-resize'
import vueDirectiveMousewheel from './vue-directive-mousewheel'
import vueDirectiveLoad from './vue-directive-load'

function vueDirectiveExtend (vm) {
  vm.use(vueDirectiveResize)
  vm.use(vueDirectiveMousewheel)
  vm.use(vueDirectiveLoad)
}

export default vueDirectiveExtend
