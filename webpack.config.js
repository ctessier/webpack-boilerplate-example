const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
