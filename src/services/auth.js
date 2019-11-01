/*
 *@Author: Jiucheng
 *@Date: 2019-11-01 15:51:48
 *@Description: 登录验证
 */
import request from '../utils/request'
import {
  serverUrl
} from '../utils/config'

/**
 * 
 * @param {*} data
 * user_name(必须)
 * password (必须)
 */
export function loginPost(data) {
  return request(`${serverUrl}/api/v1/auth/login`, 'post', data)
}

/**
 * 
 * @param {*} data
 * user_name(必须)
 * password (必须)
 * nick_name
 * avatar
 * mobile
 * email 
 */
export function registerPost(data) {
  return request(`${serverUrl}/api/v1/auth/login`, 'post', data)
}

export default {}
