//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    objectList: [{
      name: "一件很帅气的T恤",
      image: "/images/tshirt.jpg",
      price: 56.0
    }, {
      name: "拾壹物 带金属盖陶瓷茶叶...",
      image: "/images/good-1.jpeg",
      price: 512.0
    }, {
      name: "【楼上设计】万物生长三叶翡",
      image: "/images/good-2.jpeg",
      price: 1024.0
    }, {
      name: "【传家节年礼】花古古 莲子...",
      image: "/images/good-3.jpeg",
      price: 902.0
    }, {
      name: "铸铁主人杯",
      image: "/images/good-4.jpeg",
      price: 128.0
    }, {
      name: "小蓝边碗（2个装）景德镇",
      image: "/images/good-5.jpeg",
      price: 64.0
    }, {
      name: "口粮茶【归岭】正山小种红茶",
      image: "/images/good-6.jpeg",
      price: 99.0
    }],
    phoneNumber: '0731-88738273',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 打电话
  phoneCall: function(e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    })
  },
  openMap: function(e) {
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
