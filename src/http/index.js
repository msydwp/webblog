// 导入请求方法类
import http from './http'

//用户登陆
export function userLogin(params) {
    return http.post("/api/user/login", params)
}
//用户注册
export function userRegister(params) {
    return http.post("/api/user/register", params)
}
// export function getbilllist() {
//     return http.get("/api/bill/billList", { "household_id": "10131", "pay_status": "1", "community_id": "10", "year": "2022" })
// }




//小玩意

//礼金计算
export function cashGift(params) {
    return http.post("/otherBlog/cashGift", params)
}