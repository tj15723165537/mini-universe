import {getSaying} from "../../api/common/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    saying: "",
    items: [
      // { name: "百晓通" , url: "/pages/chat/chat"},
      { name: "做个决定" , url: "/pages/decision/decision"},
      { name: "搞笑语录", url: "/pages/joke/joke" },
      { name: "神回复" , url: "/pages/reply/reply"},
      { name: "网易云热评" , url: "/pages/hot-review/hot-review"},
      { name: "手机估价"},
      { name: "QQ估价"},
      { name: "谜语大全"},
      { name: "身份证校验"},
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
