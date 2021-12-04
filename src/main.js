import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/_styles.scss'
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';

Vue.use(VueDatePicker);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
