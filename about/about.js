
Page({
  data:{
    name:'codewhy',
    age:17,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'jame',age:12},
      {id:112,name:'mike',age:25},
      {id:113,name:'rose',age:21}
    ],
    counter:0
  },
  handleBtnClick(){
    // 1.该做法界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 2.this.setData
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})
// 编程范式：
// 1.命令式编程：原生操作DOM
// 2.声明式编程:Vue / React / Angular