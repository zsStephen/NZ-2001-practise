import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
    {
        url: '/api/user',          // 接口地址
        method: 'get',             // 请求方法
        response: () => {
            return {
                code: 200,
                message: 'success',
                data: Mock.mock({
                    'list|10': [   // 生成 10 条随机数据
                        {
                            'id|+1': 1,
                            name: '@cname',      // 随机中文名
                            'age|18-60': 1,      // 18~60 岁随机
                        },
                    ]
                }).list
            }
        },
    },
    {
        url: '/api/user/error',          // 接口地址
        method: 'get',
        statusCode: 500,
        response: () => {
            return { code: 500, message: '服务器出现问题' }
        }
    }
] as MockMethod[]
