const path = require('path');
module.exports = [{
		entry: {
		main: ['./lib/main.js'],
		},
		output: {
		path: path.resolve(__dirname, 'build'),
		//publicPath: '/assets/',
		filename: 'bundle.js',
		},
		devtool: 'inline-source-map',
		module: {
		rules: [{
		test: /.js?$/,
		exclude: /(node_modules|bower_components)/,
		use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
		}, {
		test: /.json$/,
		loader: 'json-loader',
		}, {
		test: /.css$/,
		//loader: 'style-loader!css-loader',
       use:['style-loader','css-loader'],




		}],
	},
}];