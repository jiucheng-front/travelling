import Taro from '@tarojs/taro'

export function setToken(token) {
  Taro.setStorage('token', token)
}

export function getToken() {
  return Taro.getStorage('token')
}

export function isLogined() {
  if (getToken()) {
    return true
  } else {
    return false
  }
}
