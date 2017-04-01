const path = require('path')
const webpack = require('webpack')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StringReplacePlugin = require('string-replace-webpack-plugin')

const Polyglot = require('node-polyglot')

const config = require("../config")

const isProduction = config.isProduction

const phrases = require(`./../i18n/${config.language.filename}.json`)
let polyglot = new Polyglot({phrases: phrases});

const commonPlugins = [
	new StringReplacePlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(config.nodeEnv),
		'PRODUCTION': config.isProduction,

		'LANGUAGE_FILENAME': JSON.stringify(config.language.filename),
		'LANGUAGE_ISRTL': config.language.isRTL,
	})
]

const doI18n = StringReplacePlugin.replace({
	replacements: [{
    pattern: /\$\{([\w.]+)\}/g,
    replacement: function (match, translationKey, offset, string) {
    	let phrase = polyglot.t(translationKey)
    	if (phrase == translationKey) {
    		console.log(`Undefined translation key '${translationKey}' in '${config.language.filename}.json'`)
    	}
      return phrase;
    }
  }]
})

module.exports = {
	devtool: isProduction
		? false
		: '#cheap-module-eval-source-map', // smaller source map

	entry: {
		app: './src/entry-client.js',
		vendor: [
      'es6-promise/auto',
			'vue',
			'vue-router',
      'vuex',
      'vuex-router-sync'
		]
	},

	output: {
		path: path.resolve(__dirname, '../_dist'),
		publicPath: '/dist/',
		filename: '[name].[chunkhash].js'
	},

	resolve: {
		alias: {
			'static': path.resolve(__dirname, '../static'),
			'styles': path.resolve(__dirname, '../src/styles'),
			'views': path.resolve(__dirname, '../src/views')
		}
	},

	module: {
		//noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
	      enforce: 'pre',
  	    test: /\.(vue|js)$/,
	  	  loader: 'eslint-loader',
      	exclude: /node_modules/
      },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					preLoaders:{
						pug: doI18n,
						html: doI18n
          }
				}
			},
			{
				test: /\.js$/,
				loader: ['buble-loader?objectAssign=Object.assign'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},

	performance: {
		maxEntrypointSize: 300000,
		hints: isProduction ? 'warning' : false
	},

	plugins: isProduction ? commonPlugins : commonPlugins.concat([
		new FriendlyErrorsPlugin()
	])
}
