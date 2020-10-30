# Webpack Boilerplate Example

A Webpack configuration boilerplate example with Babel, React, ESLint and more...

* [Webpack initial setup](#webpack-initial-setup)
* [Babel for React](#babel-for-react)
* [Checklist](#checklist)
* [Going deeper](#going-deeper)

## Webpack initial setup

First we need to install `webpack` and `webpack-cli` as `devDependencies`.

```bash
$ npm i --save-dev webpack webpack-cli
```

#### `package.json`
```diff
   "scripts": {
+    "build": "webpack --mode production"
   }
+  "devDependencies": {
+    "webpack": "^5.3.2",
+    "webpack-cli": "^4.1.0"
+  }
```

Even though Webpack can work without any configuration file since version 4, one is necessary for this boilerplate. During the initial setup, it allows us to change the default entry and output files.

#### `webpack.config.js`

```diff
+   const path = require('path');
+
+   module.exports = {
+     entry: './src/App.js',
+     output: {
+       filename: 'app.js',
+       path: path.resolve(__dirname, 'dist'),
+     },
+   };
```

Finally, we need to create our application entry file.

#### `src/App.js`

```diff
+   console.log('Hello from App.js');
```

## Babel for React

Here, we are going to install React.js.

```bash
$ npm i --save react react-dom
```

Because React uses ES2015 and other specific syntax, we need to transpile the code to make it compatible with most browsers. Babel helps us with that thanks to the `babel-loader`. Two presets are required.

```bash
$ npm i --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```

#### `package.json`

```diff
   "devDependencies": {
+     "@babel/core": "^7.12.3",
+     "@babel/preset-env": "^7.12.1",
+     "@babel/preset-react": "^7.12.1",
+     "babel-loader": "^8.1.0",
      "webpack": "^5.3.2",
      "webpack-cli": "^4.1.0"
   },
+   "dependencies": {
+     "react": "^17.0.1",
+     "react-dom": "^17.0.1"
+   }
```

Then we need to tell Webpack to use the `babel-loader` on all `.js` and `.jsx` files.

#### `webpack.config.js`

```diff
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   module: {
+     rules: [
+       {
+         test: /\.(js|jsx)$/,
+         exclude: /node_modules/,
+         use: {
+           loader: "babel-loader",
+         },
+       },
+     ],
+   },
  };
```

Finally, let's inform Babel to use the right presets, and we can add some React to our application!

#### `.babelrc`

```diff
+  {
+    "presets": ["@babel/preset-env", "@babel/preset-react"]
+  }
```

#### `src/App.js`

```diff
-  console.log('Hello from App.js');
+  import React from 'react';
+  import ReactDOM from 'react-dom';
+
+  ReactDOM.render(
+    <h1>Hello, world!</h1>,
+    document.getElementById('root')
+  );
```

## Checklist

- [x] Webpack initial setup
- [x] Babel loader for React
- [ ] Babel plugins
- [ ] ESLint check
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
