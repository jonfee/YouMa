/* 
*--------------------------------------
*   此文档主要是配置路由映射
*--------------------------------------
*/

//用户登录组件
import Login from '@/components/Login'
//用户注册组件
import Register from '@/components/Register'

//创建路由实例并配置路由映射
const routers =[
    //登录
    {
        name: 'login', 
        path: '/user/login', 
        component: Login,
        meta:{
            title: '用户登录'
        }
    },
    //注册
    {
        name: 'register', 
        path: '/user/register', 
        component: Register,
        meta:{
            title: '用户注册'
        }
    }
];

export default routers;
