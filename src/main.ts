import { createApp } from 'vue'
import App from './App.vue'
// import router from './router' あとで追加
import store from './store/index'


const app = createApp(App)
app.use(store)
app.mount('#app')
