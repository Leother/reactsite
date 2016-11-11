
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =
{
    entry:
    {
         "main":'./src/js/index.js'

    },
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9090
    },
    output: {
        // path: __dirname+'/app/js',  //输出文件夹
        path: __dirname+'/app/js',  //输出文件夹
        filename:'index.js'   //最终打包生成的文件名
    },

    module:{
        loaders:[
            //{test:/\.css$/,loader:"style!css"}
            {test:/\.css$/,loader:ExtractTextPlugin.extract("style","css")},
            {test:/\.js$/,loader:"babel"} , //query选项用来去除多余的空格
            {test:/\.(jpg)|(png)$/,loader:"url?limit=50000"}
        ]
    }


}