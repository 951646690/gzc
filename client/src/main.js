import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Row,Col} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Row)
Vue.use(Col)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
