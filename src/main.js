import { createApp } from 'vue'
import './styles/reset.scss'
import './style.scss'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import ContainerSend from './components/Main/Tab/Containers/ContainerSend/ContainerSend.vue'
import ContainerMessenger from './components/Main/Tab/Containers/ContainerMessenger/ContainerMessenger.vue'
import ContainerSocial from './components/Main/Tab/Containers/ContainerSocial/ContainerSocial.vue'

const routes = [
 { path: '/send', alias: '/', component: ContainerSend },
 { path: '/messenger', component: ContainerMessenger },
 { path: '/socials', component: ContainerSocial },
]

const router = createRouter({
 history: createWebHashHistory(),
 routes
})


createApp(App).use(router).mount('#app')
