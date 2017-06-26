<template>
    <div class="container">
        <p>我是首页</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            //导航信息
            navinfo:{
                title:'优码商城',
                backlink:'',
                backtext: '',
                noback: true
            }
        }
    },
    props:['setnav'],
    created: function(){
        //设置导航信息
        this.$emit('setnav',this.navinfo);
    }
}

</script>