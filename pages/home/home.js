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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'token',
      success(res) {
        app.gd.token = res.data
        if (app.gd.token == null) {
          wx.navigateTo({
            url: '../login/login',
          })
        } else {
          console.log(11)
          that.getList()
        }
      }
    })
  },

  getList() {
    var that = this;
    wx.request({
      method: 'get',
      url: app.gd.host + "/course/getEnrolled",
      header: {
        'content-type': 'application/json', // 默认值,
        'token': app.gd.token
      },
      success(res) {
        if (res.data.code == 601) {
          wx.navigateTo({
            url: '../login/login',
          })
        } else if (res.data.code == 200) {
          that.setData({
            list: res.data.data
          })
        }
      }
    })
  },



  gotoPage1(event) {
    var data = JSON.stringify(event.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../mine/course/course?data=' + data,
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
    var that = this
    wx.getStorage({
      key: 'identity',
      success(res) {
        that.setData({
          id: res.data
        })
      }
    })
    if (app.gd.token == null) {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      that.getList()
    }

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