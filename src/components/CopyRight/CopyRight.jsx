import React from 'react';
import { View, Text,Image } from '@tarojs/components'
import './index.scss'
class CopyRight extends React.Component {
  render() {
    return (
      <View className="copyright fs-xs text-gray-3 pt-40 pb-40">
        <View className="mb-10">
          <Text className="ml-30 mr-30">最新资讯</Text>
          <Text className="ml-30 mr-30">合作招商</Text>
          <Text className="ml-30 mr-30">联系我们</Text>
        </View>
        <View className="mb-40">
          <Text>版权所有 © 2003-2020 永乐票务</Text>
        </View>
        <View className="mb-10">
          <Text className="ml-30 mr-30">营业执照</Text>
          <Text>|</Text>
          <Text className="ml-30 mr-30">京IC P证030942号</Text>
        </View>
        <View className="mb-10">
          <Text>京公网安备 11010102000758号</Text>
        </View>
        <View className="mb-10">
          <Text>网络文化经营许可证 京网文 [2019] 3189-307 号</Text>
        </View>
        <View>
          <Text className="ml-30 mr-30">增值电信经营许可证</Text>
          <Text>|</Text>
          <Text className="ml-30 mr-30">营业性演出许可证</Text>
        </View>
      </View>
    )
  }
}
export default CopyRight;
