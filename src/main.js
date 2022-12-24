import { createApp } from 'vue'
import './styles/reset.scss'
import './style.scss'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import Containers from './components/Main/Tab/Containers/Containers.vue'

const routes = [
 { path: '/subscribe/:option?', alias: '/', component: Containers },
]

const router = createRouter({
 history: createWebHashHistory(),
 routes
})


createApp(App).use(router).mount('#app')
