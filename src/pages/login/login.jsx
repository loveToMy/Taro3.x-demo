import React,{useState,useEffect} from 'react'
import Taro from '@tarojs/taro'
import { View,Text,Input,Checkbox } from '@tarojs/components'
import './login.scss'

export default function Login () {
    const [clearUser,setClearUser] = useState(false);
    const [user,setUser] = useState('')
    const [pwd,setPwd] = useState('')
    const [code,setCode] = useState('')
    const [register,setRegister] = useState(false);
    const [showPwd,setShowPwd] = useState(true);
    const [random,setRandom] = useState()
    const backHome = () =>{
        Taro.switchTab({
            url: '/pages/index/index'
        })
    }
    useEffect(() => {
        setClearUser(user !== '')
    })
    const login = () => {
        const userInfo = Taro.getStorageSync('userInfo') || {};
        if(user === '' || pwd === ''){
            Taro.showToast({
                title: '请输入账号或密码',
                icon: 'none',
                duration: 2500
            })
            return;
        }
        if(register && code !== random){
            Taro.showToast({
                title: '验证码不匹配,请重新输入',
                icon: 'none'
            })
            return;
        }
        if(register){
            Taro.setStorageSync('userInfo',{user,pwd})
            Taro.switchTab({
                url: '/pages/index/index',
                success: () =>{
                    setUser("")
                    setPwd("")
                    setCode("")
                    setRegister(false)
                }
            })
            return;
        }
        if(userInfo && userInfo.user === user && userInfo.pwd === pwd){
            Taro.setStorageSync('userInfo',{user,pwd})
            Taro.switchTab({
                url: '/pages/index/index',
                success: () => {
                    setUser("")
                    setPwd("")
                    setCode("")
                    setRegister(false)
                }
            })
        }else{
            Taro.showToast({
                title: '账号或密码错误，请重新输入',
                icon: 'none'
            })
        }
    }
    const getCode = () =>{
        const random = Math.random().toString().slice(-6)
        Taro.showModal({
            title: '验证码提示',
            content: `您的验证码为${random},请尽快验证`
        })
        setRandom(random)
    }
    const goAgree = () => {
        Taro.navigateTo({
            url: '/pages/agree/agree'
        })
    }
    return (
        <View className="page login-bg">
            <View className="head ml-30 mr-30 mb-40">
                <View className="head-icon bg-icons mt-60" onClick={backHome}></View>
            </View>
            <View className="login">
                <View className="login__title text-white fs-xl fw-7 mb-60">会员登录</View>
                <View className="login__content">
                    <View className="label mb-40">
                        <View className="bg-icons login-user"></View>
                        <Input 
                            className="login-input" 
                            placeholder="手机号 / 邮箱地址" 
                            value={user} 
                            onInput={(e) => setUser(e.detail.value)} 
                        />
                        {
                            clearUser && <View className="bg-icons user-clear" onClick={() => setUser('')}></View>
                        }
                    </View>
                    <View className="label mb-40">
                        <View className="bg-icons login-pwd"></View>
                        <Input 
                            className="login-input" 
                            password={showPwd} 
                            value={pwd}
                            placeholder="请输入密码" 
                            onInput={(e) => setPwd(e.detail.value)} 
                        />
                        <View className="bg-icons pwd-show" onClick={() => setShowPwd(!showPwd)}></View>
                    </View>
                    {
                        register && 
                        <View className="label mb-40">
                            <View className="bg-icons login-pwd"></View>
                            <Input 
                                className="code-safe" 
                                placeholder="验证码" 
                                onInput={(e) => setCode(e.detail.value)}
                            />
                            <View className="get-code" onClick={getCode}>获取验证码</View>
                        </View>
                    }
                </View>
                {
                    !register && 
                    <View className="exempt ml-20 mr-20">
                        <View>
                            <Checkbox style='margin-right: 4px' />
                            两周内免登录
                        </View>
                        <View>忘记密码</View>
                    </View>
                }
                <View 
                    className={["login-btn mt-40",(user !== '' && pwd !== '' && (register ? code !== '' : true)) ? 'login-active' : ''].join(" ")}
                    onClick={login}
                >
                    {register ? '注册' : '登录'}
                </View>
                <View className="other-login">
                    <View className="bg-icons baidu"></View>
                    <View className="bg-icons xinlang"></View>
                    <View className="bg-icons qq"></View>
                </View>
                <View className="login-foot">
                    <View 
                        className="mb-80 register" 
                        onClick={() => setRegister(!register)}
                    >
                        {register ? '马上登录' : '马上注册'}
                    </View>
                    <View className="fs-xs agree">登录注册表示同意 <Text className="text-price" onClick={goAgree}>永乐票务用户服务协议</Text></View>
                </View>
            </View>
        </View>
    )
}