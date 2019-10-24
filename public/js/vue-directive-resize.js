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

  let lazyHandle = function (binding) {
    let nums = Object.keys(binding.modifiers).map(n => +n).filter(n => !isNaN(n))
    clearTimeout(binding.lazyTimer)
    binding.lazyTimer = setTimeout(() => {
      binding.value && binding.value()
    }, nums.length ? Math.max(...nums) : 100)
  }

  let resizeHandle = function (binding) {
    if (binding.modifiers.lazy) {
      lazyHandle(binding)
    } else {
      binding.value && binding.value()
    }
  }

  vm.directive('resize', {
    // bind (el, binding) {},
    inserted (el, binding) {
      erd.listenTo(el, () => {
        resizeHandle(binding)
      })
    },
    // componentUpdated (el) {},
    // update (el) {},
    unbind (el, binding) {
      erd.removeAllListeners(el, () => {
        resizeHandle(binding)
      })
    }
  })
}

export default vueDirectiveResize
