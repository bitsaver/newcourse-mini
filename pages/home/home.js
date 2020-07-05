// pages/home/home.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain: app.gd.host,
    id: '',
    list: [],
    circular: true, //是否开启无限轮播,衔接
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动播放
    interval: 3000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    indicatorColor: "#eee", //普通轮播点背景色
    indicatorActiveColor: "#f10215", //选中轮播点背景色
    imgUrls: [{
      'img_path': '../../static/images/swiper3.jpg'
    },
    {
      'img_path': '../../static/images/swiper2.jpg'
    },
    {
      'img_path': '../../static/images/swiper1.jpg'
    },
    ],
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
        console.log(res.data);
        wx.showToast({
          title: res.data.msg,
          duration:2000
        });
        if(res.data.data.length==0){  
          wx.showToast({
            title: "没有找到课程！",
            duration:2000
          });
        }
        that.setData({
          courseList:res.data.data
        })
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