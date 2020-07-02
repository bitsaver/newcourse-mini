// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName:"",
    courseList:[]
  },

  enrollButton: function(e){
    e.currentTarget.dataset.courseid
    const that = this;
    wx.request({
      url: app.gd.host + "/courseUser/enroll",
      data: {
        courseId: e.currentTarget.dataset.courseid
      },
      header: {
        'content-type': 'application/json', // 默认值
        'Token':app.gd.token
        // 'content-type': 'application/x-www-form-urlencoded'
      },
      method:"POST",
      success(res) {
        wx.showToast({
          title: res.data.msg,
          icon:'none',
          duration:2000
        })
        console.log(res.data.data);
        console.log(e.currentTarget.dataset.courseid);
        
      }
    })
  },

  searchInput: function(e){
    this.data.courseName=e.detail.value;
  },
  
  searchButton: function(){
    const that = this;
    wx.request({
      url: app.gd.host + "/course/search",
      data: {
        name: that.data.courseName,
      },
      header: {
        'content-type': 'application/json' // 默认值
        // 'content-type': 'application/x-www-form-urlencoded'
      },
      method:"GET",
      success(res) {
        wx.showToast({
          title: res.data.msg,
          duration:2000
        })
        that.setData({
          courseList:res.data.data
        })
        console.log(res.data.data);
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