Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    options: []
  },
  addOption() {
    const options = this.data.options
    options.push('')
    this.setData({
      options
    })
  },
  save() {
    wx.setStorageSync('allPrizes', {title: this.data.title, dataList: this.data.options})
    wx.navigateTo({
      url:'/pages/decision/decision'
    })
  },
  changeOption(e) {
    const {index} = e.target.dataset
    const options= this.data.options
    options[index] = e.detail
    this.setData({
      options
    })
  },
  deleteOption(e){
    const {index} = e.target.dataset
    const options = this.data.options
    options.splice(index,1)
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
})
