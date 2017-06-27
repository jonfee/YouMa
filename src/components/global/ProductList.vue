<template>
    <ul class="product-list">
        <li class="product-item" v-for="product in products" @click="goDetails(product.Id)">
            <div class="product-img">
                <img :src="product.Picture" />
            </div>
            <div class="product-info">
                <span class="product-name">{{ product.Name+product.Name+product.Name }}</span>
                <span class="product-category">{{ getCategoryName(product.CategoryId) }}</span>
                <p class="product-price">
                    <span class="price_sale">￥{{ product.Price.toFixed(2)}}</span>
                    <span class="price_original">￥{{ product.OriginalPrice.toFixed(2)}}</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script>

//引入‘商品列表展示组件’所依赖的样式文件
import './../../assets/sass/views/productlist.scss'

export default {
    data() {
        return {
            //商品集合
            products: this.products,
            //商品分类集合
            categories: this.categories
        }
    },
    props: ['products','categories'],
    methods:{
        /**
        *   获取商品分类名称
        *       参数说明：   cateId     商品分类ID
        */
        getCategoryName: function(cateId){
            return (this.categories.filter(item=>item.Id==cateId)[0].Name || '');
        },
        /**
        *   跳转到商品详情页
        */
        goDetails: function(productId){
            this.$route.push({
                name: 'product_details',
                query: { id: productId }
            })
        }
    }
}


</script>