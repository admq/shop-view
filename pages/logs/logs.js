//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    phoneNumber: '0731-88738273',
    logs: []
  },
  // 打电话
  phoneCall: function(e) {
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    })
  },
  // 地图
  openMap: function(e) {
    wx.openLocation({
      latitude: 39.908856,
      longitude: 116.397395
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
