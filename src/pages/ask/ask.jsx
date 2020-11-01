import React,{ Component,useRef,useState,useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Textarea } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './ask.scss'

export default function Ask(){
    const [login,setLogin] = useState(false);
    const inputValue = useRef(null)
    useEffect(() => {
        try {
            //获取本地存储信息
            const useStatus = Taro.getStorageSync('useStatus')
            setLogin(Boolean(useStatus))
        } catch (error) {
            console.log(error)
        }
    })
    function concel() {
        Taro.navigateBack()
    }
    const submit = () =>{
        // 去除输入框的值
        const val = inputValue.current.value
    }
    return(
        <View className="page">
            <AtNavBar
                onClickLeftIcon={concel}
                leftIconType="chevron-left"
                color="#fd345d"
                title="在线问答"
                border={false}
            />
            <View className="ml-40 mt-40 mr-40 mb-40">
                <View className="ask-head">
                    <Text className="bg-icons2 ask-icon"></Text>
                    <Text className="text-price fs-md">我要提问</Text>
                </View>
                <View className="textarea-box mt-40 ml-20 mr-20">
                    <Textarea ref={inputValue} className="ask-textarea" />
                </View>
                <View className="ask-btn" onClick={submit}>
                    {login ? '提问' : '登录并提问'}
                </View>
            </View>
        </View>
    )
}