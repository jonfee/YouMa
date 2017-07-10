<template>
    <div id="modal" v-show="show" class="modal">
        <span class="close" @click="close">×</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('hide');
        }
    }
}
</script>


<style lang="scss">
// 模态框
.modal {
    border: solid 1px #ccc;
    position: fixed;
    width: 80%;
    height: 75%;
    padding: 10px;
    left: 10%;
    top: 13%;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 5;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    .close {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        top: -5px;
        right: -5px;
        font-size: 25px;
        border: solid 1px #ccc;
        border-radius: 100%;
        color: white;
        background-color: #67C36F;
        background-attachment: fixed;
    }
    @-webkit-keyframes zoom {
        from {
            -webkit-transform: scale(0)
        }
        to {
            -webkit-transform: scale(1)
        }
    }
    @keyframes zoom {
        from {
            transform: scale(0.1)
        }
        to {
            transform: scale(1)
        }
    }
}
</style>

