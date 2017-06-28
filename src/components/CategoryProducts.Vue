<template>
    <!--商品展示区域-->
    <section class="products-box">
        <section class="products-statistics">
             该分类下共有 {{ products.length }} 件商品
        </section>
        <!--商品-->
        <product_list :categories="categories" :products="products" class="columns-two" ></product_list>
        <p class="laster">-- 没有更多商品了 --</p>
    </section>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入样式
import './../assets/sass/views/category_products.scss'
// 商品列表展示组件
import product_list from '@/components/global/productlist'

export default{
    data() {
        return {
            //导航信息
            navinfo:{
                title: '分类商品',
                backlink: '/product/categories'
            },
            //所有商品分类
            categories: null,
            //当前商品分类
            currentCategory: null,
            //当前分类下的商品
            products: null
        }
    },
    components: { product_list },
    props: ['setnav'],
    created: function(){
        // 分类ID
        var cateId = this.$route.query.id;
        
        //设置导航信息
        this.$emit('setnav',this.navinfo);   

        //所有商品分类
        this.categories = global.Categories;
        
        //当前商品分类
        this.currentCategory = this.categories.filter(item=>item.Id==cateId)[0];

        //设置导航标题
        this.navinfo.title=this.currentCategory.Name;

        //推荐的商品
        this.products = this.getProducts(cateId);
    },
    methods:{
        /**
        *   根据商品分类获取商品集合
        */
        getProducts: function(cateId){
            return global.Products.filter(item=>item.CategoryId==cateId);
        }
    }
}

</script>