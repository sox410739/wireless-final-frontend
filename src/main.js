import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import * as Icons from '@element-plus/icons'

const app = createApp(App)
installElementPlus(app)

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})


app.use(router).mount('#app')