/*
 * @Date: 2020-10-13 17:21:44
 * @information: api
 */
import fly from '../assets/js/fly'

let financeUrl = `https://dfinance.allhome.com.cn`

export default {

  loginUserInfoApi() {
    return fly.get(`${financeUrl}/finance/common/user/loginUserInfo`)
  }




}





