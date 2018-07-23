let Path = require("path");
let webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
//entry: Path.resolve(__dirname,"./src/js/index.js"),
  entry: {
	"module": Path.resolve(__dirname,"./src/js/module.js"),
		"base": Path.resolve(__dirname,"./src/js/base/base.js"),
  	"login": Path.resolve(__dirname,"./src/js/login/login.js"),
  	"index": Path.resolve(__dirname,"./src/js/index/index.js"),
  	"test": Path.resolve(__dirname,"./src/js/test/test.js")
  	
  },
  
  output:{
  	path: Path.resolve(__dirname,"./dist"),
//	filename:"index.js"
  	filename:"js/[name].js"
  },
  externals:{
        'jquery':'window.jQuery'//全局引入jq
   },
   module:{
   	rules:[
   	// {test:/\.css$/,use:["style-loader","css-loader"]}
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
                  fallback:"style-loader",
                  use:"css-loader"
              })
      }
   	]
   },
   plugins:[
   //独立通用模块
   	 new webpack.optimize.CommonsChunkPlugin({//抽取公共js.在入口中除了自身外被其他所有文件都有引入的文件会被抽取出来
   	 	name:"base",
   	 	filename:"js/common.js"
   	 }),
   	 //css单独打包
     new ExtractTextPlugin('css/[name].css'),
     //html模板处理
     new htmlWebpackPlugin({
     	template:'./src/views/index.html',
     	filename:'views/index.html',
     	inject: true,
     	hash:true,
     	chunks:['base','index','login'],
     	chunksSortMode: "manual"
     })
   ]
};

module.exports = config;