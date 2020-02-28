// pages/comment/comment.js
 import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    count:20,
    start:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var that=this;
    that.setData(options);
    that.getComments(1);
  },
  getComments:function(start){
    var that=this;
    var id=that.data.id;
    if(start>that.data.start){
      that.setData({
        nextLoading:true
      });
    }else{
      that.setData({
        preLoading: true
      });
    }
    network.getItemComments({
      id:id,
      count: 20,
      start: start,
      success: function (data) {
        // console.log(data);
        var total = data.total;
        var comments = data.comments;
        that.setData({
          total: total,
          comments: comments,
          start:start,
          preLoading: false,
          nextLoading: false
        });
        wx.pageScrollTo({
          scrollTop: (0),
        })
      }
    })
  },
//  返回
  onItemTapEvent:function(event){
    wx.navigateBack({
      
    })
  },
  onPrePageTap:function(event){
    var that = this;
    var oldstart = that.data.start;
    if (oldstart-that.data.count>0){
      var start=oldstart-that.data.count;
      that.getComments(start);
    }
  },
  onNextPageTap:function(event){
    var that=this;
    var oldstart=that.data.start;
    var start=oldstart+that.data.count;
    that.getComments(start);
  }
})