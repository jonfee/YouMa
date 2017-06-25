//引入商品分类数据
import Categories from '/static/categories';
//引入商品数据
import Products from '/static/products';
//引入广告数据
import AD from '/static/ad';

/*
*   定义全局配置信息
*/
const global = {
    Logo : "/assets/imgs/logo.png",                             //LOGO
    ICP : "粤ICP备17017713号-1",                                //ICP备案号
    Tel : "86 0755-25880367",                                   //联系电话
    Fox : "86 0755-25880367",                                   //传真
    Company : "深圳市优码生活科技有限公司",                       //公司名称
    Address : "中国·深圳·福田区深南大道2001号嘉麟豪庭C座1202号",   //公司地址
    CurrentYear : new Date().getFullYear,                       //当前年份
    Categories : categories,                                    //商品分类集合
    Products : products,                                        //商品集合
    AD : ad                                                     //广告集合
};