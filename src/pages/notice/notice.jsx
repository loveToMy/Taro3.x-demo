import React,{useState,useEffect} from 'react'
import Taro from '@tarojs/taro'
import { View,Text,ScrollView } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import CopyRight from '../../components/CopyRight/CopyRight'
import { shuffle } from '../../common/tools/tools.js'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './notice.scss'


const originalList = [
    {notice: "[永乐公告]2020年永乐票务春节期间购票及配送公告"},
    {notice: "[永乐公告]2019年永乐票务中秋期间购票及配送公告"},
    {notice: "[永乐公告]2019年永乐票务端午期间购票及配送公告"},
    {notice: "关于故宫博物院2019年春节开放时间的公告"},
    {notice: "[西安站公告]西安分公司票务前台时间调整公告"},
    {notice: "[永乐公告]2018年永乐票务春节期间购票及配送公告"},
    {notice: "[绍兴站公告]外婆家之夜摇滚群星演唱会岁月久【绍兴站】 取消公告"},
    {notice: "[北京站公告]北京分公司票务前台时间调整公告"},
    {notice: "[天津站公告]冲动—郝云全国巡回演唱会滨海站 延期公告"},
    {notice: "[深圳站公告]梦幻正义与荒唐 Joanna王若琳世界巡回演唱会—深圳站 取消公告"},
    {notice: "[深圳站公告]2016深圳泡泡电音节取消公告"},
    {notice: "[无锡站公告]K - Flag Music Festival 阔旗国际音乐节延期公告"},
    {notice: "[石家庄站公告]《天空之城—久石让、宫崎骏经典动漫作品视听音乐会》延期公告"},
    {notice: "[福州站公告]世界职业搏击黄金联赛《勇士的荣耀—崛起》年终总决赛 福州站取消公告"},
    {notice: "[杭州站公告]原著改编—玩库亲子芭蕾儿童剧《睡美人》取消公告"},
    {notice: "[南昌站公告]2016李荣浩「有 理想」世界巡回演唱会 南昌站延期公告"},
    {notice: "[福州站公告]英国海洋探险儿童剧《海底小纵队之火山大冒险》新延期公告"},
    {notice: "[宁波站公告]黑豹乐队巡回演唱会—宁波站延期公告"},
    {notice: "[福州站公告]英国海洋探险儿童剧《海底小纵队之火山大冒险》最新延期公告"},
    {notice: "[西安站公告]大型舞剧《红高粱》取消公告"},
];

const news = [
    {notice: "永乐文化集团文体旅产业融合助力青岛产业升级"},
    {notice: "创新发展 产业升级 永乐文化文体旅融合助力青岛文娱产业升级"},
    {notice: "2019科技创新与产业升级青岛峰会举办永乐文化参与市领导会见"},
    {notice: "关于故宫博物院2019年春节开放时间的公告"},
    {notice: "《中国新说唱》力挺明星制作人吴亦凡 呼吁大家暑期文明用网"},
    {notice: "光大信用卡购票福利活动·光大专区"},
    {notice: "2018年北京“文惠券”开始发放啦！"},
    {notice: "关注微信「武汉文惠通」，领文化消费补贴"},
    {notice: "永乐微信小程序：免费领豪礼，购票五折起！"},
    {notice: "兴业银行信用卡：购票满100减50（限四川省内）"},
    {notice: "2018赛季北京中赫国安电子年卡申购第四轮抽奖名单公式"},
    {notice: "2018赛季北京中赫国安主场赛事票务公告"},
    {notice: "中国儿童剧场"},
    {notice: "盘点德云社里那些来自东北的相声演员"},
    {notice: "2019中超赛场这六位大牌后腰你更看好谁？"},
    {notice: "2019赛季北京中赫国安年票开奖公告①"},
    {notice: "2019赛季北京中赫国安主场赛事票务公告"},
    {notice: "光大满300减150活动"},
    {notice: "爱豆来乐丨杨业明：运动技能满分的单眼皮型男，新剧《胭脂债》即将霸屏"},
    {notice: "爱豆来乐丨陈梓童：从《好声音》到《中国新说唱》，这个从争议中走来的女生，skr"},
]

const categorise = [
    {notice: "全部"},
    {notice: "娱乐资讯"},
    {notice: "戏剧资讯"},
    {notice: "古典资讯"},
    {notice: "曲苑杂谈"},
    {notice: "亲子广播"},
    {notice: "体坛风云"},
    {notice: "电影频道"},
    {notice: "现场报道"},
    {notice: "热点话题"}
]



export default function Notice() {
    const [current,setCurrent] = useState(0);
    const [categrayActive,setCategrayActive] = useState(0);
    const [navIndex,setNavIndex] = useState(0);
    const [scrollIntoView,setscrollIntoView] = useState('')
    const [noticeList,setNoticeList] = useState(originalList);
    const [newsList,setNewsList] = useState(news);
    const navList = ['网站公告','最新资讯'];
    const back = () =>{
        Taro.navigateBack()
    }
    const goIndex = () => {
        Taro.switchTab({
            url: '/pages/index/index'
        })
    }
    const seeMore = () => {
        if(current === 0){
            const shuffleNoticeList = shuffle(originalList)
            setNoticeList([...noticeList,...shuffleNoticeList])
        }else if(current === 1){
            const shuffleNewsList = shuffle(newsList)
            setNewsList([...newsList,...shuffleNewsList])
        }
    }
    const toggleCategray = (index) => {
        const shuffleNewsList = shuffle(newsList)
        setNewsList([...shuffleNewsList])
        setscrollIntoView('id' + index)
        setNavIndex(index)
        setCategrayActive(index)
    }
    return(
        <View className="page">
            <AtNavBar 
                title='网站公告'
                color="#fd345d"
                leftIconType="chevron-left"
                border={false}
                onClickLeftIcon={back}
            />
            <View className="notice-nav">
                {
                    navList.map((item,index) => 
                        <View key={index} className={`nav-item ${current == index ? 'nav-item-active' : ''}`} onClick={() => setCurrent(index)}>{item}</View>
                    )
                }
            </View>
            {
                current === 1 && 
                <ScrollView
                    className='scoll-nav'
                    scrollX
                    scrollWithAnimation
                    scrollIntoView={scrollIntoView}
                >
                    {
                        categorise.map((item,index) => {
                            return (
                                <View key={index} id={'id' + index} className="pl-40 pr-40" onClick={() => toggleCategray(index)}>
                                    <View className="nav-list">{item.notice}</View>
                                    {categrayActive === index && <View className="line-active"></View>}
                                </View>
                            )
                        })
                    }
                </ScrollView>
            }
            <View>
                <View className="ml-60 mt-30 mr-30 mb-30">
                    {
                        current == 0 && noticeList.map((item,index) =>
                            <View key={index} className="notice-content-list taro-ellipsis">{item.notice}</View>
                        )
                    }
                    {
                        current == 1 && newsList.map((item,index) =>
                            <View key={index} className="notice-content-list taro-ellipsis">{item.notice}</View>
                        )
                    }
                </View>
                <View className="see-more mt-40 mb-40" onClick={seeMore}>查看更多</View>
            </View>
            <View className="fs-xs text-gray-2 ml-30 mr-30 mb-20">
                <Text onClick={goIndex}>网站首页{'> '}</Text>
                <Text>{navList[current]}</Text>
                {current === 1 && <Text>{'> ' + categorise[navIndex].notice}</Text>}
            </View>
            <CopyRight />
        </View>
    )
}