/*
 * @LastEditTime: 2022-03-25 00:28:11
 * @Description: 计算器
 * @Date: 2022-03-25 00:02:02
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useContext } from "react/cjs/react.development";
import { CaculatorContext } from "@/context/Caculator";
export default function Caculator() {
  const data = useContext(CaculatorContext);
  console.log("再次渲染");
  return (
    <div>
      <span>
        a + b: {data.a + ""} + {data.b + ""}
      </span>
      <p>result: {data.a + data.b}</p>
    </div>
  );
}
