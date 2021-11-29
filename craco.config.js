const CracoAntDesignPlugin = require("craco-antd")
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
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
}
