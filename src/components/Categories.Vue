<template>
    <div class="category-data">
        <ul>
            <li v-for="cate in categories" @click="goCategoryProducts(cate.Id)">
                <div :class="cate.PictureClass"></div>
                <p class="category-name">{{ cate.Name }}</p>
                <p class="category-info">
                    共&nbsp;{{ cate.ProductCount }}&nbsp;件商品
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

// 引入全局配置文件
import {global} from './../../static/global'
// 引入商品分类样式
import './../assets/sass/views/categories.scss'

export default {
    data() {
        return {
            //所有商品分类
            categories: null
        }
    },
    created: function(){
        //所有商品分类
        this.categories = global.Categories;
    },
    methods:{
        /**
        *   跳转到分类下的商品列表
        */
        goCategoryProducts: function(cateId){
            this.$router.push({
                name: 'category_products',
                query: { id: cateId }
            });
        }
    }
}

</script>