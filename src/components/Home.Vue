<template>
    <div class="home-container">
        <!--Banner展示区域-->
        <section class="top-banner-box">
            <img src="/static/imgs/ad/home_01.png" />
        </section>
        <!--商品分类导航展示区域-->
        <section class="nav-menu-box">
            <ul>
                <li v-for="cate in recommandCategories" @click="goCategoryProducts(cate.Id)">
                    <div class="menu-icon" :class="cate.IconClass"></div>
                    <span>{{ cate.Name }}</span>
                </li>
                <li @click="goCategories">
                    <div class="menu-icon cate-icon-more"></div>
                    <span>更多</span>
                </li>
            </ul>
        </section>
        <!--推荐商品展示区域-->
        <section class="products-box">
            <div class="separator">
                今日推荐
            </div>
            <!--推荐商品-->
            <product_list :categories="categories" :products="recommandProducts" class="columns-one" ></product_list>
            <p class="laster">-- 没有更多推荐商品了 --</p>
        </section>
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
            //所有商品分类
            categories: null,
            //推荐的商品分类
            recommandCategories: null,
            //推荐的商品
            recommandProducts: null
        }
    },
    components: { product_list },
    created: function(){

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
        },

        /**
        *   跳转到分类下的商品列表
        */
        goCategoryProducts: function(cateId){
            this.$router.push({
                name: 'category_products',
                query: { id: cateId }
            });
        },

        /**
        *  跳转到商品分类
        */
        goCategories: function(){
            this.$router.push({
                name: 'categories'
            });
        }
    }
}

</script>