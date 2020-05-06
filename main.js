import Vue from 'vue'
import App from './App'
import G_show_modal from '@/common/G_show_modal/g_show_modal.js'
Vue.use(G_show_modal)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
