/*
 * @LastEditTime: 2022-03-26 00:25:28
 * @Description: 主题context
 * @Date: 2022-03-26 00:23:21
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { createContext } from "react/cjs/react.development";
export const theme = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const ThemeContextFull = createContext(theme.dark);
