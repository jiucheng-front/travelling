import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.styl'

import { technology } from '../../assets/dbdata/children'

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

  componentDidMount() { }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onFocusHandle = (e) => {
    console.log(e)
  }

  render() {
    return (
      <View className='index'>
        <View className='searchWrap'>
          <View className='searchMain'>
            <Input
              className='search'
              placeholder='热门书籍 Javascript'
              onFocus={this.onFocusHandle}
            />
          </View>
        </View>
        <View className='container'>
          {
            technology.map(book => (
              <View className='lineItem' key={book.id}>
                <View className='itemLeft'>
                  <Image className='img' src={book.img_url} />
                </View>
                <View className='itemRight'>
                  <Text className='title'>{book.title}</Text>
                  <View className='actionWrap'>
                    <Text className='price'>价格：{book.price}</Text>
                    <Button className='btn'>加入购物车</Button>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

export default Index
