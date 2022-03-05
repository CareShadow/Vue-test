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
            component:About,
            meta:{title:'关于'}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'new',
                    component:New,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'信息'},
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

// 全局前置守卫，初始化时执行,每次路由去切换前执行
router.beforeEach((to,from,next) => {
    // console.log(to,from);
    //判断该路由进入是否要被验证
    if(to.meta.isAuth){
        if(localStorage.getItem('school')==='atguigu'){
            next();//放行
        }else{
            alert("无权访问")
        }
    }else{
        next()
    }
})
// 全局后置守卫 初始化时执行,每次路由切换后执行
router.afterEach((to,from) => {
    if(to.meta.title){
        document.title = to.meta.title
    }else{
        document.title = 'vue_test'
    }
})