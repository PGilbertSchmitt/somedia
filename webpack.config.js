const path = require("path");
const fixDefaultImportPlugin = require("webpack-fix-default-import-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".js", ".ts", ".tsx", ".json"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      {
        test: [
          /\.tsx?$/
        ],
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new fixDefaultImportPlugin()
  ]
}; 