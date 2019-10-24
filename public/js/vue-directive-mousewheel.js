import $ from 'jquery'
import 'jquery-mousewheel'

function vueDirectiveMousewheel (vm) {
  vm.directive('mousewheel', {
    // bind (el, binding) {},
    inserted (el, binding) {
      $(el).off('mousewheel')
      $(el).on('mousewheel', e => {
        let { modifiers, value } = binding
        value && value(e)
        modifiers.stop && e.stopPropagation()
        modifiers.prevent && e.preventDefault()
        if (modifiers.stop && modifiers.prevent) return false
      })
    },
    // componentUpdated (el, binding) {},
    // update (el, binding) {},
    unbind (el) {
      $(el).off('mousewheel')
    }
  })
}

export default vueDirectiveMousewheel
