// pages/index1/index1.js
 import {network} from "../../utils/network.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // 正在热映
    network.getMovieList({
      // 这儿的movies就传到了network.js中的params
      success:function(movies){
         that.setData({
           movies:movies
         })
      }
    });
    // top250
   network.getTopList({
     success:function(top){
       that.setData({
         top: top
       });
     }
   });
    // 北美
    network.getComList({
      success:function(coming){
        that.setData({
          coming: coming
        });
      }
    });

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