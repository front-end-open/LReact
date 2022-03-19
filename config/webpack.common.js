/*
 * @LastEditTime: 2022-03-19 23:51:33
 * @Description: 公共配置文件
 * @Date: 2022-03-15 00:33:46
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const imageInlineSizeLimit = 4 * 1024;
const webpack = require("webpack");
const path = require("path");

module.exports = function (options) {
  return {
    mode: options.mode,
    entry: paths.appSrc,
    output: {
      path: paths.appBuild,
      publicPath: "/",
    },
    cache: {
      // 使用持久化缓存
      type: "filesystem", //memory:使用内容缓存 filesystem：使用文件缓存
    },
    devtool: false,
    module: {
      rules: [
        {
          oneOf: [
            {
              test: [/\.js$/, /\.jsx$/],
              exclude: /node_modules/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                  },
                },
              ],
            },
            {
              // .css文件处理
              test: cssRegex,
              exclude: cssModuleRegex,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                  },
                },
                "postcss-loader",
              ],
            },
            {
              // .scss/sass文件处理
              test: sassRegex,
              exclude: sassModuleRegex,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1, // 查询参数 importLoaders，用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader
                  },
                },
                "postcss-loader",
                "sass-loader", //
                {
                  loader: "sass-resources-loader", // 配置scss全局模块注入
                  options: {
                    resources: [
                      // 配置全局注入文件
                      path.resolve(paths.appSrc, "style/varibale.scss"),
                    ],
                  },
                },
              ],
            },
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              type: "asset",
              parser: {
                dataUrlCondition: {
                  maxSize: imageInlineSizeLimit, // 4kb
                },
              },
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2?)$/,
              type: "asset/resource",
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [paths.appNodeModules],
      extensions: [".js", ".jsx", ".css"],
      alias: {
        moment$: "moment/moment.js",
        "@": paths.appSrc,
        "@public": paths.appPublic,
      },
    },
    devServer: {},
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.ProvidePlugin({
        React: "react", // ['react']    // 全局注入React标识符
      }), // 注入全局变量插件
      ...options.plugins,
    ],
    stats: options.stats, // 打包日志发生错误和新的编译时输出
  };
};
