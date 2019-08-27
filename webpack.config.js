const path = require('path');
const webpack = require('webpack');
const axios = require('axios');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plgin');

module exports = {
   context: path.join(__dirname),
   entry: path.resolve(__dirname, 'src) + "assets/js/root.js",
   watch: true,
   optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin()],
   },
   performance: { hints: false },
   watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
   },
   output: {
      path: path.resolve(__dirname, "static/assets/js"),
      file: 'app.js',
      publicPath: '/static/assets/js'
   },
   module: {
      rules: [
         {
	   test:/\.js$/,
	   exclude: /node_modules/,
	   use: ["babel-loader"]
	 },
	 {
	   test: /\.scss$/,
	   use: [
	      MiniCssExtractPlugin.loader,
	      "css-loader",
	      {
	         loader: "sass-loader",
		 options: {
		    sourceMap: true,
		    implementation: require("node-sass")	 
		 }     
	      }
	   ]
	 },
	 {
	    test: /\.css$/,
	    use: [
	       MiniCssExtractPlugin.loader, 'css-loader'
	    ]
	 }
      ]
   },
   plugins:[
      new MinifyPlugin(),
      new MinifyExtractPlugin({
         filename:"[name].css",
	 chunkFilename: "[id].css",
	 path: path.resolve(__dirname, "static/assets/css")     
      })
   ]
}
