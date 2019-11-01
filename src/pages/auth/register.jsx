import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './auth.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Register extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '注册'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='register'>
        <AtForm>
          <AtInput
            name='userName'
            placeholder='请输入用户名'
            title='用户名'
            type='text'
          />
          <AtInput
            name='passWord'
            placeholder='请输入密码'
            title='密码'
            type='password'
          />
          <AtInput
            name='RepassWord'
            placeholder='请再次输入密码'
            title='确认密码'
            type='password'
          />
          <AtButton type='primary'>注册</AtButton>
        </AtForm>
        <Text onClick={() => Taro.redirectTo({ url: '/pages/auth/auth' })} className='tips-btn'>已有账号，立即登录</Text>
      </View>
    )
  }
}

export default Register
