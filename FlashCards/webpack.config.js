"use strict";

var path = require("path");
//var WebpackNotifierPlugin = require("webpack-notifier");
//var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: {
        Index: "./wwwroot/Scripts/Home/react/index.tsx",
        FlashCard: "./wwwroot/Scripts/Home/react/Flashcards.tsx",
    },
    output: {
        path: path.resolve(__dirname, "./wwwroot/Scripts/dist/Home/react"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.ts(x?)$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
	mode: "production"
    //devtool: "inline-source-map",
    //plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};