import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './comment.styl'


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
class Comment extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '我的评论'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='comment'>
        <View className='components-page'>
          <Text>flex-direction: row 横向布局</Text>
          <View className='flex-wrp' style='flex-direction:row;'>
            <View className='flex-item demo-text-1' />
            <View className='flex-item demo-text-2' />
            <View className='flex-item demo-text-3' />
          </View>
          <Text>flex-direction: column 纵向布局</Text>
          <View className='flex-wrp' style='flex-direction:column;'>
            <View className='flex-item flex-item-V demo-text-1' />
            <View className='flex-item flex-item-V demo-text-2' />
            <View className='flex-item flex-item-V demo-text-3' />
          </View>
        </View>
      </View>
    )
  }
}

export default Comment
