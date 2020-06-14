const path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    bail: true,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        modules: ['./src', './node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { 
                            failOnHint: true,
                            emitErrors: true,
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: false
        }),
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$/g,
            threshold: 1024,
            minRatio: 0.5
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs' 
        })
    ]
};
