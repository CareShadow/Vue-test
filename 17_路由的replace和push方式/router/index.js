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
                            // 使用params参数,要使用占位符
                            name:'xiangqing',
                            path:'details/:id/:title',
                            component:Details,
                            props(route){
                                console.log(route);
                                return{
                                    id:route.params.id,
                                    title:route.params.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})
export default router