import vueDirectiveResize from 'public/js/vue-directive-resize'
import vueDirectiveMousewheel from 'public/js/vue-directive-mousewheel'

function vueDirectiveExtend (vm) {
  vm.use(vueDirectiveResize)
  vm.use(vueDirectiveMousewheel)
}

export default vueDirectiveExtend
