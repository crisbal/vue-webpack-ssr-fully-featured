// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require("function-bind")

// Polyfill Promise for PhantomJS
import "es6-promise/auto"

// require all test files (files that ends with .spec.js)
const testsContext = require.context("./specs", true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// TODO: fix regex
// const srcContext = require.context("../../src", true, /^\.\/(?!(.*\.html|.*\.scss)$)/)
// srcContext.keys().forEach(srcContext)
