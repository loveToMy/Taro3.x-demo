import React from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import './index.scss';

export default function AnswerList(props) {
    return (
        <View className="answer">
            <Text className="answer-text fw-7 fs-l">{props.title}</Text>
            <Text className="bg-icons2 right-icons"></Text>
        </View>
    )
}