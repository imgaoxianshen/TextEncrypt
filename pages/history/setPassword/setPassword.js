// pages/history/setPassword/setPassword.js
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

  onReseatTap:function(event){
    wx.navigateTo({
      url: '../resetPassword/resetPassword',
    })
  },
})