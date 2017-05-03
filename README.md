# wikitolearn-frontend

New frontend for WikiToLearn

## Todo

* Test
	* Develop unit tests
		* https://github.com/vuejs-templates/webpack/tree/master/template/test/unit
		* https://github.com/eddyerburgh/avoriaz
	* Write test for existing components
* Work on a simple component library
	* Buttons, Form, Dropdown, Collapsible and other
	* Provide and emit events (so that parent can listen to events)
	* Take inspiration from [Element](https://github.com/ElemeFE/element/blob/dev/packages/) or [Quasar](https://github.com/quasarframework/quasar/)
	* Make tests
	* Modals and dialogs
		* We decided to develop a global Toast component with a set of APIs to interact with it (check out Quasar's Toast for inspiration)
		* Develop a local Modal component (similar to the `modals` branch)
* Vuex/Store
	* [Modularize the store](https://vuex.vuejs.org/en/modules.html)
	* [Make Test](https://vuex.vuejs.org/en/testing.html)
* SSR Head tags
	* Fix issues with titles
	* Enable the editing of other meta tags
		* Check if it is possible?
* Evaluate external editors for providing editing features

## Docs

Check out our [official documentation](docs/Index.md)

## Thanks

For mostly the build scripts and SSR we are using code from a few different repos:

* [vuejs/vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)
* [vuejs/pwa](https://github.com/vuejs/pwa/)
* [Narkoleptika/webpack-everything](https://github.com/Narkoleptika/webpack-everything)

The code for the build scripts and SSR was taken and changed for our needs.
