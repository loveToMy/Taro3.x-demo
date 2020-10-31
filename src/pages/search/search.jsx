import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View,Input,Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
import './search.scss'

// export default class Index extends Component {

//   cancel () {
//     Taro.switchTab({
//       url: '/pages/index/index'
//     })
//   }

// render () {
//     return (
//     <View className="page">
//       <View style="flex:1">
//         <AtNavBar
//           onClickLeftIcon={this.handleClick}
//           leftIconType="chevron-left"
//           border={false}
//           color="#fd345d"
//           title='搜索'
//         />
//       </View>
//       <View className="search pl-40 pr-40 mt-20">
//         <View className="search__box">
//           <Text className="search__icon"></Text>
//           <Input className="search__input" type="text" focus />
//         </View>
//         <View className="search__cancel" onClick={() => this.cancel()}>
//           <Text className="text-gray-3">取消</Text>
//         </View>
//       </View>
//       <View style='position:fixed;bottom:50px;width:100%'>
//         <CopyRight />
//       </View>
//     </View>
//     )
//   }
// }
export default function Index() {
  const [searchText,setSearchText] = useState('')
  const cancel = () => {
    if(searchText !== ''){
      setSearchText('')
    }else{
      Taro.switchTab({
        url: '/pages/index/index'
      })
    }
  }
  const confirm = (e) => {
    setSearchText(e.detail.value);
  }
  return (
    <View className="page">
      <View style="flex:1">
        <AtNavBar
          onClickLeftIcon={cancel}
          leftIconType="chevron-left"
          border={false}
          color="#fd345d"
          title='搜索'
        />
      </View>
      <View className="search pl-40 pr-40 mt-20">
        <View className="search__box">
          <Text className="search__icon"></Text>
          <Input className="search__input" type="text" focus confirmType="search" value={searchText} onConfirm={confirm} />
        </View>
        <View className="search__cancel" onClick={cancel}>
          <Text className="text-gray-3">取消</Text>
        </View>
      </View>
      <View style='position:fixed;bottom:50px;width:100%'>
        <CopyRight />
      </View>
    </View>
  )
}
