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
var routers =[
    //首页
    {
        name: 'home', 
        path: '/index', 
        component: Home,
        meta:{  
            nav: {
                title: '优码商城',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: true,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //登录
    {
        name: 'login', 
        path: '/user/login', 
        component: Login,
        meta:{
            nav: {
                title: '用户登录',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //注册
    {
        name: 'register', 
        path: '/user/register', 
        component: Register,
        meta:{
            nav: {
                title: '用户注册',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //用户中心
    {
        name: 'user_center', 
        path: '/user/center', 
        component: UserCenter,
        meta:{
            mustLogin: true,
            nav: {
                title: '用户中心',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //分类列表
    {
        name: 'categories', 
        path: '/product/categories', 
        component: Categories,
        meta:{
            nav: {
                title: '全部分类',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //分类商品列表
    {
        name: 'category_products', 
        path: '/product/category', 
        component: CategoryProducts,
        meta:{
            nav: {
                title: '分类商品',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //商品搜索结果
    {
        name: 'search_result', 
        path: '/product/search', 
        component: SearchResult,
        meta:{
            nav: {
                title: '搜索结果',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //商品详情
    {
        name: 'product_details', 
        path: '/product/details', 
        component: ProductDetails,
        meta:{
            nav: {
                title: '商品详情',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //订单确认
    {
        name: 'order_confirm', 
        path: '/order/confirm', 
        component: OrderConfirm,
        meta:{
            mustLogin: true,
            nav: {
                title: '确认订单',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
        }
    },
    //支付方式选择
    {
        name: 'payment_choose', 
        path: '/order/payment', 
        component: PaymentChoose,
        meta:{
            mustLogin: true,
            nav: {
                title: '选择支付方式',      //导航标题
                backtext: '',           //返回按钮文字 
                noback: false,           //是否需要返回铵钮
                hide: false,            //是否隐藏整个导航条
                showUser: true          //是否显示登录用户信息
            }
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