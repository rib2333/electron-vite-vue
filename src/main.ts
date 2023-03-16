import { createApp } from 'vue'
import "@/styles/index.scss"
import App from './App.vue'
import { createPinia } from 'pinia'
// 引入路由
import {setupRouter} from "@/router";
const app = createApp(App)
const pinia = createPinia()
setupRouter(app)
app.use(pinia)
app.mount('#app')
