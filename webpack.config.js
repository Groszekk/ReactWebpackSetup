var path = require('path')
var hwp = require('html-webpack-plugin')

module.exports = {
    entry:
    {
        index: path.join(__dirname, '/src/index.js')
    },
    output: {
        publicPath: '/',
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        historyApiFallback: true,
        port: 9000,
	    // public: 'some.domain'
        // disableHostCheck: true,
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
            loader: 'babel-loader'
            }
        },
        {
            test: /\.less$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ]
        }
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}
