const globalUrls={
  movieList:"https://douban.uieee.com/v2/movie/in_theaters",
  topList:"https://douban.uieee.com/v2/movie/top250",
  comList:"https://douban.uieee.com/v2/movie/coming_soon",
  detail:"http://api.douban.com/v2/movie/subject/",
  
  comments:function(id,count=3,start=0){
    return "https://douban.uieee.com/v2/movie/subject/"+id+"/comments?count="+count+"&start="+start
  },
  searchUrl:function(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q="+q
  }
}
export {globalUrls}