// pages/decision/decision.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    prizes: [],
    buttons: [
      {radius: '30px', background: '#fff'},
      {radius: '20px', background: '#fff', pointer: true},
      {radius: '15px', background: '#f4f1e9'},
      {radius: '10px', background: '#fff'},
    ],
    result: '',
    option: {
      top: '35%',
      fontSize: '28rpx',
      background1: '#f4f1e9',
      background2: '#d7b9c1',
      background3: '#c4a7ae'
    },
    allPrizes: {
      title: '玩什么游戏',
      dataList: ["艾尔登法环", "只狼", "英雄联盟", "地平线5", "战地", "极品飞车"]
    }
  },
  start() {
    // 获取抽奖组件实例
    const child = this.selectComponent('#myLucky')
    // 调用play方法开始旋转
    child.lucky.play()
    const length = this.data.prizes.length
    var randomNum = Math.floor(Math.random() * length) + 1;
    // 用定时器模拟请求接口
    setTimeout(() => {
      // 调用stop方法然后缓慢停止
      child.lucky.stop(randomNum)
    }, 3000)
  },
  end(event) {
    const {text} = event.detail.fonts[0] || ''
    this.setData({
      result: text
    })
  },
  reset() {
    this.setData({
      result: ''
    })
  },
  setPrizes() {
    let data: any = wx.getStorageSync('allPrizes')
    if (!data) {
      data = this.data.allPrizes
      wx.setStorageSync('allPrizes', data)
    }
    const prizes: any = []
    let background = ''
    data.dataList.forEach((item, index) => {
      const propName = `background${(index % 3) + 1}`
      background = this.data.option[propName]
      prizes.push({
        fonts: [{text: item, top: this.data.option.top, fontSize: this.data.option.fontSize}],
        background
      })
    })
    this.setData({
      title: data.title,
      prizes
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setPrizes()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
