/* 
*--------------------------------------
*   此文档主要是配置路由映射
*--------------------------------------
*/

//首页组件
import Home from '@/components/Home'
//用户登录组件
import Login from '@/components/Login'
//用户注册组件
import Register from '@/components/Register'
//用户注册组件
import UserCenter from '@/components/UserCenter'
//订单确认
import OrderConfirm from '@/components/OrderConfirm'
//支付方式选择
import PaymentChoose from '@/components/PaymentChoose'
//商品分类 
import Categories from '@/components/Categories'
//分类商品集合
import CategoryProducts from '@/components/CategoryProducts'
//商品详情
import ProductDetails from '@/components/ProductDetails'
//商品搜索结果
import SearchResult from '@/components/SearchResult'

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
    },
    //用户中心
    {
        name: 'user_center', 
        path: '/user/center', 
        component: UserCenter,
        meta:{
            title: '用户中心',
            mustLogin: true
        }
    },
    //分类列表
    {
        name: 'categories', 
        path: '/product/categories', 
        component: Categories,
        meta:{
            title: '全部分类'
        }
    },
    //分类商品列表
    {
        name: 'category_products', 
        path: '/product/category', 
        component: CategoryProducts,
        meta:{
            title: '分类商品'
        }
    },
    //商品搜索结果
    {
        name: 'search_result', 
        path: '/product/search', 
        component: SearchResult,
        meta:{
            title: '搜索结果'
        }
    },
    //商品详情
    {
        name: 'product_details', 
        path: '/product/details', 
        component: ProductDetails,
        meta:{
            title: '商品详情'
        }
    },
    //订单确认
    {
        name: 'order_confirm', 
        path: '/order/confirm', 
        component: OrderConfirm,
        meta:{
            title: '确认订单',
            mustLogin: true
        }
    },
    //支付方式选择
    {
        name: 'payment_choose', 
        path: '/order/payment', 
        component: PaymentChoose,
        meta:{
            title: '选择支付方式',
            mustLogin: true
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