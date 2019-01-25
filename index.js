module.exports = {
  module: {
    rules: [
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: "file-loader",
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream",
      },
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
