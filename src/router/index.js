import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

// const Header = () => import('../components/Header.vue');
const Explaination = () => import('../components/Explaination.vue');
const Sensors = () => import('../components/Sensors.vue');
const History = () => import('../components/History.vue');

const routes = [
  {
    path: '/',
    name: 'Wireless-Final',
    redirect: '/explaination',
    component: () => import('../views/Wireless-Final.vue'),
    children: [
      {
        path: 'explaination',
        name: '使用說明',
        component: Explaination
      },
      {
        path: 'sensors',
        name: '感測器列表',
        component: Sensors
      },
      {
        path: 'history',
        name: '感測紀錄',
        component: History
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
