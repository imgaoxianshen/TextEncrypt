// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onSecretTap:function(){
    wx.navigateTo({
      url: 'setPassword/setPassword',
    })
  },
})