import Container from '../components/Container'
import Role from '../pages/Role'
import VueRouter from 'vue-router'
 
const router = new VueRouter({
    routes:[
        {
            path:'/user/account',
            component:Container
        },
        {
            path:'/user/role',
            component:Role

        }
    ]
})
export default router