import React from 'react'
import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './index.scss';

export default function TipsCard (){
    return(
        <View className="tips-card">
            <View className="text-gray-2 fs-sm">
                <View>温馨提示：09.25上午11:18至10.08晚上23:59可享受9折优惠</View>
                <View>本演出09.25上午11:18开始预售</View>
            </View>
            <View className="see-more fs-xs">查看更多</View>
            <View className="address-info">
                <View className="fs-sm text-dark-gray mb-10 tips-item">
                    <Text className="bg-icons2 address"></Text>
                    <Text>2020.11.13</Text>
                </View>
                <View className="fs-sm text-dark-gray tips-item">
                    <Text className="bg-icons2 venue"></Text>
                    <Text>海南省歌舞剧院</Text>
                </View>
                <View className="bg-icons2 right-icon"></View>
            </View>
        </View>
    )
}