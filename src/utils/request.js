/*
 *@Author: Jiucheng
 *@Date: 2019-11-01 15:24:09
 *@Description: Taro程序请求封装
*/
import Taro from '@tarojs/taro'
// import {
//   serverUrl,
// } from './config'

import {
  getToken
} from './tools'

/**
 * 
 * @param {*} url 必须 
 * @param {*} method 必须
 * @param {*} data 必须
 */
export default function request(url, method, data) {
  Taro.showLoading({
    title: '加载中',
  })
  return Taro.request({
    url,
    method,
    data,
    header: {
      'content-type': 'application/json',
      Authorization: 'bearer' + getToken()
    }
  }).then(res => {
    Taro.hideLoading()
    if (res.statusCode == 401) {
      Taro.redirectTo({
        url: '/pages/auth/login'
      })
    }
    return res.data
  }).catch(error => {
    Taro.hideLoading()
    return error
  })
}
