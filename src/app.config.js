export default {
  pages: [
    'pages/index/index',
    'pages/category/category',
    'pages/search/search',
    'pages/home/home',
    'pages/details/details',
    'pages/city/city'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/icon/index.png',
      'selectedIconPath': 'resource/icon/index_active.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      'iconPath': 'resource/icon/category.png',
      'selectedIconPath': 'resource/icon/category_active.png',
      pagePath: 'pages/category/category',
      text: '热门'
    }, {
      'iconPath': 'resource/icon/search.png',
      'selectedIconPath': 'resource/icon/search_active.png',
      pagePath: 'pages/search/search',
      text: '搜索'
    },{
      'iconPath': 'resource/icon/home.png',
      'selectedIconPath': 'resource/icon/home_active.png',
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
