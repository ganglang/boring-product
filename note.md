### react项目配置代理的步骤
#### 1.安装 http-proxy-middleware
在根目录下的命令行窗口输入: 
> npm install http-proxy-middleware --save
#### ps:1.5.若项目根目录下没有config文件，则先要输入下面这句命令，暴露出配置
> npm run eject
#### 2.在src目录下新建setupProxy.js文件
在setupProxy.js文件里输入:
```
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: "http://v.juhe.cn", //需要代理的地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
}
```
#### 3.在/scripts/start.js文件里做一下配置， 找到 devServer ，然后加上 require('../src/setupProxy')(devServer);
```
 const devServer = new WebpackDevServer(compiler, serverConfig);
 require('../src/setupProxy')(devServer); // 新增此行代码
```

#### 4.在需要发送请求的地方使用 '/api' 代替需要代理的地址

### 问题一:用 http-proxy-middleware 配置代理，请求地址却报404错误
原因：在setupProxy.js少写了 pathRewrite 这个设置