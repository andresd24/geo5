const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});

const HtmlWebpackRoutesPlugin = require('html-webpack-routes-plugin');

module.exports = {
    entry: path.join(__dirname, 'examples/src/index.js'),
    output: {
        path: path.join(__dirname, 'examples/dist'),
        filename: 'bundle.js',
        crossOriginLoading: false
    },
     devServer: {
        contentBase: path.join(__dirname, 'examples/src'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
        contentBase: './',
        hot: true,
         proxy: {
            '**': {
                target: 'http://adevivancocm.com:8080/',
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
/*        new HtmlWebpackRoutesPlugin([
            '/tetra',
            '/startetra'
          ]),*/
        htmlWebpackPlugin
    ],
    devServer: {
        hot: true
    }
};
