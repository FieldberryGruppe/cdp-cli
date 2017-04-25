var webpack = require('webpack');
var banner = require('./tasks/banner');

module.exports = {
    target: 'node',
    entry: [
      './built/cdp-cli.js'
    ],
    output: {
        path: process.cwd() + '/dist',
        filename: 'cdp-cli.js',
        libraryTarget: 'commonjs2',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
            },
        ],
    },
    // externals ���w�肵�Ȃ��ꍇ�A3rd Library �̎g�p������̂� concat �\
    externals: {
        'jsdom': {
            commonjs: 'jsdom',
            commonjs2: 'jsdom',
        },
    },
    resolve: {
        alias: {
            'cdp-lib': '../submodules/cdp-lib/dist/cdp-lib.js',
        },
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.BannerPlugin({
            banner: banner('.js'),
            raw: true,
            ntryOnly: true,
        }),
    ],
};
