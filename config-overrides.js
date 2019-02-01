const path = require('path')
const {
  override,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  addWebpackAlias,
  addBundleVisualizer,
} = require("customize-cra");

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  webpack: override(
    // usual webpack plugin
    addDecoratorsLegacy(),
    addBundleVisualizer(),
    addWebpackAlias({
      ['@']: resolve("src/")
    }),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};

