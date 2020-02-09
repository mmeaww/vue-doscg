import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
// import HelloWorld from '@/components/HelloWorld'
import ResumeHome from '@/views/ResumeHome.vue'
import DirectionHome from '@/views/DirectionHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/doscg',
      name: 'Home-DOSCG',
      component: Home
    },
    {
      path: '/doscg/bestway',
      name: 'Bestway',
      components: {
        default: DirectionHome
      }
    },
    {
      path: '/doscg/resume',
      name: 'Resume',
      components: {
        default: ResumeHome
      }
    }
  ]
})
