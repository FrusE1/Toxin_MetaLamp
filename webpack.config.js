const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { TRUE } = require('node-sass');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

// const plugins = () => {
// 	const basePlugins = [
// 		new HTMLWebpackPlugin({
// 			template: path.resolve(__dirname, 'src/main.html'),
// 			filename: 'index.html',
// 			minify: {
// 				collapseWhitespace: isProd,
// 			}
// 		}),
// 		new MiniCssExtractPlugin({
// 			filename: `./css/${fileName('css')}`,
// 		}),
// 		new CopyWebpackPlugin({
// 			patterns: [
// 				{ from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist'), },
// 			],
// 		}),
// 	];

// 	if (isProd) {
// 		basePlugins.push(
// 			new ImageminPlugin({
// 				bail: false, // Ignore errors on corrupted images
// 				cache: true,
// 				imageminOptions: {
// 					// Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

// 					// Lossless optimization with custom option
// 					// Feel free to experiment with options for better result for you
// 					plugins: [
// 						["gifsicle", { interlaced: true }],
// 						["jpegtran", { progressive: true }],
// 						["optipng", { optimizationLevel: 5 }],
// 						[
// 							"svgo",
// 							{
// 								plugins: [
// 									{
// 										removeViewBox: false
// 									}
// 								]
// 							}
// 						]
// 					]
// 				}
// 			})
// 		)
// 	}
// };
module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './js/bundle.js',
	output: {
		clean: true,
		path: path.resolve(__dirname, 'dist'),
		filename: `./js/bundle.js`,
		assetModuleFilename: 'assets/[name].[ext][query]',
		publicPath: '',
	},
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, 'bundle'),
		open: true,
		compress: true,
		hot: true,
		port: 3000,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src/pug/main.pug'),
			filename: 'index.html',
			minify: {
				collapseWhitespace: isProd,
			}
		}),
		new MiniCssExtractPlugin({
			filename: `./css/${fileName('css')}`,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname, './src/images'), to: path.resolve(__dirname, './dist/images'), },
			],
		}),
	],
	// devtool: isProd ? false : 'source-map',
	// plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true,
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader'
				],
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => {
								return path.relative(path.dirname(resourcePath), context) + '/';
							},
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: `./images/[name][ext][query]`,
				},
			},
			{
				test: /\.(?:|woff2|woff|eot|svg|ttf)$/,
				type: 'asset/resource',
				generator: {
					filename: `./fonts/[name][ext][query]`,
				},
			},]
	},
};