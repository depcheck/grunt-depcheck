# grunt-depcheck

[![Build Status](https://travis-ci.org/depcheck/grunt-depcheck.svg?branch=master)](https://travis-ci.org/depcheck/grunt-depcheck)
[![dependencies Status](https://david-dm.org/depcheck/grunt-depcheck/status.svg)](https://david-dm.org/depcheck/grunt-depcheck)
[![devDependencies Status](https://david-dm.org/depcheck/grunt-depcheck/dev-status.svg)](https://david-dm.org/depcheck/grunt-depcheck?type=dev)

> Depcheck Grunt plugin

## Getting Started

This plugin is compatible with Grunt `>= 0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-depcheck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-depcheck');
```

## The "depcheck" task

### Overview
In your project's Gruntfile, add a section named `depcheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  depcheck: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Options

#### options.withoutDev
Type: `Boolean`
Default value: `false`

By default, `depcheck` looks at the devDependencies from the `package.json` file in order to look at unused dependencies. Set this to `true` and
it will look only at the `dependencies`.

#### options.ignoreDirs
Type: `Array`
Default value: `[.git','.svn','.hg','.idea','node_modules','bower_components']`

A list of directories to be ignored.

#### options.ignoreMatches
Type: `Array`
Default value: `[]`

Ignore dependencies that match these minimatch patterns. For example `grunt-*`

#### options.failOnUnusedDeps
Type: `Boolean`
Default value: `false`

Set this to `true` to make unused dependencies respond as a failure in Grunt.

#### options.failOnMissingDeps
Type: `Boolean`
Default value: `false`

Set this to `true` to make missing dependencies respond as a failure in Grunt.

#### options.listMissing
Type: `Boolean`
Default value: `false`

By default, only the names of packages that are used but not set in the `package.json` will be included in the Grunt output. Set this to `true`
and the Grunt output will also list all the files where the missing dependency is being used.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
