var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

//var pathToReact = path.resolve(nodeModulesPath, 'react/dist/react.min.js');
//var pathToRedux = path.resolve(nodeModulesPath, 'redux/dist/redux.min.js');
//var pathToReactRedux = path.resolve(node_modules, 'react-redux/dist/react-redux.min.js');
//var pathToAmazeuiReact = path.resolve(nodeModulesPath, 'amazeui-react/dist/amazeui.react.js');



module.exports = {
  //自动刷新浏览器
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.jsx')],
  //加入别名以便于import
  resolve: {
    alias: {
      //'react': pathToReact,
      //'amazeui': pathToAmazeuiReact,
      //'redux': pathToRedux,
      //'react-dom': pathToReactDom,
      //'react-component-with-pure-render-mixin': pathToReactComponentWithPureRenderMixin,
      //'react-redux': pathToReactRedux,
    }
  },
  //合并之后的目录
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: buildPath, //Relative directory for base of server
    devtool: 'eval',
    hot: true, //Live-reload
    inline: true,
    port: 3000 //Port Number
  },
  devtool: 'eval',
  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    //Allows error warnings but does not stop compiling. Will remove when eslint is added
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    //Moves files
  //   new TransferWebpackPlugin([
  //     {
  //       from: 'app'
  //     }
  // ], path.resolve(__dirname, ""))
  ],
  module: {
    preLoaders: [
      {
        //Eslint loader
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath]
      },
    ],
    loaders: [{
      test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loaders: ['react-hot', 'babel-loader?optional=runtime&stage=0'], // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: [nodeModulesPath]
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader'
      )
    }],
    noParse: [
        //pathToReact,
        //pathToAmazeuiReact,
        //pathToRedux,
        //pathToReactRedux
      ] //不解析react
  },
  //eslint config options. Part of the eslint-loader package
  eslint: {
    configFile: '.eslintrc'
  },
};
