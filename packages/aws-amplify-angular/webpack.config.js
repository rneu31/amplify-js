const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    entry: {
        'aws-amplify-angular': './src/index.ts',
        'aws-amplify-angular.min': './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: 'aws-amplify-angular',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new CompressionPlugin({
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                    declaration: false
                }
             },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                presets: ['react', 'es2015', 'stage-2'],
                }
            }
        ]
    }
};
