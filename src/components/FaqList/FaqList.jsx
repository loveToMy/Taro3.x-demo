import React from 'react'
import { View,Image } from '@tarojs/components'
import './index.scss'

export default function FaqList (props) {
    const { index,content } = props;
    const order = index < 10 ? '0' + index : index
    return(
        <View className="faq-list">
            <View className="faq-index">{order}</View>
            <View className="faq-question">
                <Image className="faq-icon" src="https://m2static.228.cn/images/pic_Q.png" />
                <View>{content.question}</View>
            </View>
            <View className="faq-answer">
                <Image className="faq-icon" src="https://m2static.228.cn/images/pic_A.png" />
                <View>{content.answer}</View>
            </View>
        </View>
    )
}
