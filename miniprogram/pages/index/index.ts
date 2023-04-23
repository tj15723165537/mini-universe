// pages/index/index.ts
import {getSaying} from "../../api/common/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    saying: "",
    items: [
      { name: "每日一笑", url: "/pages/joke/joke" },
      { name: "做个决定" , url: "/pages/decision/decision"},
      { name: "chatGPT" , url: "/pages/chat/chat"},
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
});
