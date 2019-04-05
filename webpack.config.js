var path = require('path');
 // let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './app/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }/*,
  module: {
  rules: [
  
  {
        test: /\.js$/,
		loader: 'babel-loader',
		// exclude: '/node_modules/'
  },
  
  {
        // Первый вариант обработки
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
		// exclude: '/node_modules/'
		// Первый вариант обработки
		
		// Второй вариант обработки
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: "css-loader"
		)}
		// Второй вариант обработки
  }
  
  ]
  }
  */
  //,
  //devtool: 'eval-sourcemap'
  
  /*
  plugins: [new ExtractTextPlugin("styles.css")]
  */
};

/*
module.exports = (env, options) => {

let production = options.mode === 'production';

conf.devtool = production
? 'sourse-map'
? 'eval-soursemap';

return conf;
}
*/