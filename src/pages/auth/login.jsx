import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import './auth.scss'

// import { loginPost } from '../../services/auth'
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
class Login extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '登录'
  }

  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passWord: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  userNameChange(value) {
    this.setState({
      userName: value
    })
  }

  passWordChange(value) {
    this.setState({
      passWord: value
    })
  }

  submitHandle = () => {
    // mock login
    setToken(Math.random().toString(36).slice(2))
    Taro.redirectTo({ url: '/pages/index/index' })
    // ----------------真实校验-------------------
    // 本地需要：微信开发者工具不校验域名
    // loginPost({
    //   user_name: this.state.userName,
    //   password: this.state.passWord,
    // }).then(res => {
    //   setToken(res.info)
    //   if (res.code == 'y') {
    //     Taro.showToast({
    //       title: '登录成功',
    //       icon: 'none',
    //     })
    //     Taro.redirectTo({ url: '/pages/index/index' })
    //   } else {
    //     Taro.showToast({
    //       title: '登录失败',
    //       icon: 'none',
    //     })
    //   }
    //   console.log(res)
    // }).catch(error => {
    //   console.log(error)
    //   Taro.showToast({
    //     title: '当前服务器出错，稍后再试',
    //     icon: 'none',
    //   })
    // })
  }

  render() {
    const { userName, passWord } = this.state
    return (
      <View className='auth'>
        <AtForm onSubmit={this.submitHandle}>
          <AtInput
            value={userName}
            onChange={this.userNameChange.bind(this)}
            name='userName'
            placeholder='请输入用户名'
            title='用户名'
            type='text'
          />
          <AtInput
            value={passWord}
            onChange={this.passWordChange.bind(this)}
            name='password'
            placeholder='请输入密码'
            title='密码'
            type='password'
          />
          <AtButton formType='submit' type='primary'>登录</AtButton>
        </AtForm>
        <Text onClick={() => Taro.redirectTo({ url: '/pages/auth/register' })} className='tips-btn'>没有账号，立即注册</Text>
      </View>
    )
  }
}

export default Login
