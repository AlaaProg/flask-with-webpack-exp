const webpack = require('webpack');
const path    = require('path');

const config = {
  entry: './public/src/app.js',
  watch:true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
    	},
    	{
    		test:/\.css$/,
    		use:['style-loader','css-loader']
    	}
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static/js'),
    publicPath: "http://127.0.0.1:8000/static/js"
  }, 
  devServer: {
    "hot":true,
    contentBase: 'public/template',
    proxy: {
      "/": "http://127.0.0.1:8000"
    }
  }

};


module.exports = config;