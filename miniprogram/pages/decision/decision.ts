// pages/decision/decision.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    prizes: [
      {fonts: [{text: '0', top: '30%'}], background: '#f4f1e9'},
      {fonts: [{text: '1', top: '30%'}], background: '#d7b9c1'},
      {fonts: [{text: '2', top: '30%'}], background: '#f4f1e9'},
      {fonts: [{text: '3', top: '30%'}], background: '#d7b9c1'},
      {fonts: [{text: '4', top: '30%'}], background: '#f4f1e9'},
      {fonts: [{text: '5', top: '30%'}], background: '#d7b9c1'},
    ],
    buttons: [
      {radius: '30px', background: '#fff'},
      {radius: '20px', background: '#fff', pointer: true},
      {radius: '15px', background: '#f4f1e9'},
      {radius: '10px', background: '#fff'},
    ],
    result:''
  },
  start() {
    // 获取抽奖组件实例
    const child = this.selectComponent('#myLucky')
    // 调用play方法开始旋转
    child.lucky.play()
    // 用定时器模拟请求接口
    setTimeout(() => {
      // 3s 后得到中奖索引 (假设抽到第0个奖品)
      const index = 0
      // 调用stop方法然后缓慢停止
      child.lucky.stop(index)
    }, 3000)
  },
  end(event) {
    const {text} = event.detail.fonts[0] || ''
    this.setData({
      result:text
    })
  },
  reset(){
    this.setData({
      result:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
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
