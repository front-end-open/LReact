为区别配置分离配置文件, 分离 webpack 原始配置文件模式`webpack.config.js`

分离方式:

1. webpack.common.js
   > 公共配置文件
2. webpack.dev.js
   > 开发环境下的配置文件
3. webpack.prod.js
   > 生产环境下的配置文件
4. paths.js
   > wepback 配置路径调佣的配置文件，目的在于，通常在配置 webpack 通常需要调用各种路径，在这里集中配置。

配置目录说明：

```
- config webpack配置目录
  + webpack.common.js
  + webpack.dev.js
  + webpack.prod.js
- node_modules
- public 公共资源目录
  + index.html
- server 开发服务环境配置目录
  + appConfig.js  基础服务配置 自定义服务端口，ip, 代理地址
  + logger.js 控制台输出的日志
  + index.js 服务入口
- src
  + index.js
```

开发环境服务器配置

- 自定义打包日志

配置目录

```
+ server
    + touch index.js # 服务入口
    + touch appConfig.js # 基础服务配置 自定义服务端口，ip, 代理地址
    + touch logger.js # 控制台输出的日志

```

配置说明：

1. wepack v4 通过 webpack-dev-server 启动服务, 在 webpack v5 通过 webpack
