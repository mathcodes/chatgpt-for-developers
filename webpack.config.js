const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser"),
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // 'production' | 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Exclude node_modules from being bundled, except for a few modules:
  externals: [nodeExternals({
    allowlist: ['path-browserify', 'stream-browserify', 'crypto-browserify', 'buffer/', 'process/browser']
  })],
};
