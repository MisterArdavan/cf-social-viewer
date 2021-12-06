const path = require("path");
const webpack = require("webpack");
const { argv } = require("yargs");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const buildConfigs = require("./src/configs/build");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { env } = argv;

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
                // use: [
                //     { loader: "style-loader" },
                //     {
                //         loader: "css-loader",
                //         options: {
                //             importLoaders: 1,
                //             modules: false,
                //         },
                //     },
                // ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(env),
            // ENV_CONFIGS: JSON.stringify(buildConfigs.ENV_CONFIGS[env]),
            API_URLS: JSON.stringify(buildConfigs.API_URLS[env]),
        }),
        new HtmlWebpackPlugin(),
    ],
};
