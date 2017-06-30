<template>
    <div id="order-confirm">
        <!--收货地址-->
        <section class="address">
            <div class="addr-title">
                <span>寄送至：</span>
                <span>更多地址请选择&nbsp;〉</span>
            </div>
            <ul class="addr-linkman">
                <li><span>姓名</span><input type="text" /></li>
                <li><span>电话</span><input type="text" /></li>
            </ul>
            <div class="addr-street">
                <span>地址</span><input type="text" />
            </div>
        </section>
        <!--购买清单-->
        <section class="buy-list">
            <p class="buylist-title">购买清单</p>
            <div class="buylist-content">
                <img :src="product.Picture" />
                <div class="product-info">
                    <p class="product-name">{{ product.Name+product.Name+product.Name}}</p>
                    <p class="product-price">
                        <span>￥{{ product.Price }}</span>
                        <span>×{{ buyNumber }}</span>
                    </p>
                </div>
            </div>
        </section>
        <!--费用计算-->
        <section class="order-amount">
            <div class="freight"><span>运费</span><span>￥0.00</span></div>
            <div class="total-amount"><span>总计</span><span>￥{{ totalAmount }}</span></div>
        </section>
        <!--操作-->
        <section class="form-action" @click="submit">提交订单</section>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入样式
import './../assets/sass/views/order-confirm.scss'

export default{
    data() {
        return {
            //导航信息
            navinfo:{
                title: '确认订单'
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
        var productId = this.$route.query.pid;

        // 购买数
        var num = this.$route.query.num;
        if(num < 1) num+=1;
        this.buyNumber = num;
        
        //设置导航信息
        this.$emit('setnav',this.navinfo);   

        //当前商品信息
        this.product = this.getProduct(productId);
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
            return global.Products.filter(item=>item.Id  == productId)[0];
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