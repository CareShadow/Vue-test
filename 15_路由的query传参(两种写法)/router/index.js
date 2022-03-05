import About from '../pages/About'
import Home from '../pages/Home'
import New from '../pages/New'
import Message from '../pages/Message'
import Details from '../pages/Details'
import VueRouter from 'vue-router'
 
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'new',
                    component:New,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'details',
                            component:Details
                        }
                    ]
                }
            ]
        }
    ]
})
export default router