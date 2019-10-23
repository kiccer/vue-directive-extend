import $ from 'jquery'
import 'jquery-mousewheel'

function vueDirectiveMousewheel (vm) {
  vm.directive('mousewheel', {
    // bind (el, binding) {},
    inserted (el, binding) {
      // el.addEventListener('mousewheel', binding.value)
      $(el).on('mousewheel', binding.value)
    },
    // componentUpdated (el) {},
    // update (el) {},
    unbind (el, binding) {
      // el.removeEventListener('mousewheel', binding.value)
      $(el).off('mousewheel', binding.value)
    }
  })
}

export default vueDirectiveMousewheel
