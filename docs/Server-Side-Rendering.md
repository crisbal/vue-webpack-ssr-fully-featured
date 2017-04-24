# Server Side Rendering

It is possible for components to define a `preFetch` hook that will be called server side when rendering the component. This hook should return a promise that will resolve once the component is ready to be rendered.

The interesting part in `entry-server.js`:

```javascript
// Call preFetch hooks on components matched by the route.
// A preFetch hook dispatches a store action and returns a Promise,
// which is resolved when the action is complete and store state has been updated
Promise.all(matchedComponents.map((component) => {
	return component.preFetch && component.preFetch(store)
})).then(.....);
```

The `preFetch` hook will get access to the vuex `store` object to allow the dispatching of vuex action.

**Hint**: the `preFetch` hook won't be called client side, this means that you will also need to define the proper fetching actions in the `beforeMount` hook. Usually you should `preFetch` core data and `beforeMount`-fetch all of the data.

## Use cases

* Fetching stateless data (page content)
