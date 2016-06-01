/**
 * Created by tcstory on 5/11/16.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/pages/app/app.jsx',
        'react-libs': ['react', 'react-dom']
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: "js/chunk/[name].js",
        path: './dist',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
                    publicPath: '../'
                })
            },
            {
                test: /\.(scss)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader', {
                    publicPath: '../'
                })
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                loader: 'url-loader?limit=8192&name=asset/images/[name].[ext]'
            },
            {
                test: /\.(m4a|mp3)$/,
                loader: 'file-loader?name=asset/audios/[name].[ext]'
            }
        ],
        noParse: [
            'node_modules/react/dist/react.min.js',
            'node_modules/react-dom/dist/react-dom.min.js'
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        contentBase:'./dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/app/app.html',
            filename: 'app.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: "react-libs",
            filename: "js/react-libs.js",
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ]
};

