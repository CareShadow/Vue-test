import About from '../pages/About'
import Home from '../pages/Home'
import VueRouter from 'vue-router'
 
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
export default router