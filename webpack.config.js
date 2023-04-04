const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  // Load environment variables from the .env file
  const env = dotenv.config().parsed;

  // Define global constants for the environment variables
  const envKeys = Object.keys(env).reduce((acc, curr) => {
    acc[`process.env.${curr}`] = JSON.stringify(env[curr]);
    return acc;
  }, {});

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      fallback: {
        util: require.resolve('util/'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
