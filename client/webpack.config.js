/* eslint-disable prettier/prettier */
/* eslint-env node */
const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
require("dotenv").config();

// For production build, set this env var to the server public path.
const publicPath = process.env.APP_PUBLIC_PATH || "/bundle/";

module.exports = (_, argv) => {
  const { hot } = argv;
  return {
    entry: "./src/index.js",
    output: {
      filename: `[name][${hot ? "hash" : "chunkhash"}].js`,
      path: path.resolve(__dirname, "../server/public/bundle"),
      publicPath
    },
    devServer: {
      // host: '0.0.0.0', // Uncomment to allow connections from local network.
      https: false,
      historyApiFallback: true, // Default to expecting React Router.
      // Setup a proxy:
      proxy: {
        "/": {
          target: "http://127.0.0.1:8000",
          changeOrigin: true
        },
        "/api-mock/": {
          target: "http://127.0.0.1:3000"
        }
      }
    },
    module: {
      rules: [
        { parser: { amd: false } },
        {
          test: /\.m?jsx?/,
          include: path.resolve(__dirname, "src/"),
          use: ["babel-loader"]
        },
        {
          // For production, we output a separately cachable stylesheet.
          test: /\.css$/
        },
        {
          // Any file types which you want to add loaders for should be added to this
          // exclusion list. Otherwise the files will be turned into static links.
          exclude: [
            /\.html$/,
            /\.(m?js|jsx)$/,
            /\.scss$/,
            /\.css$/,
            /\.json$/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/
          ],
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
        },
        // "url" loader works just like "file" loader but it also embeds
        // assets smaller than specified size as data URLs to avoid requests.
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve("url-loader"),
          options: {
            limit: 10000,
            name: "static/media/[name].[hash:8].[ext]"
          }
        }
      ]
    },
    plugins: [
      new ManifestPlugin({
        writeToFileEmit: true,
        fileName: "../../storage/webpackManifest.json"
      })
    ]
  };
};
