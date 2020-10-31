import React from 'react'
import { View } from '@tarojs/components'
import './index.scss'
export default function BottomBar() {
    return(
        <View className="buy-box">
            <View className="customer bg-icons2"></View>
            <View className="buy">立即购买</View>
        </View>
    )
}