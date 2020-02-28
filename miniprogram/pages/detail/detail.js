// pages/detail/detail.js
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
  //  console.log(options);
  var type=options.type;
  var id=options.id;
  
  that.setData({
    id:id
  });
    network.getItemDetail({
      id:id,
      success:function(item){
        // console.log(item);
        // var genres=item.genres;
        // genres=genres.join("/");
        // item.genres=genres;
        var actors = item.casts;
        var actorNames=[];
        // if(actors.length>3){
        //   actors=actors.slice(0,3);
        // }
        for(var index=0;index<actors.length;index++){
          var actor = actors[index];
          actorNames.push(actor.name);
        }
        actorNames = actorNames.join("/");
        var director=item.directors[0].name;
        var authors = director + "(导演)/" + actorNames;
        item.authors=authors;
        that.setData({
          item:item
        });
      }
    });
    // 获取评论
    network.getItemComments({
      id:id,
      success:function(data){
        // console.log(data);
        var totalComment=data.total;
        var comments=data.comments;
        that.setData({
          totalComment: totalComment,
          comments: comments
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
    // 在详情页查看更多评论后点返回后能到详情页的上边
    wx.pageScrollTo({
      scrollTop: 0,
    })
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