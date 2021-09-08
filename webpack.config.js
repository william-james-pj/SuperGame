const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => ({
  mode: argv.mode === "development" ? "development" : "production",
  devtool: argv.mode === "development" ? "inline-source-map" : false,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: "/",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "asset/[hash][ext]",
          publicPath: "/",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
});
