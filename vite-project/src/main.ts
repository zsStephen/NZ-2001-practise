import { createApp } from 'vue'
//引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-plus国际化配置
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
//svg插件配置
import 'virtual:svg-icons-register'
//获取应用实例对象
const app = createApp(App)
//使用插件
app.use(ElementPlus,{locale: zhCn,})

//挂载
app.mount('#app')
