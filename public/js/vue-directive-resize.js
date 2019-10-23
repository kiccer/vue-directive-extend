// https://github.com/wnr/element-resize-detector
import elementResizeDetectorMaker from 'element-resize-detector'

function vueDirectiveResize (vm) {
  // With default options (will use the object-based approach).
  // let erd = elementResizeDetectorMaker()

  // With the ultra fast scroll-based approach.
  // This is the recommended strategy.
  let erd = elementResizeDetectorMaker({
    strategy: 'scroll'
  })

  vm.directive('resize', {
    // bind (el, binding) {},
    inserted (el, binding) {
      erd.listenTo(el, binding.value)
    },
    // componentUpdated (el) {},
    // update (el) {},
    unbind (el, binding) {
      erd.removeAllListeners(el, binding.value)
    }
  })
}

export default vueDirectiveResize
