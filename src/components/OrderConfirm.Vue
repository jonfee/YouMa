<template>
    <div id="order-confirm">
        <!--收货地址-->
        <section class="address">
            <div class="addr-title">
                <span>寄送至：</span>
                <span>更多地址请选择&nbsp;〉</span>
            </div>
            <ul class="addr-linkman">
                <li>收货人<input type="text" /></li>
                <li>电话<input type="text" /></li>
            </ul>
            <div class="addr-street">
                地址<input type="text" />
            </div>
        </section>
        <!--购买清单-->
        <section class="buy-list">
            <p class="buylist-title">购买清单</p>
            <div class="buylist-content">
                <img src="" />
                <section>
                    <p></p>
                    <p></p>
                </section>
            </div>
        </section>
        <!--费用计算-->
        <section class="order-price">
            <div class="freight">运费<span class="freight-value"></span></div>
            <div  class="total-amount">总计<span class="amount-value"></span></div>
        </section>
        <!--操作-->
        <div class="form-action">
            <button>提交订单</button>
        </div>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入样式
import './../assets/sass/views/order-confirm.scss'

</script>