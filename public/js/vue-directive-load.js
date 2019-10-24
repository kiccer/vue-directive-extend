function vueDirectiveLoad (vm) {
  vm.directive('load', {
    // bind (el, binding) {},
    inserted (el, binding) {
      binding.value && binding.value()
    }
    // componentUpdated (el) {},
    // update (el) {},
    // unbind (el, binding) {}
  })
  vm.directive('unload', {
    // bind (el, binding) {},
    // inserted (el, binding) {},
    // componentUpdated (el) {},
    // update (el) {},
    unbind (el, binding) {
      binding.value && binding.value()
    }
  })
}

export default vueDirectiveLoad
