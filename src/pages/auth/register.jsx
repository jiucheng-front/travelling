import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './auth.scss'
import { setToken } from '../../utils/tools'


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

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passWord: '',
      rePassWord: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeNameHandle(value) {
    this.setState({
      userName: value,
    })
  }

  changePasswordHandle(value) {
    this.setState({
      passWord: value,
    })
  }

  changeRePasswordHandle(value) {
    this.setState({
      rePassWord: value,
    })
  }

  submitRegHandle = () => {
    const { userName, passWord, rePassWord } = this.state
    if (!userName || !passWord) {
      return Taro.atMessage({
        'message': '用户名或密码不能为空',
        'type': 'warning',
      })
    }
    if (!rePassWord) {
      return Taro.atMessage({
        'message': '请再次确认密码',
        'type': 'warning',
      })
    }
    if (passWord && rePassWord && (passWord !== rePassWord)) {
      return Taro.atMessage({
        'message': '两次密码输入的不一致',
        'type': 'warning',
      })

    }
    if (userName && passWord && rePassWord && (passWord === rePassWord)) {
      Taro.atMessage({
        'message': '注册成功',
        'type': 'success',
      })
      // mock---login--
      setToken(Math.random().toString(36).slice(2))
      Taro.redirectTo({ url: '/pages/index/index' })
      console.log(`注册用户提交`)
    }
  }

  render() {
    const { userName, passWord, rePassWord } = this.state
    return (
      <View className='register'>
        <AtMessage />
        <AtForm onSubmit={this.submitRegHandle}>
          <AtInput
            name='userName'
            value={userName}
            onChange={this.changeNameHandle.bind(this)}
            placeholder='请输入用户名'
            title='用户名'
            type='text'
          />
          <AtInput
            name='passWord'
            value={passWord}
            onChange={this.changePasswordHandle.bind(this)}
            placeholder='请输入密码'
            title='密码'
            type='password'
          />
          <AtInput
            name='RepassWord'
            value={rePassWord}
            onChange={this.changeRePasswordHandle.bind(this)}
            placeholder='请再次输入密码'
            title='确认密码'
            type='password'
          />
          <AtButton formType='submit' type='primary'>注册</AtButton>
        </AtForm>
        <Text onClick={() => Taro.redirectTo({ url: '/pages/auth/auth' })} className='tips-btn'>已有账号，立即登录</Text>
      </View>
    )
  }
}

export default Register
