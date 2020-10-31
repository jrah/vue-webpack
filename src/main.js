import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/css/common.css'

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
