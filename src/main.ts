import './assets/main.css'
import vuexCounter from '@/stores/vuexCounter'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).use(vuexCounter).use(createPinia()).mount('#app')
