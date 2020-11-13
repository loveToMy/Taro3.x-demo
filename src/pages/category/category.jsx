import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import GoodsList from '../../components/GoodsList/GoodsList.jsx'
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import { shuffle } from '../../common/tools/tools.js'
import './category.scss'
import category from '../../common/mork/category.json'
const cities = ['全国','北京','成都','海口','青岛','日本','上海','深圳','天津'];
const classify = ["全部分类", "演唱会", "话剧舞台剧", "音乐会", "舞蹈芭蕾", "戏曲综艺", "体育赛事", "儿童亲子", "休闲娱乐"];
const showTime = ["全部时间", "今天", "明天", "本周内", "本周末", "下周", "本月"];

export default class Index extends Component {
state = {
  showMask: false,
  showClass: '',
  navList: ['全国','全部分类','全部时间'],
  navIndex: 0,
  navActive: false,
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
show(index) {
  this.setState({
    showMask: true,
    navIndex: index,
    navActive: true
  })
  setTimeout(() => {
    this.setState({
      showClass: 'show'
    })
  }, 50);
}
hideMask() {
  const newCategory = shuffle(this.state.categoryList)
  this.setState({
    showClass: '',
    navActive: false,
    categoryList: newCategory
  })
  setTimeout(() => {
    this.setState({
      showMask:false
    })
  }, 300);
}
switchHandle(city){
  const navList = [...this.state.navList]
  navList[this.state.navIndex] = city;
  this.setState({
    navList: navList
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
            this.state.navList.map((item,index) => {
              return (
                <View className="nav__list" key={index} onClick={() => this.show(index)}>
                  <Text>{item}</Text>
                  <Text 
                    className={['nav__icon',this.state.navIndex === index && this.state.navActive ? 'nav__icon__up' : ''].join(" ")}
                  ></Text>
                </View>
              )
            })
          }
        </View>
        <View className="pt-40 pr-40 pb-40 pl-40">
          {
            this.state.categoryList.map(item => <GoodsList key={item.id} content={item}  />)
          }
          <View className="load-more" style={{color: (this.state.loadMore == '查看更多') ? '#ff2959' : '#000'}} onClick={() => {this.loadMore()}}>{this.state.loadMore}</View>
        </View>
        {
          this.state.showMask && <View className={['mask',this.state.showClass].join(" ")} onClick={()=> this.hideMask()}>
              <View className={["type-tab",this.state.navIndex !== 2 ? 'pt-40 pr-60 pb-40 pl-60':'',this.state.showClass].join(" ")}>
                {
                  this.state.navIndex === 0 && 
                  cities.map((item,index) => 
                    <View 
                    onClick={() => this.switchHandle(item)} 
                    key={index} 
                    className={["type-list",this.state.navList[0] === item ? 'type-active' : ''].join(" ")} 
                    >
                      {item}
                    </View>
                  )
                }
                {
                  this.state.navIndex === 1 && 
                  classify.map((item,index) => 
                    <View 
                    onClick={() => this.switchHandle(item)} 
                    key={index} 
                    className={["type-list",this.state.navList[1] === item ? 'type-active' : ''].join(" ")} 
                    >
                      {item}
                    </View>
                  )
                }
                {
                  this.state.navIndex === 2 && 
                  showTime.map((item,index) => 
                    <View 
                    onClick={() => this.switchHandle(item)} 
                    key={index} 
                    className={["type-list",this.state.navList[2] === item ? 'type-active' : ''].join(" ")} 
                    >
                      {item}
                    </View>
                  )
                }
            </View>
          </View>
        }
        <CopyRight />
      </View>
    )
  }
}
