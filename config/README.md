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


