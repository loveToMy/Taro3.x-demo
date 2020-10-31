import React ,{Component} from 'react';
import { Swiper,SwiperItem,Image } from '@tarojs/components'


export default function IndexSwiper(props){
    return(
        <Swiper
            indicatorColor='#999'
            indicatorActiveColor='#ff2959'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
                <Image onClick={() => props.handle()} style="width:100%;" mode="widthFix" src="https://static.228.cn/upload/2020/09/25/1601013189734_e1y4.jpg" />
            </SwiperItem>
            <SwiperItem>
                <Image onClick={() => props.handle()} style="width:100%;" mode="widthFix" src="https://static.228.cn/upload/2020/09/25/1601014680338_y7a5.jpg" />
            </SwiperItem>
        </Swiper>
    )
}