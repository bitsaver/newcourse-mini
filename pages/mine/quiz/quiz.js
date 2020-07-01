// pages/mine/quiz/quiz.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quizList:[]
  },


  openQuiz:function(e){
    console.log(e.currentTarget.dataset.quizid)
    wx.navigateTo({
      url: '../question/question?quizid='+e.currentTarget.dataset.quizid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.quizid);
    const that = this;
    wx.request({
      url: app.gd.host + "/quiz/list",
      data: {
        courseId:options.courseid
      },
      header: {
        'content-type': 'application/json', // 默认值
        'Token':app.gd.token
        // 'content-type': 'application/x-www-form-urlencoded'
      },
      method:"GET",
      success(res) {
        wx.showToast({
          title: res.data.msg,
          duration:2000
        })
        that.setData({
          quizList:res.data.data
        })
        console.log(res.data.data);
      }
    })
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