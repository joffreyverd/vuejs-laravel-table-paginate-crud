import paginationComponent from './PaginationVue.vue';
import buttonComponent from './CustomButtonVue.vue';
import modalComponent from './ModalVue.vue';

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('PaginationVue', paginationComponent)
  Vue.component('CustomButtonVue', buttonComponent)
  Vue.component('ModalVue', modalComponent)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

paginationComponent.install = install
buttonComponent.install = install
modalComponent.install = install

export default component
export default buttonComponent
export default modalComponent