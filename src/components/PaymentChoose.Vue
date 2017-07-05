<template>
    <div class="payment-container">
    
        <section class="head">
            <p>支付剩余时间</p>
            <h1 class="time">{{countDownTime}}</h1>
    
            <div class="orderinfo" v-if="orderInfo&&orderInfo.orderNo">
                <p>
                    <span>订单编号：</span>
                    <span>{{orderInfo.orderNo}}</span>
                </p>
                <p>
                    <span>订单金额：</span>
                    <span class="amount">￥{{ orderInfo.orderAmount }}</span>
                </p>
            </div>
        </section>
    
        <div class="paylist">
            <p class="payment-tip">请选择支付方式</p>
            <section v-for="payType in payTypeList" @click="onChosePayType(payType)">
                <span class="logo">
                    <img class="rectangle" :src="payType.logo">
                </span>
                <span class="typename">{{payType.name}}</span>
                <span class="check">
                    <img v-if="currentPayTypeId==payType.id" src="/static/icons/checked.ico">
                </span>
            </section>
        </div>
    
        <input type="button" class="button" value="立即支付" @click="onPay"></input>
    </div>
</template>

<script>
import './../assets/sass/views/paymentchoose.scss'

export default {
    created() {

        var query = this.$route.query;
        if (query && query.code) {
            this.orderInfo = {
                orderAmount: isNaN(query.amount) ? 0 : Number(query.amount).toFixed(2),
                orderNo: query.code
            }
        }
        var interval = setInterval(() => {
            this.countDownSeconds--;
            if (this.countDownSeconds <= 0) {
                this.countDownSeconds = 0;
                window.clearInterval(interval);
            }
        }, 1000);
    },
    computed: {
        countDownTime() {
            var seconds = parseInt(this.countDownSeconds);// 秒
            var minutes = 0;// 分
            var hours = 0;// 小时
            if (seconds >= 60) {
                minutes = parseInt(seconds / 60);
                seconds = parseInt(seconds % 60);
                if (minutes >= 60) {
                    hours = parseInt(minutes / 60);
                    minutes = parseInt(minutes % 60);
                }
            }
            var result = "00：" + (parseInt(seconds) <= 9 ? ("0" + parseInt(seconds)) : parseInt(seconds));

            if (minutes >= 0) {
                result = "00：" + (parseInt(minutes) <= 9 ? ("0" + parseInt(minutes)) : parseInt(minutes)) + "：" + result.substring(3, result.length);
            }

            if (hours > 0) {
                result = "" + (parseInt(hours) <= 9 ? ("0" + parseInt(hours)) : parseInt(hours)) + "：" + result.substring(3, result.length);
            } else {
                result = result.substring(3, result.length);
            }

            return result;
        }
    },
    data() {
        return {
            payTypeList: [
                {
                    id: '1',
                    name: '银行卡支付',
                    logo: '/static/icons/chinaunionpay.ico'
                },
                {
                    id: '2',
                    name: '微信支付',
                    logo: '/static/icons/wechat.ico'
                }
            ],
            orderInfo: {
                orderAmount: 88.00,
                orderNo: '48989489848888'
            },
            currentPayTypeId: 1,
            countDownSeconds: 30 * 60
        }
    },
    methods: {
        onPay() {
            this.$toast.error("支付申请中!");
        },
        onChosePayType(payType) {
            this.currentPayTypeId = payType.id;
        }
    }
}

</script>
