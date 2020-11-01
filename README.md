# 📦☕ Webpack Boilerplate Example

[![Dependencies](https://img.shields.io/david/ctessier/webpack-boilerplate-example?style=flat-square)](https://github.com/ctessier/webpack-boilerplate-example)
[![License](https://img.shields.io/github/license/ctessier/webpack-boilerplate-example?color=%23B2878B&style=flat-square)](https://github.com/ctessier/webpack-boilerplate-example)

A Webpack configuration boilerplate example with Babel, React, ESLint and more...

* [Webpack initial setup](#webpack-initial-setup)
* [Babel for React](#babel-for-react)
* [Babel plugins](#babel-plugins)
  * [Class properties](#class-properties)
  * [Module resolver](#module-resolver)
* [ESLint check](#eslint-check)
* [Checklist](#checklist)
* [Going deeper](#going-deeper)

## Webpack initial setup

First we need to install `webpack` and `webpack-cli` as `devDependencies`.

```shell
$ npm i --save-dev webpack webpack-cli
```

#### `package.json`

```diff
   "description": "A Webpack configuration boilerplate example with Babel, React, ESLint, testing, and more...",
   "scripts": {
+    "build": "webpack",
     "test": "echo \"Error: no test specified\" && exit 1"
 },
```

```diff
   },
   "homepage": "https://github.com/ctessier/webpack-boilerplate-example#readme",
   "devDependencies": {
+    "webpack": "^5.3.2",
+    "webpack-cli": "^4.1.0"
   }
 }
```

Even though Webpack can work without any configuration file since version 4, one is necessary for this boilerplate. During the initial setup, it allows us to change the default entry and output files.

#### `webpack.config.js`

```diff
+const path = require('path');
+
+module.exports = {
+  entry: './src/App.js',
+  output: {
+    filename: 'app.js',
+    path: path.resolve(__dirname, 'dist'),
+  },
+};
```

Finally, we need to create our application entry file.

#### `src/App.js`

```diff
+console.log('Hello from App.js');
```

## Babel for React

Here, we are going to install React.js.

```shell
$ npm i --save react react-dom
```

Because React uses ES2015 and other specific syntax, we need to transpile the code to make it compatible with most browsers. Babel helps us with that thanks to the `babel-loader`. Two presets are required.

```shell
$ npm i --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```

#### `package.json`

```diff
   },
   "homepage": "https://github.com/ctessier/webpack-boilerplate-example#readme",
   "devDependencies": {
+    "@babel/core": "^7.12.3",
+    "@babel/preset-env": "^7.12.1",
+    "@babel/preset-react": "^7.12.1",
+    "babel-loader": "^8.1.0",
     "webpack": "^5.3.2",
     "webpack-cli": "^4.1.0"
+  },
+  "dependencies": {
+    "react": "^17.0.1",
+    "react-dom": "^17.0.1"
   }
 }
```

Then we need to tell Webpack to use the `babel-loader` on all `.js` and `.jsx` files.

#### `webpack.config.js`

```diff
     filename: 'app.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  module: {
+    rules: [
+      {
+        test: /\.(js|jsx)$/,
+        exclude: /node_modules/,
+        use: {
+          loader: "babel-loader",
+        },
+      },
+    ],
+  },
 };
```

Finally, let's inform Babel to use the right presets, and we can add some React to our application!

#### `.babelrc`

```diff
+{
+  "presets": ["@babel/preset-env", "@babel/preset-react"]
+}
```

#### `src/App.js`

```diff
-console.log('Hello from App.js');
+import React from 'react';
+import ReactDOM from 'react-dom';
+
+ReactDOM.render(
+  <h1>Hello, world!</h1>,
+  document.getElementById('root')
+);
```

## Babel plugins

Here we are going to add a few plugins to the Babel configuration.

### Class properties

This plugin allows to add properties to our class like so:

```diff
 class MyComponent extends React.Component {
-  constructor(props) {
-    super(props)
-    this.state({ toggle: false })
-  }
+  state = { toggle: false }

-  toggle() {
+  toggle = () => {
     this.setState(prevState => ({ toggle: !prevState.toggle }))
   }

   render() {
     return <p>I am {this.state.toggle ? 'toggled' : 'not toggled'}</p>
   }
 }
```

We need to install the [babel-plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) plugin.

```shell
$ npm i --save-dev @babel/plugin-proposal-class-properties
```

#### `.babelrc`

```diff
 {
-  "presets": ["@babel/preset-env", "@babel/preset-react"]
+  "presets": ["@babel/preset-env", "@babel/preset-react"],
+  "plugins": ["@babel/plugin-proposal-class-properties"]
 }
```

### Module resolver

This plugin allows to import modules using absolute paths, relative to a configured path, like so:

```diff
-import Button from './components/Button';
+import Button from 'components/Button';
```

Let's install the plugin and configure it:

```shell
$ npm i --save-dev babel-plugin-module-resolver
```

#### `.babelrc`

```diff
 {
   "presets": ["@babel/preset-env", "@babel/preset-react"],
-  "plugins": ["@babel/plugin-proposal-class-properties"]
+  "plugins": [
+    "@babel/plugin-proposal-class-properties",
+    ["module-resolver", {
+      "root": ["./src"]
+    }]
+  ]
 }
```

## ESLint check

[ESLint](https://eslint.org/) is a linter for Javascript. It helps developers following code style rules defined for the project.

Because we use React, we need to following `devDependencies`:

* `eslint`
* `@babel/eslint-parser` brings Babel features for ESLint so it can analyze modern Javascript
* `eslint-config-airbnb` provides a set of predefined rules
* `eslint-plugin-import` brings linting for import/export syntax
* `eslint-plugin-react` provides a set of predefined rules for React
* `eslint-webpack-plugin` allows to run the linter while bundling
* `eslint-plugin-jsx-a11y` provides rules for accessibility (peer dependency of the Airbnb package)
* `eslint-plugin-react-hooks` provides rules for React hooks (peer dependency of the Airbnb package)

```shell
$ npm i --save-dev eslint @babel/eslint-parser eslint-plugin-import eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Then we need to provide ESLint with a configuration file. It is possible to run `eslint --init` to automatically generate one.

#### `.eslintrc`

```diff
+{
+   "env": {
+     "browser": true,
+     "es2021": true
+   },
+   "extends": [
+     "plugin:react/recommended",
+     "airbnb"
+   ],
+   "parser": "@babel/eslint-parser",
+   "parserOptions": {
+     "ecmaFeatures": {
+       "jsx": true
+     },
+     "ecmaVersion": 12,
+     "sourceType": "module"
+   },
+   "plugins": [
+     "react"
+   ],
+   "settings": {
+     "import/resolver": {
+       "node": {
+         "extensions": [".js"],
+         "paths": ["./src"]
+       }
+     }
+   },
+   "rules": {
+     "import/extensions": "off",
+     "react/jsx-props-no-spreading": ["warn", { "html": "ignore" }],
+     "react/state-in-constructor": ["error", "never"]
+  }
+}
```

Finally, to run ESLint when bundling, or via a NPM command:

#### `webpack.config.js`

```diff
   mode: 'development',
   entry: './src/App.jsx',
+  plugins: [
+    new ESLintPlugin({
+      files: 'src',
+      extensions: ['js', 'jsx'],
+    }),
+  ],
   output: {
     filename: 'app.js',
```

#### `package.json`

```diff
   "scripts": {
     "build": "webpack --mode development",
+    "lint": "eslint src --ext js,jsx",
     "test": "echo \"Error: no test specified\" && exit 1"
   },
```

## Checklist

- [x] Webpack initial setup
- [x] Babel loader for React
- [ ] Babel plugins
- [x] ESLint check
- [ ] Html Loader and hot reloading
- [ ] Multi-outputs
- [ ] Source map files
- [ ] Multi-environment
- [ ] Mocking
- [ ] Module Replacement
- [ ] Notifier
- [ ] Bundle Analyzer
- [ ] Code-splitting
- [ ] Html Loader with multi-outputs

## Going deeper

- cross-env
- webpack performance `maxEntrypointSize`
- webpack merge
- production source maps
- transform-runtime for optimizing build size
- other plugins (see [https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/package.json](https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/package.json))
- rule for ordering the imports (eslint/order)
