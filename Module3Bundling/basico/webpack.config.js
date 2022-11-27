const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.tsx"],
    resolve: {
        extensions : [".js",".ts",".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: "./src/index.html", //Name of template in ./src
            scriptLoading: 'blocking', // Just use the blocking approach (no modern defer or module)
            hash: true,
        }),
    ],
    devServer: {
        port: 4321,
        open:true,
        hot:true,
        devMiddleware : {
            stats: "errors-only"
        }
    },
    
};