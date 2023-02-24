import { createApp } from 'vue'
// Routing
import router from '@/router'

// css
import './style.css'

// Root component
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
