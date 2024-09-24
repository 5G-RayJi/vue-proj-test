import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { ErrorMessage, Field, Form } from 'vee-validate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
const app = createApp(App)

//vee-validate
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
