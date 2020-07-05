// pages/mine/addQuestion/addQuestion.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailDate:{},
    checkPaper:{},
    id:'',
    courseId:'',
    list:[],
    startDate:'',
    endDate:'',
    name:''
  },

  bindKeyInput(e) {
    this.setData({
      name:e.detail.value
    })
  },


  submint(){
    var that = this;		
    if(that.data.id){
      wx.request({
        method:'put',
        url: app.gd.host + "/quiz/edit",
        data:[
            {
                "quizId":27,
                "question": {
                    "content": "1+1=",
                    "score": 1,
                    "type": 1
                },
                "answerList": [
                    {
                        "answer":"第一空答案"
                    }
                ],
                "choiceList": [
                    {
                        "content": "1"
                    }
                ],
                "imgList": []
            }
        ],
        header: {
          'content-type': 'application/json', // 默认值,
          'token':app.gd.token
        },
        success(res) {
          wx.showToast({
            title: 'res.data.msg',
            icon: 'none',
            duration: 2000//持续的时间
          })
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },2000)
        }
      })
    }else{
      wx.request({
        method:'post',
        url: app.gd.host + "/quiz/add",
        data:{
          name:that.data.name,
          courseId:that.data.courseId,
          startTime:that.data.startDate,
          deadline:that.data.endDate
        },
        header: {
          'content-type': 'application/json', // 默认值,
          'token':app.gd.token
        },
        success(res) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000//持续的时间
          })
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },2000)
        }
      })
    }
  },

  bindDateChange(e){
    this.setData({
      startDate:e.detail.value + ' 00:00:00'
    })
  },
  bindDateChange2(e){
    this.setData({
      endDate:e.detail.value + ' 23:59:59'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var courseId = options.courseId
    var data = options.data
    console.log(data)
    if(courseId){
      this.setData({
        courseId:courseId,
      })
    }else{
      this.setData({
        courseId:JSON.parse(data).courseId,
        id:JSON.parse(data).id,
        name:JSON.parse(data).name,
        startDate:(JSON.parse(data).startTime).substr(0,10),
        endDate:(JSON.parse(data).deadline).substr(0,10),
      })
    }
    
    // this.getList()
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