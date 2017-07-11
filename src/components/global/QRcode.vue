<template>
    <div class="qr-code">
        <img src="/static/imgs/ewm.png" />
        <span>微信公众号</span>
    </div>
</template>

<style>
    .qr-code{
        width: -webkit-calc(100% * 0.2);
        width: -moz-calc(100% * 0.2);
        width: -ms-calc(100% * 0.2);
        width: calc(100% * 0.2);
        min-width: 100px;
        max-width: 200px;
        height: auto;

        padding: 5px;
        margin: 0px;

        position: fixed;
        right: 20px;
        bottom: 35px;
        z-index: 99;

        background: rgba(255, 255, 255, 1);
        border: 1px solid #eee;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        opacity: 0.8;

        img{
            width: 100%;
            height: auto;
        }

        span{
            width: 100%;
            height: 25px;
            line-height: 25px;
            margin: 0px;
            padding: 0px;
        }
    }
</style>