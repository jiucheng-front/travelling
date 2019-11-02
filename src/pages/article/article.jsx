import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './article.scss'


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
class Article extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '文章详情'
  }

  componentDidMount() {
    console.log(this.$router)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='article'>
        <Text>{this.$router.params.id}</Text>
      </View>
    )
  }
}

export default Article
