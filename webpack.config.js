//basic vars
const path = require('path');

//additional plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//module settings
module.exports = {
    // Базовый путь к проекту
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    // Точки входа js
    entry: {
        app: './src/js/index.js',
        // print: './src/js/print.js',
        // style: '.src/js/style.js',
        // style: './src/scss/style.scss',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // contentBase: './app',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './app/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: './css/[id].css',
        }),
    ],

    //  путь для собранных файлов
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            // SCSS
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                ],
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    ],
            },
        ],
    },
};