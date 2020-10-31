import React,{useEffect} from 'react';
import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

import './city.scss';

const hotCitys = ['全国','北京','上海','广州','深圳','武汉','合肥','南京','西安'];
const fCitys = ['成都','海口','青岛','日本','天津']
export default function City() {

    const cancel = () =>{
        Taro.navigateBack()
    };
    const choice = (city) => {
        Taro.switchTab({
            url: '/pages/index/index'
        })
    }
    return(
        <View className="page">
            <AtNavBar
                onClickLeftIcon={cancel}
                leftIconType="chevron-left"
                border={false}
                color="#fd345d"
                title='选择演出城市'
            />
            <View className="position-city ml-40 mt-60 fs-sm">
                <Text className="text-gray-2">定位城市</Text>
                <Text className="text-price ml-20">邯郸</Text>
                <Text className="text-price ml-20">无演出</Text>
            </View>
            <View className="text-gray-2 fs-sm ml-40 mt-40">热门城市</View>
            <View className="ml-40 mt-20 mr-40 mb-20 hot-city">
                {
                    hotCitys.map((item,index) => <View onClick={() => choice(item)} key={index} className="hot-city-item">{item}</View>)
                }
            </View>
            <View className="text-gray-2 fs-sm ml-40 mt-40">更多城市</View>
            <View className="ml-40 mt-20 mr-40 mb-20 hot-city">
                {
                    fCitys.map((item,index) => <View onClick={() => choice(item)} key={index} className="hot-city-item">{item}</View>)
                }
            </View>
        </View>
    )
}