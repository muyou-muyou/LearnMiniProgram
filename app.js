// getApp()获取App()产生的实例对象
const app=getApp()

// 注册一个小程序示例
App({
  // https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html
  // 生命周期函数

  // 小程序初始化完成时会执行的声明周期函数
  onLaunch:function(){
    console.log('小程序初始化完成了：onLaunch')
    // wx.request({
    //   url: 'url',
    // })
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },
  // 小程序界面显示出来之后会执行的声明周期函数
  onShow:function(option){
    // console.log('界面显示出来：onShow')

    // 1.判断小程序的进入场景
    console.log(option)
    switch(option.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    // 2.获取用户信息并且传递给服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
  },
  // 界面被隐藏时会执行的声明周期函数
  onHide:function(){
    console.log('界面显示出来：onHide')
  },
  // 程序里面发生错误的时候会执行的声明周期函数
  onError:function(){
    console.log('小程序中发生一些错误时会执行：onError')
  },
  // 数据可以在其他页面共享 比如category.js页面
  globalData:{
    name:'codewhy',
    age:18
  }
})