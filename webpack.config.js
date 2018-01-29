const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [ 'babel-loader' ]
            }
        ]
    },
    resolve: {
        extensions: [ '*', '*.js' ],
        alias: {
            '~': path.join(__dirname, '..', 'src')
        }
    }
};

