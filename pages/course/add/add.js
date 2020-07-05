//index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    brief:""
  },

  bindKeyInput(e){
    this.setData({
      name: e.detail.value
    })
  },

  bindKeyInput2(e){
    this.setData({
      brief: e.detail.value
    })
  },

  submint(){
    var that = this;		
    wx.request({
      method:'post',
      url: app.gd.host + "/course/add",
      data:{
        name:that.data.name,
        brief:that.data.brief,
        imgUrl:"../../static/icon/5e45094d08005d4703000170.jpg"
      },
      header: {
        'content-type': 'application/json', // 默认值,
        'token':app.gd.token
      },
      success(res) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration:3000
        })
        setTimeout(()=>{
          wx.navigateBack({
            delta: 1
          })
        },2000)
      }
    })
  },

  onTabItemTap: function(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})