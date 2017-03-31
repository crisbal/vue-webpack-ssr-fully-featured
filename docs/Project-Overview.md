# Project Overview

## Technological stack

### Frontend

* Vue.js
* HTML
	* Maybe move to Pug?
* Sass

### Backend

* Node

### Build process

### Serving

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
		* `router/`, Vue-Router specific files
		* `store/`, Vuex specific files
		* `styles/`, global style declarations
		* `views/`, Vue components that define the layout of the app
		* `App.vue`, the main/entry-point component
		* `app.js`, the script that initializes the whole App
		* `entry-client.js`, bootstrap script executed by the client only
		* `entry-server.js`, bootstrap script executed by the server only, used in Server Side rendering
	* `_dist/`, contains
