/*
 * @LastEditTime: 2022-07-28 00:11:42
 * @Description: 资源构建测试处理
 * @Date: 2022-03-27 23:53:18
 * @Author: wangshan
 * @LastEditors: wangshan
 */
// import Bg from '@/assets/images/bg.jpg'
import Logo from '@/assets/images/download.svg'
export default function AssetsPro() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                background: `center / cover no-repeat url(${Bg})`
            }}
        >
            <h3 className="tip-success">资源文件处理</h3>
            <div style={{ width: '200px', margin: '0 auto' }}>
                <img src={Logo} />
            </div>
        </div>
    )
}
