var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    base_msg:"i like you 11 ",
    encode_msg:"23resefcasd3qe23resefcasd3qe23resefcasd3qe23resefcasd3qe"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.http('http://localhost/textencrypt/public/',this.test)
  },
  test:function(a){
    console.log(a);
  },

  // 复制到粘贴板
  onCopyTap:function(event){
  var that = this;
    console.log(1);k;mlkn 
    wx.setClipboardData({
      data: that.data.encode_msg,
      success:function(res){
        console.log("success")
      }
    })
  },

  //粘贴信息
  onPastTap:function(event){
    var that = this;
    wx.getClipboardData({
      success: function (res) {
        that.setData({
          content:res.data
        });
      }
    })
  }


})