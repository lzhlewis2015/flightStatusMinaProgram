// pages/FlightStatus/flightStatusDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedIndex: 2,

    dateStrings: [
      'Today (10 Nov)',
      'Wednesday (11 Nov)',
      'Thursday (12 Nov)',
      'Friday (13 Nov)',
      'Saturday (14 Nov)'
    ]
  },

  selectDate: function (e) {
    var that = this;
    that.setData({
      selectedIndex: e.currentTarget.dataset.index
    })
    console.log('选中的index = ' + this.data.selectedIndex);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})