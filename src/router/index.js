/* 
*--------------------------------------
*   此文档主要是配置路由映射
*--------------------------------------
*/

//首页组件
import Home from '@/components/Home'

//创建路由实例并配置路由映射
const routers =[
    //首页
    {
        name: 'home', 
        path: '/index', 
        component: Home,
        meta:{
            title: '优码商城'
        }
    },
    //默认
    {
        name: 'default', 
        path: '*', 
        redirect:'/index'
    }
];

export default routers;
