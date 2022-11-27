const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');

module.exports = merge (common, {
    mode: "development",
    devServer: {
        port:8081
    },
    plugins: [
        new Dotenv({
            path:'./dev.env',
        })
    ],
})