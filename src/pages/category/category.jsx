import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Image } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './category.scss'
import category from '../../common/mork/category.json'
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
const navList = ['全国','全部分类','全部时间']
export default class Index extends Component {
state = {
  categoryList: category.slice(0,10),
  loadMore: '查看更多'
}
loadMore() {
  Taro.showLoading({
    title: '加载中'
  })
  setTimeout(() => {
    this.setState({
      categoryList: category,
      loadMore: '已加载全部'
    })
    Taro.hideLoading()
  },800)
}
search() {
  Taro.switchTab({
    url: '/pages/search/search'
  })
}
jumpDetails(){
  Taro.navigateTo({
    url: '/pages/details/details'
  })
}

render () {
    return (
      <View className="page">
        <AtNavBar
          leftIconType="chevron-left"
          color='#fd345d'
          title='分类'
          rightFirstIconType='search'
          onClickRgIconSt={this.search}
        />
        <View className="nav">
          {
            navList.map((item,index) => {
              return (
                <View className="nav__list" key={index}>
                  <Text>{item}</Text>
                  <Text className="nav__icon"></Text>
                </View>
              )
            })
          }
        </View>
        <View className="pt-40 pr-40 pb-40 pl-40">
          {
            this.state.categoryList.map(item => {
              return (
                <View className="goods-box mb-30 pb-30" key={item.id} onClick={this.jumpDetails}>
                  <View className="goods-box__left">
                    <Image className="goods-image" src={item.img}/>
                    <View className="ticket fs-xs fw-7">售票中</View>
                  </View>
                  <View className="goods-box__right ml-30">
                    <View className="fw-7" style="line-height: 20px">{item.title}</View>
                    <View className="mt-20 text-gray-2 fs-xs">{item.date}</View>
                    <View className="fs-xs text-gray-2">{item.address}</View>
                    <View className="text-price mt-20 fs-md fw-7">{item.price}</View>
                  </View>
                </View>
              )
            })
          }
          <View className="load-more" style={{color: (this.state.loadMore == '查看更多') ? '#ff2959' : '#000'}} onClick={() => {this.loadMore()}}>{this.state.loadMore}</View>
        </View>
        <CopyRight />
      </View>
    )
  }
}
