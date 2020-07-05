// pages/mine/course/course.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList:[],
    isShowed:false
  },

  entercourseButton:function(e){
    wx.navigateTo({
      url: './quiz/quiz?courseid='+ e.currentTarget.dataset.courseid,
    })
  },


  onTabItemTap:function(){
    const that = this;
    if(app.gd.token!=null){
      that.setData({
        isShow:true
      })

      wx.request({
        url: app.gd.host + "/course/getEnrolled",
        data: {
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
          if(res.data.data.length == 0){
            wx.showToast({
              title: '您还没有课程！',
              duration:3000
            })
          }
          that.setData({
            isShow:true,
            courseList:res.data.data
          })
          console.log(res.data.data);
        }
      })
    }else{
      that.setData({
        isShow:false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  gotoPage2: function() {
    wx.navigateTo({
      url: './add/add',
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