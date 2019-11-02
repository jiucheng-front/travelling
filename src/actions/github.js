/*
 *@Author: Jiucheng
 *@Date: 2019-11-02 11:32:37
 *@Description: 异步获取数据
 */
import Taro from '@tarojs/taro'

import {
  GETGITHUB
} from '../constants/github'

export const setGithubInfo = data => ({
  type: GETGITHUB,
  payload: {
    githubInfo: data
  }
})

// export const fetchGithubInfo = () => dispatch() => (

// )

export function fetchGithubInfo() {
  return dispatch => {
    // axios.get('https://api.github.com/users/wjf444128852')
    Taro.request({
        url: 'https://api.github.com/users/wjf444128852',
      }).then((res) => {
        dispatch(setGithubInfo(res.data))
        // return action
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
