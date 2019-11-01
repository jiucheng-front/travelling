/*
 *@Author: Jiucheng
 *@Date: 2019-11-01 20:41:37
 *@Description: 文章上传
 */

import request from '../utils/request'
import {
  serverUrl
} from '../utils/config'

export function publishPost(data) {
  return request(`${serverUrl}/api/v1/articles`, 'post', data)
}

export default {}
