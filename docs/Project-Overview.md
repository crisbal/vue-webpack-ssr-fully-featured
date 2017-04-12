# Project Overview

## Technological stack

**Frontend**

* Vue.js
	* Routing with vue-router
	* Store with vuex
	* Fetching HTTP data with axios
* Pug
* Sass

**Backend**

* Node
	* Express
	* Vue SSR (Server Side Rendering)

**Build process**

There are two build process, the first is the build process for the client and the second is the one for the server.

* Webpack

## Project Structure

* `/`
	* `build/`, Webpack build configs
		* `webpack.base.config.js`, the build config used both for the client and for the server
		* `webpack.client.config.js`, extends the base config to implement customizations strictly related to the client
		* `webpack.server.config.js`, same as the client one but for the server
	* `docs/`, documentation about the project
	* `i18n/`, localization files
	* `src/`, source file for the project
		* `components/`, reusable Vue UI components
		* `images/`, images used by the application
			* These will be processed by webpack's `url-loader`
		* `router/`, Vue-router specific files
		* `store/`, Vuex specific files
		* `styles/`, global style declarations
		* `views/`, Vue components that define the layout of the app
		* `App.vue`, the main/entry-point component
		* `app.js`, the script that initializes the whole App
		* `entry-client.js`, bootstrap script executed by the client only
		* `entry-server.js`, bootstrap script executed by the server only, used in SSR
	* `static/`, static files to be served as is
		* Don't put images required by components here
	* `tests/`
		* `e2e/specs/`, Nightwatch end-to-end tests
	* `dist/`, contains built files
	* `config.js`, configuration file for building the project
	* `server.js`, a standard Express server configured for SSR
