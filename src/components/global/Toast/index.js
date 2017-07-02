import Vue from 'vue'
import ToastComponet from './Toast'

let instance;

let toastConstructor = Vue.extend(ToastComponet);

let Toast = () => {
    if (!instance) {
        instance = new toastConstructor({
            el: document.createElement('div')
        })
        instance.$el.style.width = '100 %';
        document.body.appendChild(instance.$el);
    }
    return instance;
}

export default {
    install(Vue) {
        Vue.prototype.$toast = Toast();
    }
}