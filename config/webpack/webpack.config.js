const stylelintWebpackPlugins = require('./plugins/stylelint-webpack-plugin');

module.exports = (config) => {
  const cloneConfig = { ...config };
  cloneConfig.optimization.minimize = true;
  cloneConfig.plugins.push(stylelintWebpackPlugins());

  return cloneConfig;
};
