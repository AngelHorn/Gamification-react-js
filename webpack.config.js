var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToRedux = path.resolve(node_modules, 'redux/dist/redux.min.js');
//var pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');
var pathToAmazeuiReact = path.resolve(node_modules, 'amazeui-react/dist/amazeui.react.js');

module.exports = {
  //自动刷新浏览器
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.jsx')],
  //加入别名以便于import
  resolve: {
    alias: {
      'react': pathToReact,
      'amazeui': pathToAmazeuiReact,
      'redux': pathToRedux,
      //'react-redux': pathToReactRedux,
    }
  },
  //合并之后的目录
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }],
    noParse: [
        pathToReact,
        pathToAmazeuiReact,
        pathToRedux,
        //pathToReactRedux
      ] //不解析react
  },
};