const withBundleStats = require('next-plugin-bundle-stats');

const webpackConfigFn = require('./config/webpack/webpack.config');

module.exports = withBundleStats()({
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  webpack: webpackConfigFn,
  sassOptions: {
    prependData: `
      @import "/src/styles/_variables.scss";
      @import "/src/styles/_mixins.scss";
    `,
  },
});
