// 网络请求
import { globalUrls } from "urls.js";

const network = {
  getMovieList: function (params) {

    params.type ="movie";
    this.getItemList(params);
    // var count=params.count?params.count:7;
    // wx.request({
    //   url: globalUrls.movieList,
    //   data: {
    //     count: count
    //   },
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     // console.log(res);
    //     var movies = res.data.subjects;
    //     // console.log(movies);
    //     if (params && params.success) {
    //       params.success(movies);
    //     }
    //   }
    // });
  },
  getTopList: function (params) {
    params.type ="top";
    this.getItemList(params);
    // wx.request({
    //   url: globalUrls.topList,
    //   data: {
    //     count: 7
    //   },
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     // console.log(res);
    //     var top = res.data.subjects;
    //     // console.log(top);
    //     if (params && params.success) {
    //       params.success(top);
    //     }
    //   }
    // });
  },
  getComList: function (params) {
    
    params.type="coming";
    this.getItemList(params);
    // wx.request({
    //   url: globalUrls.comList,
    //   header: {
    //     'Content-Type': 'json'
    //   },
    //   success: function (res) {
    //     // console.log(res);
    //     var coming = res.data.subjects;
    //     // console.log(ameria);
    //     if (params && params.success) {
    //       params.success(coming);
    //     }
    //   }
    // });
  },
  getItemList:function(params){
    var url="";
    if(params.type==="movie"){
      url = globalUrls.movieList;
    }else if(params.type==="top"){
      url = globalUrls.topList;
    }else{
      url = globalUrls.comList;
    }
    var count=params.count?params.count:7;
    wx.request({
      url:url,
      data:{
        count:count
      },
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        // console.log(res);
        var items= res.data.subjects;
        // 计算总的个数
        var itemsCount=items.length;
        // 一行3个，如果余2中间会空出一个空白
        // 所以对3取余如果是2的话，添一个空白的
        var left=itemsCount%3;
        if(left===2){
          items.push(null);
        }
        if (params && params.success) {
          params.success(items);
        }
      }
    });
  },
  // 详情
  getItemDetail:function(params){
    var id=params.id;
    var url="";
    url = globalUrls.detail+id+"?apikey=0df993c66c0c636e29ecbb5344252a4a";
    wx.request({
      url: url,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        // console.log(res);
        var item= res.data;
        // console.log(ameria);
        if ( params.success) {
          params.success(item);
        }
      }
    });
  },
  // 评论
  getItemComments:function(params){
    var id=params.id;
    var count=params.count?params.count:3;
    var start=params.start?params.start:0;
    var url="";
    url = globalUrls.comments(id,count,start);
    wx.request({
      url: url,
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        // console.log(res);
        var data = res.data;
        if (params.success) {
          params.success(data);
        }
      }
    });
  },
  // 搜索
  getSearch:function(params){
   var q= params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url:url,
      success:function(res){
        // console.log(res);
        var subjects=res.data.subjects;
        if(params.success){
          params.success(subjects);
        }
      }
    });
  }

}
export { network }