module.exports = {
  entry: './components/main.js',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          compact: false
        },
        test: /\.js?$/,
      }
    ]
  },
  output: {
    path: __dirname,
    filename: './bundle.js'
  }
};
