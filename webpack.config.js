const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"), // Output to "build" folder
    filename: "bundle.js",
    publicPath: "/" // Ensures React Router works correctly
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader" // Using TypeScript loader
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the build folder before bundling
    new HtmlWebpackPlugin({
      template: "./build/index.html", // Now using "build/index.html"
      filename: "index.html" // Output to "build/index.html"
    })
  ]
};
