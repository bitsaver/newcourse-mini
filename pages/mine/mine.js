// pages/mine/mine.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      hasLogined:false,
      id: '',
  },

  toMyInfo: function(){
    wx.showToast({
      title: '玩儿命开发中...',
      icon:'none'
    })
  },

  toLogin:function(){
    wx.navigateTo({
      url: '../login/login',
      events:{
        isLoginSuccess:function(data){
          that.setData({
            hasLogined:data
          });
        }
      }
    })
  },
 
  onTabItemTap: function(){
    const that = this;
    if(app.gd.token==null){
      this.toLogin();
      this.setData({
        hasLogined:true
      })
    }else{
      this.setData({
        hasLogined:true
      })
    }
  },

  logout:function(){
    app.gd.token=null;
    this.setData({
      hasLogined:false
    })
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