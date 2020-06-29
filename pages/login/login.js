// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false,
    id: '',
    password: '',
    idInput: false,
    passwordInput: false,
  },

  idinput: function (e) {
    this.data.id = e.detail.value;
  },
  passwordinput: function (e) {
    this.data.password = e.detail.value;
  },

  /**
   * 执行登录操作，登陆成功后将token保存到全局变量token中
   *  
   */
  formSubmit: function (e) {
    wx.request({
      url: app.gd.host + "/user/login",
      data: {
        id: this.data.id,
        password: this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:"POST",
      success(res) {
        app.gd.token = res.data.data;
        console.log(res.data);
      }
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