module.exports = {
  entry: './main.js',
  module: {
    rules: [
      {
        exclude: __dirname + '/node_modules/',
        include: __dirname + '/app/',
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
