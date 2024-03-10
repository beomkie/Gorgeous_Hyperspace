import Vue from 'vue'
import router from './router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue Router 사용
Vue.use(router)

Vue.use(BootstrapVue)


// Vue 인스턴스 생성
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')