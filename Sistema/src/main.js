import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify' 

axios.defaults.baseURL = 'http://localhost:52755'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify) // Usa la instancia de Vuetify creada en el archivo `vuetify.js`
app.config.globalProperties.$axios = axios // Configura axios globalmente si es necesario

app.mount('#app')
