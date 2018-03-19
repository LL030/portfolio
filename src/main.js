// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false


import Hammerjs from './assets/js/hammer.js';
import Moment from './assets/js/moment.js';
import Velocity from './assets/js/velocity.js';
Vue.use(Hammerjs);
Vue.use(Moment);
Vue.use(Velocity);

import navItem from './components/nav/navItem.vue'
import Macbook from './components/handset/Macbook.vue'
import Phone from './components/handset/Phone.vue'
import Bowser from './components/handset/Bowser.vue'
import Case from './components/Case.vue'
import Svgicon from './components/unit/Svgicon.vue'
//import { VueTyper } from 'vue-typer'
Vue.component('NavItem', navItem);
Vue.component('Macbook', Macbook);
Vue.component('Phone', Phone);
Vue.component('Bowser', Bowser);
Vue.component('Case', Case);
Vue.component('Svgicon', Svgicon);

// Vue.component('VueTyper', VueTyper);
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
