module.exports = {
  entry: ["./app/assets/javascripts/src/app.jsx"],
  output: {
    path: "./app/assets/javascripts/packed",
    filename: "transpiled_output.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
