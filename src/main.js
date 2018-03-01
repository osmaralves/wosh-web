import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import App from './App.vue'

Vue.use(VueResource)
Vue.use(VueCookie)

new Vue({
  el: '#app',
  render: h => h(App)
})
