// 请求配置过程的代码是这样的
import axios from "axios";
import Vue from 'vue'
import result from "element-ui";
import router from "@/router";

const requests = axios.create({
    // 配置对象
    baseURL: "/", // 这里写自己的域名
    // baseURL: import.meta.env.VITE_BASE_URL + '/', // url = base url + request url
    timeout: 5000,
    withCredentials: true, //异步请求携带Cookie
    headers: { // 这里的参数可以根据自己的需要设置 不需要的可以不设置
        "Content-Type": "application/json",
        'token': "",
        // "X-Requested-With": 'XMLHttpRequest',
        "App-Version": "",
        "Lng-Lat": "",
        "System-Version": "",
        "Mobile-Model": "",
        "Device": "",
    }
})
// 配置请求拦截器
requests.interceptors.request.use((config) => {
    config.headers['Authorization'] = Vue.$cookies.get('Authorization') // 请求头带上token
    // config 配置对象 请求头
    return config
}, (error) => {
    console.log('请求失败....................')
    return Promise.error(new Error("请先登陆后，再进行后续操作！"))
})


// 响应拦截器
requests.interceptors.response.use((resp) => {
    // 请求成功
    return resp.data
}, (error) => {
    switch (error.response.status) {
        case 400:
            result.Message({
                message: error.response.data,
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break
        case 401:
            this.$router.push("/HomeBlog");
            break;
        case 405:
            result.Message({
                message: 'http请求方式有误',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break;
        case 500:
            result.Message({
                message: '服务器出了点小差，请稍后再试',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break;
        case 501:
            result.Message({
                message: '服务器不支持当前请求所需要的某个功能',
                type: 'error',
                duration: 1500,
                customClass: 'element-error-message-zindex'
            })
            break;
    }
})



export default requests