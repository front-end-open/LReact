/*
 * @LastEditTime: 2022-08-21 01:27:40
 * @Description:
 * @Date: 2022-03-19 03:36:03
 * @Author: wangshan
 * @LastEditors: wangshan
 */
export function Cbind(context, fn) {
    return (...args) => {
        fn(...args)
    }
}

// 摄氏温度转华氏温度
export function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9
}
// 华氏温度转摄氏温度
export function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32
}

export function debounce(func, delay) {
    let timer, result
    return function () {
        let args = arguments
        console.log(args)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            result = func.apply(this, args)
        }, delay)

        return result
    }
}
