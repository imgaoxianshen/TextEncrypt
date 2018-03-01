function http(url, callBack,data){
  wx.request({
    url: url,
    method:'GET',
    data:data,
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      callBack(res.data);
    }
  })
}



module.exports = {
  http: http
}
