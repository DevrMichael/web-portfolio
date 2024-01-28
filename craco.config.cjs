/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
require('react-scripts/config/env');
const sassResourcesLoader = require('craco-sass-resources-loader');

const packages = [];

// Adjust the path to your shared components if necessary
packages.push(path.join(__dirname, '../../shared/components'));

const cracoConfig = {
  webpack: {
    configure: (webpackConfig) => {
      const babelLoader = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );

      if (babelLoader.isFound) {
        const include = Array.isArray(babelLoader.match.loader.include)
          ? babelLoader.match.loader.include
          : [babelLoader.match.loader.include];

        babelLoader.match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
  plugins: [],
};

const appTheme = process.env.REACT_APP_THEME;

if (appTheme) {
  // Update the resources path if your theme files are located elsewhere
  const sassResourcesLoaderPlugin = {
    plugin: sassResourcesLoader,
    options: {
      resources: `./themes/${appTheme}.scss`,
    },
  };

  cracoConfig.plugins.push(sassResourcesLoaderPlugin);
}

module.exports = cracoConfig;
