import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css';
import router from './router';
import store from './store/index';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
