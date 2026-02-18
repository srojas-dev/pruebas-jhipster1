<<<<<<< Updated upstream
const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
=======
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { DefinePlugin } = require('webpack');

>>>>>>> Stashed changes
const packageJson = require('../package.json');
// Microfrontend api, should match across gateway and microservices.
const apiVersion = '0.0.1';

const sharedDefaults = { singleton: true, strictVersion: true, requiredVersion: apiVersion };
<<<<<<< Updated upstream
const shareAllDefaults = { ...sharedDefaults, requiredVersion: 'auto' }
=======
>>>>>>> Stashed changes
const shareMappings = (...mappings) => Object.fromEntries(mappings.map(map => [map, { ...sharedDefaults, version: apiVersion }]));

const shareDependencies = ({ skipList = [] } = {}) =>
  Object.fromEntries(
    Object.entries(packageJson.dependencies)
      .filter(([dependency]) => !skipList.includes(dependency))
      .map(([dependency, version]) => [dependency, { ...sharedDefaults, version, requiredVersion: version }]),
  );

<<<<<<< Updated upstream
let sharedDependencies = shareDependencies({ skipList: ['@angular/localize', 'zone.js'] });
sharedDependencies = {
  ...sharedDependencies,
  '@angular/common/http': sharedDependencies['@angular/common'],
  'rxjs/operators': sharedDependencies.rxjs,
};

module.exports = (config, options, targetOptions) => {
  return withModuleFederationPlugin({
<<<<<<< Updated upstream
    name: 'aaaa',
=======
    name: 'ffffff',
>>>>>>> Stashed changes
    exposes: {
      './entity-navbar-items': 'app/entities/entity-navbar-items.ts',
      './entity-routes': 'app/entities/entity.routes.ts',
    },
    shared: {
      ...sharedDependencies,
      ...shareMappings(
        'app/config/input.constants',
        'app/config/pagination.constants',
        'app/config/translation.config',
        'app/core/auth',
        'app/core/config',
        'app/core/interceptor',
        'app/core/request',
        'app/core/util',
        'app/shared',
        'app/shared/alert',
        'app/shared/auth',
        'app/shared/date',
        'app/shared/language',
        'app/shared/pagination',
        'app/shared/sort',
      ),
    },
  });
=======
module.exports = ({ serve }) => {
  return {
    optimization: {
      moduleIds: 'named',
      chunkIds: 'named',
      runtimeChunk: false,
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'asdasdasd',
        filename: 'remoteEntry.js',
        shareScope: 'default',
        exposes: {
          './entities-menu': './src/main/webapp/app/entities/menu',
          './entities-routes': './src/main/webapp/app/entities/routes',
        },
        shared: {
          ...shareDependencies(),
          ...shareMappings(
            'app/config/constants',
            'app/config/store',
            'app/shared/error/error-boundary-routes',
            'app/shared/layout/menus/menu-components',
            'app/shared/layout/menus/menu-item',
            'app/shared/reducers',
            'app/shared/reducers/locale',
            'app/shared/reducers/reducer.utils',
            'app/shared/util/date-utils',
            'app/shared/util/entity-utils',
          ),
        },

      }),
      new DefinePlugin({
        ASDASDASD_I18N_RESOURCES_PREFIX: JSON.stringify(''),
      }),

    ],
    output: {
      publicPath: 'auto',
    },
  };
>>>>>>> Stashed changes
};
