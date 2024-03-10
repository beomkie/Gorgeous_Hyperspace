import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/homePage.vue';
import hyperSpace from '@/Views/hyperSpace.vue';
import Shift3 from '@/Views/shift3View.vue';
import forRooms from '@/Views/4roomsView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hyperSpace',
    name: 'HyperSpace',
    component: hyperSpace
  },
  {
    path: '/shift3',
    name: 'SHIFT3',
    component: Shift3
  },
  {
    path: '/4rooms',
    name: '4Rooms',
    component: forRooms
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
});

  export default router