module.exports = {
    entry: "./src/js/init.js",
    output: {
        path: 'src/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css"},
            {test: /\.useable\.css$/, loader: "style/useable!css"},
            {
                test: /\.less$/,
                exclude: /\.useable\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {test: /\.useable\.less$/, loader: "style/useable!css!less!"},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src/js/components', 'src/js/mixins'],
        extensions: ['', '.js', '.jsx']
    }
};