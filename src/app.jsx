import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.styl'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    // Taro create --name [页面名称]快速创建页面名字tra
    pages: [
      // 首页
      'pages/index/index',
      // 我的评论
      'pages/comment/comment',
      // 个人中心
      'pages/me/me',
    ],
    window: {
      // 导航栏背景色
      navigationBarBackgroundColor: '#ffffff',
      // 窗口的背景色
      backgroundColor: '#f6f8fa',
      backgroundTextStyle: 'light',
      // 导航栏标题文字内容
      navigationBarTitleText: 'WeChat',
      // 导航栏标题颜色，仅支持 black / white
      navigationBarTextStyle: 'black',
      // 是否开启当前页面的下拉刷新。
      // enablePullDownRefresh: true,
    },
    // 底部导航栏
    tabBar: {
      color: '#586069',
      selectedColor: '#03a0d6',
      // backgroundColor: '#4caf50',
      // tabBar的位置，仅支持 bottom / top，默认bottom
      // position: '',
      // tabbar对应的页面列表，最多5个
      list: [
        {
          'pagePath': 'pages/index/index',
          'text': '首页',
          'iconPath': './assets/images/iconBook.png',
          'selectedIconPath': './assets/images/iconBookActive.png'
        },
        {
          'pagePath': 'pages/comment/comment',
          'text': '评论',
          'iconPath': './assets/images/iconNote.png',
          'selectedIconPath': './assets/images/iconNoteActive.png',
        },
        {
          'pagePath': 'pages/me/me',
          'text': '个人中心',
          'iconPath': './assets/images/iconMe.png',
          'selectedIconPath': './assets/images/iconMeActive.png',
        }
      ],
    }
  }

  componentDidMount() { 
    console.log(`componentDidMount`)
  }

  componentDidShow() {
    console.log(`componentDidShow`)
  }

  componentDidHide() {
    console.log(`componentDidHide`)
  }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
