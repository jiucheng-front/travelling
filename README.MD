#### 游记(微信小程序)

#### 简介
![](./doc/info.png)

#### Taro
```bash
# taro
https://taro-docs.jd.com/taro/docs/README.html
# 安装
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli

# taro-ui
https://taro-ui.jd.com/#/docs/introduction

# 初始化项目
$ taro init myApp

# 安装taro-ui
$ cd myApp
$ npm install taro-ui

# 启动项目
# 1.微信:  "dev:weapp": "npm run build:weapp -- --watch",
npm run dev:weapp

# 或者(自己添加的):"wechat": "npm run build:weapp -- --watch",
npm run wechat / yarn wechat

# 其他常用命令
# yarn
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp

```

#### 开发

```javascript
// 启动
npm run dev:weapp
// 微信开发者工具查看(实时更新)

// 路由配置：app.jsx
config = {
  pages: [
    'pages/index/index',
    'pages/auth/login',
    'pages/auth/register',
    'pages/publish/publish',
    'pages/article/article',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}

// 路由跳转：
Taro.navigateTo({ url: '/pages/publish/publish' })

// 路由传递参数
Taro.navigateTo({ url: `/pages/article/article?id=${article.id}`

// 路由获取参数
this.$router.params.id

// 接口请求：utils/request.js
export default function request(url, method, data) {
  Taro.showLoading({
    title: '加载中',
  })
  return Taro.request({
    url,
    method,
    data,
    header: {
      'content-type': 'application/json',
      Authorization: 'bearer' + getToken()
    }
  }).then(res => {
    Taro.hideLoading()
    if (res.statusCode == 401) {
      Taro.redirectTo({
        url: '/pages/auth/login'
      })
    }
    return res.data
  }).catch(error => {
    Taro.hideLoading()
    return error
  })
}

// 富文本解析插件：wxParse


// back end:Rails
https://rubyonrails.org/

```