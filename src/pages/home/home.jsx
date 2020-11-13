import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Index extends Component {

componentDidMount(){
  const userInfo = Taro.getStorageSync('userInfo');
  if(!userInfo){
    Taro.reLaunch({
      url: '/pages/login/login'
    })
  }
}
render () {
    return (
    <View className="page">
      我的
    </View>
    )
  }
}
