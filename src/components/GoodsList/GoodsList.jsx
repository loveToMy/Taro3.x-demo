import React from 'react'
import Taro from '@tarojs/taro'
import { View,Image } from '@tarojs/components'
import './index.scss'

export default function GoodsList (props) {
    const { content } = props;
    const jumpDetails = () => {
        console.log(1)
        Taro.navigateTo({
          url: '/pages/details/details'
        })
      }
    return(
        <View className="goods-box mb-30 pb-30" onClick={jumpDetails}>
            <View className="goods-box__left">
            <Image className="goods-image" src={content.img}/>
            <View className="ticket fs-xs fw-7">售票中</View>
            </View>
            <View className="goods-box__right ml-30">
            <View className="fw-7" style="line-height: 20px">{content.title}</View>
            <View className="mt-20 text-gray-2 fs-xs">{content.date}</View>
            <View className="fs-xs text-gray-2">{content.address}</View>
            <View className="text-price mt-20 fs-md fw-7">{content.price}</View>
            </View>
        </View>
    )
}