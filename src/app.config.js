export default {
  pages: [
    'pages/index/index',
    'pages/category/category',
    'pages/search/search',
    'pages/home/home',
    'pages/details/details',
    'pages/city/city',
    'pages/venueDetails/venueDetails',
    'pages/ask/ask',
    'pages/answer/answer',
    'pages/notice/notice'
  ],
  tabBar: {
    list: [{
      'iconPath': 'static/icon/index.png',
      'selectedIconPath': 'static/icon/index_active.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'static/icon/category.png',
      'selectedIconPath': 'static/icon/category_active.png',
      pagePath: 'pages/category/category',
      text: '热门'
    }, {
      'iconPath': 'static/icon/search.png',
      'selectedIconPath': 'static/icon/search_active.png',
      pagePath: 'pages/search/search',
      text: '搜索'
    },{
      'iconPath': 'static/icon/home.png',
      'selectedIconPath': 'static/icon/home_active.png',
      pagePath: 'pages/home/home',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#ff2959',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black'
  }
}
