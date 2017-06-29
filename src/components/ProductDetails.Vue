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
            <section class="content" v-html="product.Description">
                {{ product.Description }}
            </section>
        </section>
        <!--购买操作区-->
        <section class="product-buy">
            <ul class="buy-num">
                <li @click="subtractBuyNumber">－</li>
                <li class="input-num">{{ buyNumber }}</li>
                <li @click="addBuyNumber">＋</li>
            </ul>
            <div class="total-amount">合计&nbsp;<span class="amount">{{ totalAmount }}</span>&nbsp;元</div>
            <div class="buy-submit" @click="submit">立即购买</div>
        </section>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入样式
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
            product: null,
            //购买数，默认为 1
            buyNumber: 1
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

        //默认购买数及合计金额
        this.buyNumber = 1;
    },
    computed:{
        /**
        *   当前购买合计金额
        */
        totalAmount: function(){
            return (this.buyNumber * this.product.Price).toFixed(2);
        }
    },
    methods:{
        /**
        *   根据商品ID获取商品信息
        */
        getProduct: function(productId){
            return global.Products.filter(item=>item.Id==productId)[0];
        },

        /**
        *   减少购买数
        *       1、默认递减1件
        *       2、最少保留1件
        */
        subtractBuyNumber: function(){
            if(this.buyNumber > 1){
                this.buyNumber --;
            }
        },

        /**
        *   增加购买数
        *       1、默认递加1件
        *       2、最多允许购买库数最大数
        */
        addBuyNumber: function(){
            if(this.buyNumber < this.product.Inventory){
                this.buyNumber ++;
            }
        },

        /**
        *   立即购买
        */
        submit: function(){
            this.$router.push({
                name: 'order_confirm',
                query: {
                    pid: this.product.Id,
                    num: this.buyNumber
                }
            })
        }
    }
}

</script>