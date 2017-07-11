<template>
    <div v-show="show" class="modalcontainer">
        <div id="modal" class="modal">
            <span class="close" @click="close">×</span>
            <slot></slot>
        </div>
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
.modalcontainer {
    width: 100% !important;
    height: 100% !important;
    position: fixed !important;
    max-width: 100% !important;
    text-align: center;
    border: 0px !important;
    background: rgba(0, 0, 0, 0.1) !important; // 导航高度
    top: 44px;
    padding: 10% 0;
    left: 0;
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
    z-index: 666;
}

.modal {
    display: inline-block;
    border: solid 1px #ccc;
    position: relative;
    width: 80%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.9);

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

