<template>
    <div class="container">
        <!--Banner展示区域-->
        <div class="top-banner-box">
            <img src="/static/imgs/ad/home_01.png" />
        </div>
        <!--商品分类导航展示区域-->
        <div class="nav-menu-box">
            <ul>
                <li v-for="cate in recommandCategories">
                    <div class="menu-icon" :class="'icon-'+cate.Id"></div>
                    <span>{{ cate.Name }}</span>
                </li>
                <li class="more">
                    <div class="menu-icon icon-more"></div>
                    <span>更多</span>
                </li>
            </ul>
        </div>
        <!--推荐商品展示区域-->
        <div class="products-box">
            <div class="separator">
                今日推荐
            </div>
            <!--推荐商品-->
            <product_list :categories="categories" :products="recommandProducts"></product_list>
            <p class="laster">-- 没有更多推荐商品了 --</p>
        </div>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入首页样式
import './../assets/sass/views/index.scss'
// 商品列表展示组件
import product_list from '@/components/global/productlist'

export default {
    data() {
        return {
            //导航信息
            navinfo:{
                title: '优码商城',
                backlink: '',
                backtext: '',
                noback: true
            },
            //所有商品分类
            categories: null,
            //推荐的商品分类
            recommandCategories: null,
            //推荐的商品
            recommandProducts: null
        }
    },
    components: { product_list },
    props: ['setnav'],
    created: function(){

        //设置导航信息
        this.$emit('setnav',this.navinfo);   

        //所有商品分类
        this.categories = global.Categories;
        
        //推荐的商品分类
        this.recommandCategories = this.categories.filter(item=>item.IsRecommend);

        //推荐的商品
        this.recommandProducts = this.getProducts(true);
    },
    methods:{
        /*
        * 获取商品信息
        *   参数说明：   isRecommand     是否推荐，筛选出符合该条件的商品
        * 
        */
        getProducts: function(isRecommand){
            isRecommand = isRecommand || false;
            return global.Products.filter(item=>item.IsRecommand);
        },

        /**
        *   获取商品分类名称
        *       参数说明：   cateId     商品分类ID
        */
        getCategoryName: function(cateId){
            return (global.Categories.filter(item=>item.Id==cateId)[0].Name || '');
        }
    }
}

</script>