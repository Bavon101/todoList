const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: './src/index.html'
		}),
	],
	devServer: {
		port: 8080
	},
	output: {
	 clean: true,
	}
}