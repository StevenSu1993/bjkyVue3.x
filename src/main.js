import {createApp} from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入状态管理
import store from './vuex/store';

// 引入icon
import './assets/icon/iconfont.css'
import request from "./utils/request";


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.config.globalProperties.$bus = this
app.config.globalProperties.$request = request
app.mount('#app')
