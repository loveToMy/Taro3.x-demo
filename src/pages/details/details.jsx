import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, RichText } from '@tarojs/components'
import NavBar from '../../components/NavBar/NavBar'
import TipsCard from '../../components/TipsCard/TipsCard'
import AnswerList from '../../components/AnswerList/AnswerList'
import CopyRight from '../../components/CopyRight/CopyRight'
import BottomBar from '../../components/BottomBar/BottomBar'
import showDetails from '../../common/rich-text/showDetails'
import './details.scss'

const care = `<div class="need-attention">
                    a)演出详情仅供参考，具体信息以现场为准；<br>
                    b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；<br>
                    c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。<br>
                    d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
                  </div>`;
const answerList = [
  {id:1,text:'FAQ',page:'/pages/answer/answer'},
  {id:2,text:'在线问答',page:'/pages/ask/ask'}
]

export default function Details() {
  const [showMore,setShowMore] = useState(false);
  const goPage = (page) =>{
    Taro.navigateTo({
      url: page
    })
  }
  return(
    <View className="page details">
      {/* 页面头部 */}
      <View className="mb-40">
        <NavBar />
      </View>
      <View className="ml-40 mr-40 mb-30">
        <TipsCard />
      </View>
      <View className="fs-xl ml-40 mr-40 mb-30 fw-7">注意事项</View>
      <View className="ml-40 mr-40 text-gray-1">
        <RichText nodes={care} />
      </View>
      <View className="fs-xl ml-40 mr-20 mb-30 mt-30 fw-7">演出详情</View>
      <View className="ml-40 mr-40 text-gray-1 program-details" style={{height: showMore ? 'auto' : '65px'}}>
        <RichText nodes={showDetails} />
      </View>
      <View className="show-more mt-30 mb-40" onClick={() => setShowMore(!showMore)}>{showMore ? '收起' : '查看更多'}</View>
      {
        answerList.map(item => {
          return (
            <View key={item.id} className="mb-30 ml-40 mr-40" onClick={() => goPage(item.page)}>
              <AnswerList title={item.text} />
            </View>
          )
        })
      }
      <View className="ml-40 mr-40 fs-xs text-gray-3 taro-ellipsis">
        永乐票务{'>'} 音乐会{'>'} 海口音乐会{'>'} 2020"国乐当潮-时空之夜"中西跨界经典室内视听音乐会
      </View>
      <CopyRight />
      <View className="details-footer">
        <BottomBar />
      </View>
    </View>
  )
}
