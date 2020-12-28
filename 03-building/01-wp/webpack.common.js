const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const basePath = __dirname;


module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
      extensions: ['.js','.ts','.tsx'],
    },
    entry: {
      app:'./index.tsx',
      appStyles: ['./mystyles.scss',],
      vendorStyles: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
  },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: "/",
    },
    module: {
          rules: [
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
            },
            {
              test: /\.(png|jpg)$/,
              type: 'asset/resource',
            },
            {
             test: /\.html$/,
             loader: 'html-loader',
            },
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    import: false,
                    modules: {
                      exportLocalsConvention: "camelCase",
                      localIdentName: '[path][name]__[local]--[hash:base64:5]',
                      localIdentContext: path.resolve(__dirname, 'src'),
                      localIdentHashPrefix: 'my-custom-hash',
                   },
                  },
                },
                {
                  loader: "sass-loader",
                  options: {
                      implementation: require("sass")
                  }
                },
              ]
            },
            {
              test: /\.css$/,
              // exclude:/node_modules/,
              use: [
                MiniCssExtractPlugin.loader,
               "css-loader"
              ]  
            },
          ],
        },
        plugins: [
          //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
          new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
           }),
          new CleanWebpackPlugin(),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
            }),
        ],
  };

