<template>
    <div :class="toastClass">
        <div v-show="showToast" class="toast">
            <img class="icon" :src="msgIcon">
            <span class="msg">{{tipMsg}}</span>
        </div>
    </div>
</template>

<script>
var successIcon = '/static/icons/success.ico';
var errorIcon = '/static/icons/error.ico';
var infoIcon = '/static/icons/info.ico';
export default {
    computed: {
        toastClass() {
            var positionCss = 'top';
            if (this.position == 'middle') {
                positionCss = 'middle';
            } else if (this.position == 'bottom') {
                positionCss = 'bottom';
            }
            return ['toastcontain', positionCss, this.animationClass];
        }
    },
    data() {
        return {
            showToast: false,                           // 显示Toast
            tipMsg: '',                                 // 提示文字
            position: 'top',                            // 提示信息位置
            msgIcon: successIcon,       // 消息图标
            duration: 2000,
            animationClass: 'fadein'
        }
    },
    methods: {
        init() {
            this.position = 'top';
            this.msgIcon = successIcon;
            this.duration = 2000;
        },
        show(msg, options = null) {
            this.init();
            this.tipMsg = msg;
            if (options) {

                if (options.postion) {
                    this.postion = options.postion;
                }

                if (options.icon) {
                    this.msgIcon = options.icon;
                }

                if (options.duration && !isNaN(options.duration)) {
                    this.duration = options.duration;
                }
            }

            this.showToast = true;

            // 定时关闭
            setTimeout(() => {
                this.animationClass = 'fadeout';
                setTimeout(() => {
                    this.showToast = false;
                }, 300);
            }, this.duration);
        },
        success(msg, options = null) {
            var para = {};
            if (options)
                para = options;
            para.icon = successIcon;
            this.show(msg, para);
        },
        error(msg, options = null) {
            var para = {};
            if (options)
                para = options;
            para.icon = errorIcon;
            this.show(msg, para);
        },
        info(msg, options = null) {
            var para = {};
            if (options)
                para = options;
            para.icon = infoIcon;
            this.show(msg, para);
        }
    }
}
</script>

<style type="text/css" lang='scss'>
.toastcontain {
    width: 100%;
    height: 30px;
    position: fixed;
    z-index: 666;
    left: 0;
    text-align: center;
    .toast {
        height: 36px;
        max-width: 80%;
        padding: 6px 10px;
        display: inline-block;
        background: white;
        border-radius: 6px;
        box-shadow:2px 2px 3px #cccccc,-2px -2px 3px #cccccc;
        .icon {
            width: 20px;
            height: 20px;
            float: left;
        }
        .msg {
            float: left;
            max-width: 90%;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            margin-left: 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}

.top {
    top: 8%;
}

.middle {
    top: 50%;
}

.bottom {
    bottom: 6%;
}

.fadein {
    animation: fadeIn 0.4s;
}

.fadeout {
    animation: fadeOut 0.4s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0.25;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 1;
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0.25;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}
</style>
