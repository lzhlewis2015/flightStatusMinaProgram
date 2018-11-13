// pages/myDisplay/myDisplay.js

const code = `// 云函数入口函数
exports.main = (event, context) => {
  console.log(event)
  console.log(context)
  return {
    sum: event.a + event.b
  }
}`

Page({

  data: {
    result: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
    bannerImgUrls: [
      '../../images/logo.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541010848765&di=dc950ff5bae6bba5b1b2fc647eae2bc9&imgtype=0&src=http%3A%2F%2Fimg.km1818.com%2Fproduct%2Fupload%2Fproduct%2F48880%2F52375%2F20151022174841243710_52375_1.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541010848764&di=9ad4be28a85df56e57422f9b4d1435d3&imgtype=0&src=http%3A%2F%2Fwww.62a.net%2Ftbimg%2Fimg%2Ftfscom%2Fi4%2F864720935%2FTB2bTyTnFXXXXcUXpXXXXXXXXXX_%2521%2521864720935.jpg'
    ],

    descImgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541010848764&di=1936836f2e1f8ee8271dbf127da18b58&imgtype=0&src=http%3A%2F%2Fjf.10086.cn%2Fpic%2Frich%2F20150811%2F1439290127348.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541010848764&di=55940f8b407e4a7bed18a6a8f90f1070&imgtype=0&src=http%3A%2F%2Fimg006.hc360.cn%2Fhb%2FMTQ2OTQyMDQyMTU3MC0xODAxOTI3NjAx.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541010848762&di=0d76279db53f3a5bdf9a0483dd97bbe1&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2FTB-2960335761.gif%253f%2FTB2ThAgirYI8KJjy0FaXXbAiVXa_%2521%25213528710950.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  onLoad: function (options) {

  },

  copyCode: function () {
    wx.setClipboardData({
      data: code,
      success: function () {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },

  showProductDetail() {
    this.setData({
      result: '这是商品介绍啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
    })
  },

  showParmasToast() {
      wx.showToast({
          title: '请选择商品参数',
      })
  },

  addToShop() {
    wx.showToast({
      title: '加入购物车成功',
    })
  },

  buyNow() {
    wx.showToast({
      title: '购买成功',
    })
  },
  
})

