import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

export default function NavBar() {
    const back = () => {
        Taro.navigateBack()
    }
    return (
        <View className="details-head">
            <View className="head-bg">
            <View className="bgImg">
                <View className="bgImg__bg"></View>
                <View className="bgImg__mask"></View>
            </View>
            </View>
            <View className="head-icon">
            <View className="goback bg-icons" onClick={back}></View>
            <View className="right-icon">
                <Text className="love bg-icons"></Text>
                <Text className="share bg-icons"></Text>
            </View>
            </View>
            <View className="head-content"> 
            <View className="content-left">
                <Image className="left-image" src="https://static.228.cn/upload/2020/09/23/AfterTreatment/1600850294191_p8t6-0.jpg"/>
                <View className="ticket fs-xs fw-7">售票中</View>
            </View>
            <View className="content-right">
                <View className="right-title">2020"国乐当潮-时空之夜"中西跨界经典室内视听音乐会</View>
                <View className="mt-20 right-show">
                <Text className="bg-icons seat mr-10"></Text>
                <Text className="fs-xs text-gray">实名观演</Text>
                </View>
                <View className="mt-50 fw-7">￥88 - ￥588</View>
            </View>
            </View>
        </View>
    )
}
