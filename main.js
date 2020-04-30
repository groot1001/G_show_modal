import Vue from 'vue'
import App from './App'
import G_show_modal from '@/common/G_show_modal/index.js'
Vue.config.productionTip = false

Vue.prototype.$showModal=function(op={}){
		 return	new Promise((resolve, reject)=>{
				new G_show_modal({
					...op,
					$event:function(e){
						if(e.res){
							resolve(e);
						}else{
							reject(e);
						}
					 }
					}).show();
			})
		}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
