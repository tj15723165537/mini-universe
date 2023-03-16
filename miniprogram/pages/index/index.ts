// pages/index/index.ts
import { getSaying } from "../../api/common/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    saying: "",
    items: [
      { name: "每日一笑", url: "/pages/joke/joke" },
      { name: "做个决定" },
      { name: "纪念日" },
    ],
  },
  getSayingList() {
    getSaying().then((res) => {
      this.setData({
        saying: res.data,
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSayingList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
