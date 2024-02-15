// import './assets/main.css'
import './index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
window.toast = toast;

const app = createApp(App);
app.use(router)
app.use(store)
app.mount('#app')
