<template>
    <div class="order-confirm">
        <!--收货地址-->
        <section class="address">
            <div class="addr-title">
                <span>寄送至：</span>
                <span @click="useLastAddress" v-show="false">使用上次收件地址&nbsp;〉</span>
            </div>
            <ul class="addr-linkman">
                <li><span>姓名</span><input type="text" v-model="address_linkman" /></li>
                <li><span>电话</span><input type="text" v-model="address_tel" /></li>
            </ul>
            <div class="addr-street">
                <span>地址</span><input type="text" v-model="address_street" />
            </div>
        </section>
        <!--购买清单-->
        <section class="buy-list">
            <p class="buylist-title">购买清单</p>
            <div class="buylist-content">
                <img :src="product.Picture" />
                <div class="product-info">
                    <p class="product-name">{{ product.Name}}</p>
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
        <div class="form-action" @click="onSubmit">提交订单</div>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
//引入收货地址操作类
import addressUtil from './../utils/address'
//引入登录状态/安全操作类
import security from './../utils/security'
// 引入样式
import './../assets/sass/views/order-confirm.scss'

export default{
    data() {
        return {
            //当前商品
            product: null,
            //购买数，默认为 1
            buyNumber: 1,
            address_linkman: '',
            address_tel: '',
            address_street: ''
        }
    },
    created: function(){
        // 商品ID
        var productId = this.$route.query.pid;

        // 购买数
        var num = this.$route.query.num;
        if(num < 1) num+=1;
        this.buyNumber = num;

        //默认加载上次使用过的地址
        this.useLastAddress();

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
        * 使用上次使用过的地址
        */
        useLastAddress: function(){
            var _address = addressUtil.getLast();
            if(_address){
                this.address_linkman = _address.linkman;
                this.address_tel = _address.tel;
                this.address_street = _address.street;
            }
        },

        /**
        * 生成订单编号
        */
        generateCode: function(){
            var date = new Date();
            return date.getTime();
        },

        /**
        *   提交订单
        */
        onSubmit: function(){
            if(this.address_linkman.trim() == ''){
                this.$toast.error('收货人姓名不能为空');
            } 
            else if(this.address_tel.trim() == '') {
                this.$toast.error('收货人联系电话不能空');
            }else if(this.address_street.trim() == ''){
                this.$toast.error(this.address.street);
            }else{
                var _address = {
                    linkman : this.address_linkman,
                    tel: this.address_tel,
                    street: this.address_street
                };

                //数据检验成功，则存入本地缓存
                addressUtil.save(_address)

                this.$router.push({
                    name: 'payment_choose',
                    query: {
                        code: this.generateCode(),
                        amount: this.totalAmount
                    }
                })
            }
        }
    }
}

</script>