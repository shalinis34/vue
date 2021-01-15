import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
