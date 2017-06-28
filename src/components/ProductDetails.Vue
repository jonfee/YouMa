<template>
    <div id="container">
        <!--商品展示图-->
        <section class="product-pic">
            <img :src="product.Picture" />
        </section>
        <!--商品关键信息：名称、价格、库存、销量等-->
        <section class="product-info">
            <p class="product-name">{{ product.Name }}</p>
            <p class="product-price">售价<span>￥{{ product.Price.toFixed(2) }}</span></p>
            <p class="product-sales">
                <span>原价&nbsp;￥{{ product.OriginalPrice.toFixed(2) }}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <span>已售&nbsp;{{ product.SalesVolume }}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <span>剩余&nbsp;{{ product.Inventory }}</span>
            </p>
        </section>
        <!--商品详情-->
        <section class="product-details">
            <p class="details-tip">图文详情</p>
            <section class="content">
                {{ product.Description }}
            </section>
        </section>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入首页样式
import './../assets/sass/views/product_details.scss'

export default{
    data() {
        return {
            //导航信息
            navinfo:{
                title: '商品详情',
                backlink: '/product/categories'
            },
            //当前商品
            product: null
        }
    },
    props: ['setnav'],
    created: function(){
        // 商品ID
        var productId = this.$route.query.id;
        
        //设置导航信息
        this.$emit('setnav',this.navinfo);   

        //当前商品信息
        this.product = this.getProduct(productId);
    },
    methods:{
        /**
        *   根据商品ID获取商品信息
        */
        getProduct: function(productId){
            return global.Products.filter(item=>item.Id==productId)[0];
        }
    }
}

</script>