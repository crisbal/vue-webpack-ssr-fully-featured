# Build Process

The build process is started by `npm run build`

Using webpack[link_here] configuration files for both server and client, it will create dist/ directory containing all files ready to be deployed in production environment.

## Common configuration [file](../build/webpack.base.config.js)

Source code has to pass some steps before deploying:

### Linting

We use `stylelint` and `eslint` to lint style and script source code. Any "codestyle-warning" appear as "error" during build process so we have to pay attention at formalisms.

`stylelint` and `eslint` lints .scss, .js and .vue files.

### Localization

We use `vue-i18n` to resolve localization strings to the appropriate language.

Localization strings appears in source code as `$ts("my_string")` and will be overwritten by the corresponding value that "my_string" has in selected language, looking for fallback language if selected language is not found. Throws "errors" if there are no languages or if "my_string" doesn't exist.

### Transpiling ES2015

We use `buble` to transpile [ES2015 methods and properties](link_here)

### Compiling .vue

Vue files contains PUG (or HTML), JavaScript and SCSS (or another style language) source code. In the way it works, Vue has to be compiled to JavaScript files that can be imported dynamically reducing bandwidth and heavyness.

### Creating .js chunks

We creates .js chunks of similar dimension because of how HTTP/2 works better with. (to complete)

## Client configuration [file](../build/webpack.client.config.js)

### Minifying

Minify source code by removing useless whitespace, comments, renaming variables to a shorter name etc...

### Service worker generation

Tell the service worker `sw-precache` which are the file to be cached.

## Build server [file](../build/webpack.server.config.js)

### Server-Side Rendering

This has to be done to gain some useful benefits. Mostly ddone because of SEO readability and to support environment without JavaScript
