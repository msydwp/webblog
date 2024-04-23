// 导入请求的基础类
import request from './request'

const http = {
    get(url, params) {
        const config = {
            headers:{
                "Content-Type":"application/json"
            },
            method: "get",
            url: url
        }
        if (params) {
            config.params = params
        }
        return request(config)
    },
    post(url, params) {
        const config = {
            headers:{
                "Content-Type":"application/json"
            },
            method: "post",
            url: url
        }
        if (params) {
            config.data = params;
            console.log('传递过来的参数========' + params)
        }
        return request(config)
    }
}
export default http