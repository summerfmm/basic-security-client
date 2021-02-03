import * as Vue from 'vue';
import * as VuexConfig from './vuex/VuexConfig.js';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './component/App.vue';




Vue.createApp(App)
    .use(VuexConfig.store)
    .use(ElementPlus)
    .mount('#app');


