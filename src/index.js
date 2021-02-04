import * as Vue from 'vue';
import * as VuexConfig from 'srcDir/config/VuexConfig.js';
import * as VueRouterConfig from 'srcDir/config/VueRouterConfig.js';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from 'srcDir/component/App.vue';




Vue.createApp(App)
    .use(VuexConfig.store) // vuex 用于全局状态管理
    .use(VueRouterConfig.router) // vue-router 由于使用 vue 开发，原先 web 页面之间跳转的超链接不能使用了，需要用这个进行组件间跳转
    .use(ElementPlus)
    .mount('#app');


