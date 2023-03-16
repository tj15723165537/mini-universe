// components/tabbar/tabbar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    newmessage: {
      type: String,
      value: 'false'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentPage: '',
    isDynamic: false,
    bottomLift: app.globalData.bottomLift,
    tabbar: [{
        link: "/pages/index/index",
        name: '首页',
        imgSrc: '/static/tabbar/t1.png',
        imgSrc_active: "/static/tabbar/t11.png",
        baseColor:'#A2A2A2',
        active_baseColor:'#F6352E',
      },
      {
        link: "/pages/dynamic/dynamic",
        name: '广场',
        imgSrc: '/static/tabbar/t3.png',
        imgSrc_active: "/static/tabbar/t33.png",
        baseColor:'#A2A2A2',
        active_baseColor:'#F6352E',
      },
      {
        link: "/pages/message/message",
        name: '消息',
        imgSrc: '/static/tabbar/t4.png',
        imgSrc_active: "/static/tabbar/t44.png",
        baseColor:'#A2A2A2',
        active_baseColor:'#F6352E',
      },
      {
        link: "/pages/my/my",
        name: '我的',
        imgSrc: '/static/tabbar/t5.png',
        imgSrc_active: "/static/tabbar/t55.png",
        baseColor:'#A2A2A2',
        active_baseColor:'#F6352E',
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show_dynamic(e) {
      this.setData({
        isDynamic: true
      })
    },
    onClosepopup() {
      this.setData({
        isDynamic: false
      })
    },
    handlerSelectImg(e) {
      var sourceType = e.currentTarget.dataset.index;
      this.setData({
        isDynamic: false
      })
      var _this = this;
      wx.chooseMedia({
        count: 3,
        mediaType: ['image', 'video'],
        maxDuration: 60,
        sourceType: [sourceType],
        sizeType: 'original',
        success(res) {
          var tempFiles = res.tempFiles;
          var flag = false
          tempFiles.forEach(item => {
            item.fileType = res.type;
            if (item.duration > 60) {
              flag = true
            }
          })
          if (flag) {
            app.showModal('选择的视频长度不能超过60秒')
            return false
          }
          app.globalData.publish_file = tempFiles;
          wx.navigateTo({
            url: "/pagesA/find-my/publish/publish"
          })
        },
        fail(res) {
          if (res.errMsg.indexOf('fail cancel') != -1) { //用户取消

          } else {
            app.showModal('打开相机失败')
          }
        }
      })
    },
  },

  attached() {
    var pages = getCurrentPages()
    var currentPage = pages[pages.length - 1] && pages[pages.length - 1].route;

    if (currentPage[0] != "/") {
      currentPage = "/" + currentPage;
    }
    this.setData({
      currentPage: currentPage
    })
  },
})