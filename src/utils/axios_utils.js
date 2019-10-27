import axios from "axios";


/**
 * 使用async和await简化Promise的使用
 *
 * 统一异常处理
 * 返回Promise, 所以可以使用await调用
 *
 *
 * 外部使用:
 *  const {username, password} = ajax('url')
 */
export function ajax(url, data = {}, type = 'GET') {
    // 自己包装一层Promise对象
    return new Promise((resolve, reject) => {
        let p
        // 执行ajax请求
        if (type === 'GET') {
            p = axios.get(url, {
                params: data
            })
        } else {
            p = axios.post(url, data)
        }

        // 如果成功, resolve
        p.then(response => {
            resolve(response)
        }).catch(error => { // 如果失败, reject(reason) <- 不调用, 二是提示异常信息
           // reject(error) 不能这么做

           // message.error("请求错误" + error.message)
        })

    })


}
