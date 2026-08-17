//一般用于配置代理跨域，或者其他配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//配置路径
import path from "path"
//引入svg需要用到的插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    createSvgIconsPlugin({
      //将来需要用到的svg图标放到此路径下
      iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
      symbolId: 'icon-[name]'
    })
  ],
  css: {
    //配置全局scss变量
    preprocessorOptions: {
      scss: {
        
        // 每个 scss 文件会自动注入这段内容
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  },
  resolve:{
    alias:{
      "@":path.resolve("./src")  //相对路径别名配置，使用@代替src
    }
  }
})
