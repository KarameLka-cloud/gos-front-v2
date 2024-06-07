import {createApp} from 'vue'
import {createPinia} from 'pinia'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './styles/style.css'
import App from './App.vue'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

app.mount('#app')
