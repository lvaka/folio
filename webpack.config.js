const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
   context: path.join(__dirname),
   entry: path.resolve(__dirname, 'assets') + "/js/root.js",
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
      path: path.resolve(__dirname, "static/"),
      filename: 'js/app.js',
      publicPath: '/static/'
   },
   module: {
      rules: [
          { 
            test: /\.js$/, 
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
                     sourceMap:true,
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
   plugins: [
      new MinifyPlugin(),
      new MiniCssExtractPlugin({
         filename:"css/[name].css",
         chunkFilename: "[id].css",
         path: path.resolve(__dirname, "static/css")
      })
   ]
}