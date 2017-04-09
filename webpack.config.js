const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const ENV = require('./env');
const PATHS = {
  src: path.join(__dirname, 'src/index.js'),
  test: path.join(__dirname, 'test'),
  build: path.join(__dirname, 'www'),
};

const entry = ENV == 'test' ? PATHS.test : PATHS.src
const outputFilename = ENV == 'test' ? 'bundle.test.js' : 'bundle.app.js'

process.env.BABEL_ENV = ENV;

const common = {
  entry: entry,
  output: {
    path: PATHS.build,
    filename: outputFilename,
  },
  resolve: {
    extensions: ["", ".js"],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?url=false'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.html/,
        loader: 'html-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __API__: "'http://192.168.0.103:4000'",
      __STUB_SERVER__: false
    }),
  ],
};

if (ENV === 'development') {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __API__: "'http://192.168.0.103:4000'",
        __STUB_SERVER__: true
      }),
    ],
  });
} else {
  // config can be added here for minifying / etc
  module.exports = merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        __API__: "'http://192.168.0.103:4000'",
      }),
    ],
  });
}
