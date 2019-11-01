/*
 *@Author: Jiucheng
 *@Date: 2019-11-01 18:16:11
 *@Description: 工具函数
 */
import Taro from '@tarojs/taro'

/**
 * @param {object} token 
 */
export function setToken(token) {
  Taro.setStorageSync('token', token)
}

export function getToken() {
  return Taro.getStorageSync('token')
}

export const getRadomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function isLogined() {
  if (getToken()) {
    return true
  } else {
    return false
  }
}
