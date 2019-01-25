module.exports = {
  module: {
    rules: [
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      },
      {
        test: /\.(ico|jpe?g|png|gif)$/i,
        loader: "file-loader?name=[name].[ext]",
      },
    ],
  },
};
