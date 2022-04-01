/*
 * @LastEditTime: 2022-04-02 00:15:10
 * @Description: eslint-配置
 * @Date: 2022-04-01 23:57:00
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// 'plugin:react-hooks/recommended' 开启默认react-hook推荐简则规则
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'], // 'eslint:recommended' rule--> un-def
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        // jsx细粒度检测规则
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/react-in-jsx-scope': 'off' // 关闭JSX，React全局变量的检测
    }
}
