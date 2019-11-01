import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {
  AtForm,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtButton,
  // AtMessage,
} from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import './publish.scss'


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
class Publish extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '发布'
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      files: [{
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg',
      },
      {
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg',
      }]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  titleHandle(title) {
    // console.log(title, '1')
    this.setState({
      title,
    })
  }

  descriptionHandle(e) {
    this.setState({
      description: e.target.value,
    })
  }

  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }

  imageChangeHandle(files) {
    this.setState({
      files
    })
  }

  submitHandle = () => {
    console.log('submit')
  }

  render() {
    const { title, description, files } = this.state
    return (
      <View className='publish'>
        <View className='form'>
          <AtForm>
            <AtInput
              value={title}
              onChange={this.titleHandle.bind(this)}
              placeholder='请输入标题'
              title='标题'
              maxLength={10}
              clear
            />
            <AtTextarea
              value={description}
              onChange={this.descriptionHandle.bind(this)}
              placeholder='请输入简介内容'
              title='简介'
              maxLength={100}
              height={300}
            />
            {/* multiple:是否支持多选，length:单行显示数量，count：最多可选个数 */}
            <AtImagePicker
              multiple
              files={files}
              length={5}
              count={4}
              onChange={this.imageChangeHandle.bind(this)}
            />
            <AtButton
              type='primary'
              formType='submit'
              onClick={this.submitHandle}
            >提交</AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}

export default Publish
