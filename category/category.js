// category/category.js
const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
const name = app.globalData.name
const age = app.globalData.age

// 注册一个页面 页面也有自己的声明周期
Page({
  // 2.--------初始化数据--------
  data: {
      message:'哈哈哈',
      list:[]
  },
  handleBtnClick(){
    // console.log('按钮发生了点击')
    this.setData({
      message:'呵呵呵'
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  /**
   * 生命周期函数1--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    // wx.request({
    //   url: 'url',
    //   success:(res)=>{
    //     console.log(res)
    //     const data = res.data.data.list
    //     this.setData({
    //       list:data
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数2--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },
  /**
   * 生命周期函数3--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },
  /**
   * 生命周期函数4--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },
  /**
   * 生命周期函数5--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  // --------3.监听wxml中相关的一些事件---------
  handleViewClick:function(){
    console.log('被点击了')
  },

  // 4.--------其他常见事件https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html-------
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  // 下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }
})