import { createApp } from 'vue'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// Custom CSS
import './assets/styles/custom.css'
// Bootstrap ICON
import 'bootstrap-icons/font/bootstrap-icons.css'
// SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'
// Root Component
import App from './App.vue'
// Route
import router from './router/route'

// Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')