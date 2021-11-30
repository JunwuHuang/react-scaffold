const CracoAntDesignPlugin = require("craco-antd")
const CracoLessPlugin = require("craco-less")
const CracoAlias = require("craco-alias")

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        babelPluginImportOptions: {
          libraryDirectory: "es",
          style: "css",
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: (lessRule) => ({
          ...lessRule,
          test: /\.module\.less$/,
          exclude: /node_modules|antd\.css$/,
        }),
        cssLoaderOptions: {
          modules: {
            localIdentName: "[local]_[hash:base64:5]",
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
}
