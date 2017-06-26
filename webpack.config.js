const config = {
  entry: {
    main: __dirname + '/src/index.js',
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  }
}
module.exports = config

