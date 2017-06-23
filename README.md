# vue-webpack-ssr-fully-featured

A fully featured Vue.js boilerplate project that uses Vuex, vue-router, vue-i18n, Server Side Rendering and much, much more.

This is intended as a starting point for medium/big sized projects but also as a quick reference on how to do common things in the Vue ecosystem.

## Features

* Server Side Rendering
	* Async data fetching before rendering
	* Client hydration
	* Support people without JS
* Routing with vue-router
* State management with vuex
* Internazionalization with vue-i18n
	* Static/Compile-time i18n
	* Dynamic/Runtime i18n
* Head management
	* Title and meta tags support
* 404 Page
	* Returns 404 HTTP code
	* Customize it to your liking
* Progressive Web App ready
	* Install to home screen
	* Offline support (WIP)
* Build process managed by Webpack
	* Vue Single File Components
	* Write Javascript in ES6, Babel will transpile
	* Write style in Sass, just because plain CSS is boring
	* Write templates in pug, just because plain HTML is verbose
	* Code splitting and dynamic loading
		* Separate the requirements from your code
	* Automatic generation of Service Worker
	* Uglify and minify your JS
	* Much more
* Tests
	* Unit tests
		* Test components with avoriaz
		* Test Vuex actions and mutations
	* E2E tests
		* Test UI interaction with Nightwatch
* Fully customizable
* In-depth documentation

## Todo

* Find a better, shorter name for the project
* Handle errors for async data
* Vuex/Store
	* [Modularize the store](https://vuex.vuejs.org/en/modules.html)
		* Do we need this?
* Transform into a `vue-cli` template
	* Is it worth?

## Docs

Quickstart:

```
git clone https://github.com/crisbal/vue-webpack-ssr-fully-featured
cd vue-webpack-ssr-fully-featured
npm install
npm run dev
```

Check out the [official documentation](docs/Index.md) for info on how to get started and to get an idea on how everything works.

## Contributing

Feel free to submit issues and pull requests, I will try to answer as soon as possible.

## Thanks

For mostly the build scripts and SSR we are using code from a few different repos:

* [vuejs/vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)
* [vuejs/pwa](https://github.com/vuejs/pwa/)
* [Narkoleptika/webpack-everything](https://github.com/Narkoleptika/webpack-everything)

The code for the build scripts and SSR was taken and changed for our needs.
