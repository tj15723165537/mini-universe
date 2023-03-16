import {getJoke} from "../../api/common/index";
// 获取应用实例
const app = getApp<IAppOption>()
Page({
    data: {
        text: ''
    },
    onLoad() {
        // @ts-ignore
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        this.getJokeList()
    },
    getJokeList(){
        getJoke().then(res => {
            this.setData({
                text: res.data
            })
        })
    },
    getUserProfile() {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                app.globalData.userInfo = res.userInfo
                app.globalData.hasLogin = true
            }
        })
    },
})
