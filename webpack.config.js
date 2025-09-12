const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => ({
	entry: {
		dashboard: './src-frontend/js/dashboard.js'
	},
	output: {
		path: path.join(__dirname, 'backend/static/js'),
		filename: 'dist.[name].js',
	},
	devtool: argv.mode === 'production' ? false : 'source-map',
	cache: false,
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(argv.mode),
	})]
});