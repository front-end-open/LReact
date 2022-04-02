/*
 * @LastEditTime: 2022-04-03 00:50:57
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
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ], // 'eslint:recommended' rule--> un-def
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'import'], // 手动注入import导入顺序格式化规则
    rules: {
        // jsx细粒度检测规则
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/react-in-jsx-scope': 'off', // 关闭JSX，React全局变量的检测
        'import/order': [
            // 配置导入格式化规则
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'no-undef': 'off' // 关闭未声明全局变量注入
    }
}
