import React,{ Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Map,Marker } from 'react-amap'
import { AtNavBar } from 'taro-ui'
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
import GoodsList from '../../components/GoodsList/GoodsList.jsx'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './venueDetails.scss'
import category from '../../common/mork/category.json'
import { shuffle } from '../../common/tools/tools.js'

//此key为react-amap官方示例key
const amapkey = '788e08def03f95c670944fe2c78fa76f';
const navTitle = ['全部演出','即将开始','历史演出'];
const recommend = [
        "海南省歌舞剧院演出信息", 
        "海口人民大会堂演出信息",
        "五源河片区-文体中心一期停车场广场演出信息", 
        "海口体育馆演出信息", 
        "海南国际会展中心演出信息", 
        "海南省高级体校体育场演出信息", 
        "文昌排球馆演出信息", 
        "海南省海口市美源海口湾演出信息", 
        "东方环球大剧院演出信息", 
        "雅居乐海上艺术中心演出信息"
    ]



export default class VenueDetails extends Component{
    state={
        categoryList: category,
        navIndex: 0
    }
    
    concel() {
        Taro.navigateBack()
    }
    toggleNav(index){
        const newCategory = shuffle(this.state.categoryList)
        this.setState({
            categoryList: newCategory,
            navIndex: index
        })
    }
    render() {
        const {categoryList,navIndex } = this.state
        return(
            <View className="page">
                <AtNavBar
                    onClickLeftIcon={this.concel}
                    leftIconType="chevron-left"
                    color="#fd345d"
                    title="场馆详情"
                    border={false}
                />
                <View className="map-wrap">
                    <Map 
                        amapkey={amapkey}
                        zoom="14"
                    >
                        <Marker />
                    </Map>
                </View>
                <View className="venue-content">
                    <View className="pt-40 fs-l" style="text-align:center;">海南省歌舞剧院</View>
                    <View className="venue-text">海南省歌舞剧院位于海口市国兴大道68号（海南省委斜对面），是海南省政府投资兴建的大型公共文化设施，是海南省专业艺术生产、交流、演出基地和面向大众开放的艺术活动、学习、辅导中心。海南省歌舞剧院主体建筑总面积约25000平方米，其中剧场（含舞台）2657平方米，主体建筑内容包括可容纳1230座的大型剧场以及建筑面积达8253平方米的配套辅助用房。剧场内声学环境和舞台机械、灯光、音响等硬件配置达到国内同...</View>
                    <View className="venue-text">地址：国兴大道海南文化公园</View>
                </View>
                <View className="venue-show">
                    <View className="venue-nav mb-40">
                        {
                            navTitle.map((item,index) => {
                                return(
                                    <View 
                                        key={index}
                                        className={["nav-color",navIndex === index ? "nav-color-active": ''].join("")}
                                        onClick={()=>this.toggleNav(index)}
                                    >
                                        {item}
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View className="pl-40 pt-40 pb-40 pr-40">
                        {
                            this.state.categoryList.map(item => <GoodsList key={item.id} content={item}  />)
                        }
                    </View>
                    <View className="ml-40 fs-xl fw-7">
                        推荐场馆
                    </View>
                    <View className="mb-20 ml-40 mr-40">
                        {
                            recommend.map((item,index) => 
                                <View 
                                    key={index}
                                    className="recommend-info"
                                >
                                    {item}
                                </View>
                            )
                        }
                    </View>
                </View>
                <CopyRight />
            </View>
        )
    }
}