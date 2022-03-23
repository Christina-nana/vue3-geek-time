import {createRouter,createWebHashHistory} from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router