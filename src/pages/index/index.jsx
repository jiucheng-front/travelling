import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtGrid, AtFab } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

import { isLogined } from '../../utils/tools'

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
class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      banners: [
        {
          id: 1,
          url: 'https://m.tuniucdn.com/fb2/t1/G4/M00/0D/9D/Cii_J1mc5SCILo00AAm7IscwqeMAAATNQDGVhEACbs6726_w320_h180_c1_t0.jpg'
        },
        {
          id: 2,
          url: 'https://m.tuniucdn.com/fb2/t1/G2/M00/06/79/Cii-T1eFpJ2IU4dCAAm8KcLhlHQAAAIOgGrhwMACbxB771_w320_h180_c1_t0.jpg'
        },
        {
          id: 3,
          url: 'https://m.tuniucdn.com/fb2/t1/G2/M00/1A/22/Cii-T1gz0jqIQUaAAI4afc21-FAAAErZQDif9sAjhqV720_w320_h180_c1_t0.JPG',
        }
      ]
    }
  }

  componentDidMount() {
    // Taro.setStorageSync('token', '')
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onButtonClick() {
    const loginState = isLogined()
    if (loginState) {
      // navigateTo默认左上角有返回箭头
      Taro.navigateTo({ url: '/pages/publish/publish' })
      // redirectTo默认左上角是  home icon返回
      // Taro.redirectTo({ url: '/pages/publish/publish' })
    } else {
      Taro.redirectTo({ url: '/pages/auth/login' })
    }
    console.log(loginState, 'loginState111')
  }

  render() {
    const { banners } = this.state
    return (
      <View className='index'>
        {/* <AtFab onClick={this.onButtonClick.bind(this)}>
          <Text className='at-fab__icon at-icon at-icon-menu'>发布</Text>
        </AtFab> */}
        <View className='fabu-btn'>
          <AtFab onClick={this.onButtonClick.bind(this)}>
            <Text>发布</Text>
          </AtFab>
        </View>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#6190e8'
          // 是否左右滑动
          circular
          // 是否显示下方分页点
          indicatorDots
          // 自动播放
          autoplay
        >
          {
            banners.map(banner => (
              <SwiperItem key={banner.id}>
                <Image className='itemImg' src={banner.url} />
              </SwiperItem>
            ))
          }
        </Swiper>
        <AtGrid data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '攻略'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '游记'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '优惠'
            }
          ]}
        />
        {/* <AtButton onClick={() => Taro.redirectTo({ url: '/pages/auth/auth' })} type='primary'>我要登录</AtButton> */}
      </View>
    )
  }
}

export default Index
