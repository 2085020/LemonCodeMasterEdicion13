const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');

module.exports = merge (common, {
    mode: "development",
    devServer: {
        port:8081
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new Dotenv({
            path:'./dev.env',
        })
    ],
})