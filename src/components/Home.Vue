<template>
    <div class="container">
        <div class="top-banner-box">
            <img src="./../assets/imgs/ad/home_01.png" />
        </div>
        <div class="nav-menu-box">
            <ul>
                <li v-for="cate in recommandCategories">
                    <div class="menu-icon" :class="'icon-'+cate.Id"></div>
                    <span>{{ cate.Name }}</span>
                </li>
                <li class="more">
                    <div class="menu-icon icon-more"></div>
                    <span>更多</span>
                </li>
            </ul>
        </div>
        <div class="searcher-box">
            
        </div>
        <div class="products-box">
            <ul>
                <li class="product-item">
                    <img class="product-img"></img>
                    <div class="product-info">
                        <p></p>
                        <p></p>
                    </div>
                </li>
            </ul>
            <p class="laster">-- 没有更多推荐商品了 --</p>
        </div>
    </div>
</template>

<script>

import './../assets/sass/views/index.scss'
import {global} from './../../static/global'

export default {
    data() {
        return {
            //导航信息
            navinfo:{
                title: '优码商城',
                backlink: '',
                backtext: '',
                noback: true
            },
            recommandCategories: null
        }
    },
    props: ['setnav'],
    created: function(){
        //设置导航信息
        this.$emit('setnav',this.navinfo);      

        this.recommandCategories =  global.Categories;
    },
    computed:{
        
    },
    methods:{
        
    }
}

</script>