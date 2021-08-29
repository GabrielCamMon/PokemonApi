import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './styles/styles.scss'
import router from '@/router'

createApp(App).use(router).use(store).use(Antd).mount('#app')
