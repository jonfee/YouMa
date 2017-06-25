/* 
*--------------------------------------
*   此文档主要是配置路由映射
*--------------------------------------
*/

//订单确认
import OrderConfirm from '@/components/OrderConfirm'
//支付方式选择
import PaymentChoose from '@/components/PaymentChoose'

//创建路由实例并配置路由映射
export const routers =[
    //订单确认
    {
        name: 'order_confirm', 
        path: '/order/confirm', 
        component: OrderConfirm,
        meta:{
            title: '确认订单'
        }
    },
    //支付方式选择
    {
        name: 'payment_choose', 
        path: '/order/payment', 
        component: PaymentChoose,
        meta:{
            title: '选择支付方式'
        }
    }
];