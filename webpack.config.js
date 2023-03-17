const glob = require("glob");
const path = require("path");

module.exports = {
  entry: {
    // components: glob.sync("./assets/components/**/*.js"),
    home: glob.sync("./assets/js/pages/home.js"),
  }, // path to input files
  output: {
    filename: "[name]-bundle.js", // output bundle file name
    path: path.resolve(__dirname, "./static/js/bundles"), // path to our Django static directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    ],
  },
};
