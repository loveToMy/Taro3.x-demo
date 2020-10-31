import React,{ Component } from 'react'
import { View, Text,Image } from '@tarojs/components'

class ShowCard extends Component {
  render(){
    const content = this.props.content;
    return (
      <View className="show-box mb-20" onClick={() => this.props.handle(this.props.content.id)}>
        <Image className="show-image" src={content.img} />
        <View className="fs-sm fw-7 title-ellipsis">{content.title}</View>
        <View className="fs-xs text-gray-2">{content.time}</View>
        <View className="fs-xs">
          <Text className="mr-10 text-price">{content.money}</Text>
          <Text className="text-gray-2">起</Text>
        </View>
      </View>
    )
  }
};
class VenueCard extends Component {
  render() {
    const content = this.props.content;
    return (
      <View className="venue-box mb-20" onClick={() => this.props.handle(this.props.content.id)}>
        <Image className="venue-image"  src={content.img} />
        <View className="fw-7 mt-10 fs-sm taro-ellipsis">{content.title}</View>
        <View className="fs-xs text-gray-2 taro-ellipsis">{content.address}</View>
      </View>
    )
  }
}
export {
  ShowCard,
  VenueCard
}
