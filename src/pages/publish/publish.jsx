import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {
  AtForm,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtButton,
  AtMessage,
} from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import './publish.scss'
import { serverUrl } from '../../utils/config'
import { publishPost } from '../../services/article'


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

  onFail(mes) {
    console.log(mes)
  }

  onImageClick(index, file) {
    console.log(index, file)
  }

  imageChangeHandle(files) {
    files.forEach((file, index) => {
      if (file) {
        console.log(index)
        Taro.uploadFile({
          url: `${serverUrl}/api/v1/common/upload_files`,
          name: 'file',
          filePath: file.url,
          formData: file.file,
        }).then(res => {
          const imgsArr = []
          const resultFile = serverUrl + JSON.parse(res.data.info)
          imgsArr[index] = resultFile
          this.setState({
            files: imgsArr
          })
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
      }
    })
    this.setState({
      files
    })
  }

  submitHandle = () => {
    const { title, description, files } = this.state
    if (!title) {
      return Taro.atMessage({
        message: '标题不能为空',
        type: 'warning'
      })
    }
    const data = {
      title,
      description,
      files,
      cover_img: files[0].url,
    }
    publishPost(data).then(res => {
      if (res.codeState === '0') {
        Taro.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 2000
        })
      } else {
        Taro.showToast({
          title: '发布失败',
          icon: 'none',
        })
      }
    }).catch(error => {
      Taro.showToast({
        title: '服务器繁忙,发布失败',
      })
      console.log(error)
    })
    console.log('submit')
  }

  render() {
    const { title, description, files } = this.state
    return (
      <View className='publish'>
        <AtMessage />
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
              count={9}
              onChange={this.imageChangeHandle.bind(this)}
              onFail={this.onFail.bind(this)}
              onImageClick={this.onImageClick.bind(this)}
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
