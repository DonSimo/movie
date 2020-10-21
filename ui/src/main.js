import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import App from './App.vue'
import router from './router'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({

  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    }
  },
})