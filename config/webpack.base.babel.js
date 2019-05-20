/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
// const tsImportPluginFactory = require('ts-import-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
// const AntdScssThemePlugin = require('antd-scss-theme-plugin');

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // Compile into js/build.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Transform all .tsx files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            ...options.babelQuery,
            // getCustomTransformers: () => ({
            //   before: [
            //     tsImportPluginFactory({
            //       libraryName: 'antd',
            //       libraryDirectory: 'lib',
            //       style: true,
            //     }),
            //   ],
            // }),
          },
        },
      },
      {
        // Preprocess our own .scss files
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    // new AntdScssThemePlugin(
    //   path.join(__dirname, 'src', 'assets', 'styles', 'theme.scss'),
    // ),
    new CheckerPlugin(),
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json', 'jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2,
    },
  },
});
