const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build"),
    },
  mode: process.env.NODE_ENV,
  devServer:{
      publicPath: '/build/',
      host: "0.0.0.0",
      port: process.env.PORT
    },
  module: {
    rules: [
      {
        test: /\js|jsx?/,
        exclude: path.join(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react",'@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
