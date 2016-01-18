module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    host: '10.10.10.103',
    inline: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
}
