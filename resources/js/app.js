/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//Vue.component('index', require('./components/index.vue').default);

import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './components/index.vue'
import Logged from './components/logged.vue'
import auth from './auth'
import router from './router'
// Set Vue globally
window.Vue = Vue
// Set Vue router
Vue.router = router
Vue.use(VueRouter)
// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = "/api"
Vue.use(VueAuth, auth)
// Load Toaster
import Toasted from 'vue-toasted';
Vue.use(Toasted);
// Load Index
Vue.component('index', Index)
Vue.component('logged', Logged)
window.app = new Vue({
  el: '#app',
  data(){
    return {
      reloader_pane : true,
      content_header : 'Home'
    }
  },
  router
});
