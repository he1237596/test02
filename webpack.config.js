let Path = require("path");
let webpack = require("webpack");
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
   plugins:[
   	 new webpack.optimize.CommonsChunkPlugin({//抽取公共js.在入口中出了自身都被引入的文件会被抽取出来
   	 	name:"base",
   	 	filename:"js/common.js" 
   	 })
   ]
};

module.exports = config;