// 引入
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则 request请求 response响应
app.get('/', (request, response) => {
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应内容
    response.send('hello');
})

app.listen(8000, () => {
    console.log('启动服务')
})
