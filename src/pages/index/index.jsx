import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input,Swiper,SwiperItem,Image } from '@tarojs/components'
import {ShowCard,VenueCard} from '../../components/ShowCard/ShowCard.jsx'
import IndexSwiper from '../../components/IndexSwiper/IndexSwiper.jsx'
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
import './index.scss'
import "taro-ui/dist/style/components/icon.scss";
// 模拟数据
import cardList from '../../common/mork/cardList.json'
import venueList from '../../common/mork/venueList.json'

export default class Index extends Component {
  componentDidMount() {
    // console.log(Temp)
  }
  state = {
    navList:[
      {
        text: '演唱会',
        iconPositon: 'background-position: 0 -693px;'
      },
      {
        text: '话剧舞台剧',
        iconPositon: 'background-position: 0 -738px;'
      },
      {
        text: '体育赛事',
        iconPositon: 'background-position: 0 -783px;'
      },
      {
        text: '儿童亲子',
        iconPositon: 'background-position: 0 -826.5px;'
      },
      {
        text: '全部分类',
        iconPositon: 'background-position: 0 -871px;'
      },
      {
        text: '活动',
        iconPositon: 'background-position: 0 -915.5px;'
      },
      {
        text: '永乐说',
        iconPositon: 'background-position: 0 -960px;'
      },
      {
        text: '我的',
        iconPositon: 'background-position: 0 -1005px;'
      }
    ],
    active: 'default'
  }
  toggle(title) {
    Taro.showLoading({
      title: '加载中',
    })
    this.setState({
      active: title
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 300)
  }
  jumpDetails(id) {
    Taro.navigateTo({
      url: '/pages/details/details'
    })
  }
  jumpCategory(text){
    Taro.switchTab({
      url: '/pages/category/category?text=' + text
    })
  }
  goCity(){
    Taro.navigateTo({
      url: '/pages/city/city'
    })
  }

render () {
    return (
    <View className="page">
      <View className="index-head">
        <View className="head-left text-white" onClick={this.goCity}>
          <Text>全国</Text>
          <View className='at-icon at-icon-chevron-down'></View>
        </View>
        <View className="search-box">
          <Input className="search-box__input" type='text' placeholder="搜索" />
        </View>
      </View>
      <IndexSwiper handle={this.jumpDetails} />
      <View className="nav-wrapper pt-50 pb-50 pr-40 pl-40">
        {this.state.navList.map((item,index) => {
          return(
            <View 
              className={["nav-list text-gray-1" ,index > 3 ? 'mt-50' : ''].join(" ")} 
              key={index}
              onClick={() => this.jumpCategory(item.text)}
            >
              <View className="bg-icon" style={item.iconPositon}></View>
              <Text>{item.text}</Text>
            </View>
          )
        })}
      </View>
      <View className="ml-40 mr-40 mb-30 pt-20 fw-7">
        <Text className={["mr-20 fs-xl",this.state.active !== 'default' ? 'text-gray-4' : ''].join(" ")} onClick={() => this.toggle('default')}>推荐</Text>
        <Text className={["mr-20 fs-xl",this.state.active !== 'venue' ? 'text-gray-4' : ''].join(" ")} onClick={() => this.toggle('venue')}>场馆</Text>
      </View>
      <View className="ml-40 mr-40 container">
        {
          this.state.active == 'default' 
          ? cardList.map(item => <ShowCard content={item} key={item.id} handle={this.jumpDetails} />) 
          : venueList.map(item => <VenueCard content={item} key={item.id} handle={this.jumpDetails} />)
        }
      </View>
      <CopyRight />
    </View>
    )
  }
}
