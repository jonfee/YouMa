<template>
    <ul class="product-list" :class="column">
        <!--单个商品展示区块，通过 v-for 循环绑定商品列表数据-->
        <li class="product-item" v-for="product in products" @click="goDetails(product.Id)">
            <!--商品图片-->
            <div class="product-img">
                <img :src="product.Picture" />
            </div>
            <!--商品信息-->
            <div class="product-info">
                <!--商品名称-->
                <span class="product-name">{{ product.Name+product.Name+product.Name }}</span>
                <!--商品分类-->
                <span class="product-category">{{ getCategoryName(product.CategoryId) }}</span>
                <!--商品价格-->
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
    props: ['column','products','categories'],
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
            this.$router.push({
                name: 'product_details',
                query: { id: productId }
            });
        }
    }
}


</script>