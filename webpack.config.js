const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: ["babel-polyfill", "./src/index.js"],
    devServer: {
        contentBase: path.join(__dirname, "src"),
        publicPath: "/",
        progress: true,
        port: 8080
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },

    ]
};