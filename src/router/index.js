import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Game from '../views/Game'
import Gallery from '../views/Gallery'
import Wishes from '../views/Wishes'
import TreasureChamber from '../views/TreasureChamber'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/game',
    name: 'minigame',
    component: Game
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/wishes',
    name: 'wishes',
    component: Wishes
  },
  {
    path: '/hidden',
    name: 'treasure chamber',
    component: TreasureChamber
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
