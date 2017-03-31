const webpack = require('webpack')
const merge = require('webpack-merge')

const HTMLPlugin = require('html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

const base = require('./webpack.base.config')
const config = require("../config")

const clientConfig = merge(base, {
	plugins: [
		// strip dev-only code in Vue source
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"client"',
		}),
		// extract vendor chunks for better caching
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		// generate output HTML
		new HTMLPlugin({
			template: 'src/index.template.html'
		})
	]
})

if (process.env.NODE_ENV === 'production') {
	clientConfig.plugins.push(
		// minify JS
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		// auto generate service worker
		new SWPrecachePlugin({
			cacheId: 'vue-wikitolearn',
			filename: 'service-worker.js',
			dontCacheBustUrlsMatching: /./,
			staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
		})
	)
}

module.exports = clientConfig
