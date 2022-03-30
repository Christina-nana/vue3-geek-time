import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'


// window.onerror = function(e){
//     console.info(e)
//     // console.log(['https://stackoverflow.com/search?q=[js]+'+e])
// }
// console.error(11)
	



createApp(App)
.use(router)
.use(store)
.mount('#app')

