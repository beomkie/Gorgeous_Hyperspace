import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/homePage.vue';
import hyperSpace from '@/Views/hyperSpace.vue';
import Shift3 from '@/Views/shift3View.vue';
import forRooms from '@/Views/4roomsView.vue';
import about from '@/Views/aboutView.vue';
import brand from '@/Views/brandView.vue';
import team from '@/Views/teamView.vue';

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
  },
  {
    path: '/about',
    name: 'about',
    component: about 
  },
  {
    path: '/brand',
    name: 'brand',
    component: brand
  },
  {
    path: '/team',
    name: 'team',
    component: team 
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
});

  export default router