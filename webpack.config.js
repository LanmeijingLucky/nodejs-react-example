var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/entry.js'),
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'bundle.js'
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.js?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {
        presets: ['react', 'es2015']}}
    ]
  },

  resolve:{
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    //extensions:['','.js','.json']
    extensions: ['*', '.js', '.es6']
  },
};
