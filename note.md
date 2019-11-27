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

参考链接：

### 问题一:用 http-proxy-middleware 配置代理，请求地址却报404错误
原因：在setupProxy.js少写了 pathRewrite 这个设置

### 问题二: 使用antd框架，按需引入出错


### 前端面试题一：
```
var name="world";
(function(){
    if(typeof name=="undefined"){
        var name="jack";
        console.log("Goodbye "+name);
    }else{
        console.log("Hello world");
    }
})()   //Goodbye jack，此题注意!!!

```
解释:使用立即执行函数的好处，通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可

### 前端面试题二：
```
var a=100;
function fn1(){
    alert(a);
    var a=10;
}
fn1(); //undefined,因为在函数里又重新声明了一个a变量，在还没赋值之前就调用了
alert(fn1()); //undefined,因为fn1函数没有返回值
```

var a=100;
function fn1(){
    alert(a);
    var a=10;
}
fn1();
alert(fn1());

### 其他面试题
1.undefined和null出现的情况
2.axios和fetch的区别
3.优化页面的scroll事件