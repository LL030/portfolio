import Vue from 'vue'
import Router from 'vue-router'
import WhoIs from '@/components/WhoIs'
import Profile from '@/components/Profile'
import Work from '@/components/Work'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'WhoIs',
      component: WhoIs,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      props: true
    },
    {
      path: '/work/:caseid',
      name: 'WorkCase',
      component: Work,
      props: true
    },
  ]
})