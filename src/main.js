import Vue from 'vue'
import router from './router'
import App from './App.vue'

// Vue Router 사용
Vue.use(router)

// // 라우터 설정
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       component: App
//     }
//   ]
// })

// Vue 인스턴스 생성
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')