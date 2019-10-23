import vueDirectiveResize from './vue-directive-resize'
import vueDirectiveMousewheel from './vue-directive-mousewheel'

function vueDirectiveExtend (vm) {
  vm.use(vueDirectiveResize)
  vm.use(vueDirectiveMousewheel)
}

export default vueDirectiveExtend
