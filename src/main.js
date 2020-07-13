import Vue from 'vue'
import App from './App.vue'
import router from './Router/Index';
import store from './Vuex/Store';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);

// import style
import 'swiper/css/swiper.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
