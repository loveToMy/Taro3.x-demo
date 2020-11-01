import React,{ Component } from 'react'
import Taro from '@tarojs/taro'
import { View,Map } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class VenueDetails extends Component{
    concel() {
        Taro.navigateBack()
    }
    render() {
        return(
            <View className="page">
                <AtNavBar
                    onClickLeftIcon={this.concel}
                    leftIconType="chevron-left"
                    color="#fd345d"
                    title="场馆详情"
                    border={false}
                />
                {/* h5端不支持 */}
                <Map />
            </View>
        )
    }
}