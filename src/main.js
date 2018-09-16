import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
Vue.config.productionTip = false

Vue.component('navigation', Navigation)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
