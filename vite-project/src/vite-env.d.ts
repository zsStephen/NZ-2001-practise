/// <reference types="vite/client" />
// 声明 svg 插件的虚拟模块，避免 TS 报「找不到模块」
declare module 'virtual:svg-icons-register'
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}