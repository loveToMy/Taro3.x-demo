import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import FaqList from '../../components/FaqList/FaqList.jsx'
import CopyRight from '../../components/CopyRight/CopyRight.jsx'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
const faqList = [
    {
        question: '购买成功了就一定有票吗？我的座位如何安排 ？',
        answer: '选座订单按照订单位置进行出票，不能选座的商品按照订单支付顺序依次出票。因票品联网销售，如您未通过“选座购买”进行购买的票品，后期可能因票品数量不足无法配票成功，如最终未能配票永乐将为您办理全额退款，但不承担其他损失。'
    },
    {
        question: '请问购买“票享无忧退票保险”后，不能够观看演出了，如何理赔退款呢？',
        answer: '请参考网页对于“票享无忧退票保险”的相关介绍，网址为：http://www.228.com.cn/help/pswy.html或致电华泰保险全国24小时客服电话400-609-5509进行咨询。'
    },
    {
        question: '请问我购买的票是不是挨在一起？',
        answer: '一笔订单同等价位默认都是连座出票的，后期有问题会及时联系您（如果该演出有套票区域，可能会出现同价位的套票和单价票不在同一区域，导致无法连座的情况，请您知晓）。'
    },
    {
        question: '请问订单发货成功后几天可以送达？',
        answer: '票品发货后，同城1-3天送达，异地2-7天送达，如遇到天气原因影响，送达时间会有所延迟，具体送达时间以快递为准。'
    },
    {
        question: '请问上门自取订单订购成功后什么时间可以上门自取呢？可以代取吗？',
        answer: '订购成功后订单显示“已发货”并收到取票码短信后您可携带收货本人的有效证件、订单号码或收货手机号、取票码到对应分公司前台进行取票（请您注意分公司营业时间）可以代取，代取需提供订单号或收货手机号、收货人身份证原件、代取人身份证原件及取票码。'
    },
    {
        question: '请问缺货登记之后，后期一定会有票吗？',
        answer: '登记之后如果有票联系您，无票不打扰哦！'
    },
    {
        question: '请问订单支付成功后几天可以配送到？',
        answer: '票品发货后，同城1-3天送达，异地2-7天送达，如遇到天气原因影响，送达时间会有所延迟，具体送达时间以快递为准。'
    }
]

export default function Answer(){
    const concel = () => {
        Taro.navigateBack()
    }
    return(
        <View className="page">
            <AtNavBar
                onClickLeftIcon={concel}
                leftIconType="chevron-left"
                color="#fd345d"
                title="FAQ"
                border={false}
            />
            <View>
                {
                    faqList.map((item,index) => <FaqList key={index} index={index + 1} content={item} />)
                }
            </View>
            <CopyRight />
        </View>
    )
}