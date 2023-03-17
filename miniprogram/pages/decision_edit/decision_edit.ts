// pages/decision_edit/decision_edit.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    options: []
  },
  addOption() {
    const options: any = this.data.options
    options.push('')
    this.setData({
      options
    })
  },
  save() {
    console.log(this.data.options)
    wx.setStorageSync('allPrizes', {title: this.data.title, dataList: this.data.options})
    wx.navigateTo({
      url:'/pages/decision/decision'
    })
  },
  changeOption(e) {
    const {index} = e.target.dataset
    const options: any = this.data.options
    options[index] = e.detail
    this.setData({
      options
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const data = wx.getStorageSync('allPrizes')
    if (data) {
      this.setData({
        title: data.title,
        options: data.dataList
      })
    }
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
