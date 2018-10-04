import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Work from './views/Work'
import WorkItem from './views/WorkItem'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/workitem',
      name: 'workitem',
      component: WorkItem
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
