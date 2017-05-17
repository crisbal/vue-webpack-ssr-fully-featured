# vue-webpack-ssr-fully-featured

A fully featured boilerplate PWA project that uses Vue, Vuex, Vue-Router, vue-i18n (for localization), Server Side Rendering and much more

## Todo

* Test
	* Write test for existing components
* Vuex/Store
	* [Modularize the store](https://vuex.vuejs.org/en/modules.html)
	* [Make Test](https://vuex.vuejs.org/en/testing.html)
* SSR Head tags
	* Enable the editing of meta tags client side
		* Check if it is worth doing this client side?
* Complete 404 support
	* Return 404 HTTP status code when rendering 404 page
	* https://github.com/Narkoleptika/webpack-everything/commit/45f2ea06e49291549805b124f1ee7d1fb0ba51e1

## Docs

Check out our [official documentation](docs/Index.md)

## Thanks

For mostly the build scripts and SSR we are using code from a few different repos:

* [vuejs/vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)
* [vuejs/pwa](https://github.com/vuejs/pwa/)
* [Narkoleptika/webpack-everything](https://github.com/Narkoleptika/webpack-everything)

The code for the build scripts and SSR was taken and changed for our needs.
