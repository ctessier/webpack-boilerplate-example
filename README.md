# Webpack Boilerplate Example

A Webpack configuration boilerplate example with Babel, React, ESLint and more...

* [Webpack initial setup](#webpack-initial-setup)
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
   "devDependencies": {
+    "webpack": "^5.3.2",
+    "webpack-cli": "^4.1.0"
   }
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

## Checklist

- [x] Webpack initial setup
- [ ] Babel loader for React
- [ ] Babel plugins
- [ ] ESLint check
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
