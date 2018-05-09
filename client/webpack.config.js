module.exports = {
  entry: './components/index.js',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          compact: false,
          babelrc: true
        },
        test: /\.js?$/,
      }
    ]
  },
  output: {
    path: __dirname,
    filename: '../static/bundle.js'
  }
};
